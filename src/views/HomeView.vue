<script setup lang="ts">
import {ref, watch, onBeforeMount} from "vue";
import DetailsDialog from "@/features/npmPackages/components/DetailsDialog.vue";
import PackagesTable from "@/features/npmPackages/components/PackagesTable.vue";
import {useDebounceFn} from "@vueuse/core";
import type {IPackage} from "@/common/types/IPackage";
import {useDateFormat} from "@/composables/useDateFormat";
import {useGetPackagesStore} from "@/stores/packages";
import {QTableColumn} from "quasar";

const columns = ref<QTableColumn[]>(
[
    {
      name: 'name',
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true
    },
    { name: 'scope', align: 'left', label: 'Scope', field: 'scope', sortable: true },
    { name: 'version', align: 'left', label: 'Version', field: 'version', sortable: true },
    { name: 'date',
        align: 'left',
        label: 'Date',
        field: 'date',
        sortable: true,
        format: (_, row) => useDateFormat(row.date),
    },
    {
      name: 'open',
      label: 'Actions',
      field: '',
      align: 'left',
      sortable: false,
    }
  ]
);
const searchQuery = ref('');
const showDetailsDialog = ref(false);
const detailsInfo = ref<IPackage>();

const packagesStore = useGetPackagesStore();

//!!! a solution without a store manager
// const { data: packages, execute: searchPackagesFn, loading } = useFetch<IResponseObject[]>(() => useNpmAPI().searchPackages(searchQuery.value));

//!!! a solution without a store manager
// const packagesList = computed<IPackage[]>(() => {
//     return packages.value ? packages.value.objects.map((item) => item.package) : [];
// })

const debouncedSearchPackagesFn = useDebounceFn(async () => {
    //!!! a solution without a store manager
    // await searchPackagesFn();
    await packagesStore.getPackages(searchQuery.value);
}, 1000);

function openDetailsDialog(status: boolean, data: any) {
    showDetailsDialog.value = status;
    detailsInfo.value = data;
}

watch(searchQuery, () => {
    debouncedSearchPackagesFn();
})

onBeforeMount(async () => {
    //!!! a solution without a store manager
    // await searchPackagesFn();
    await packagesStore.getPackages(searchQuery.value);
})
</script>

<template>
  <div class="home-view q-pa-md">
      <PackagesTable
        :list="packagesStore.packagesList"
        class="pa-4"
        :columns="columns"
        @on-open-details-info="openDetailsDialog"
        v-model="searchQuery"
        :loading="packagesStore.loading"
      />

      <DetailsDialog v-if="detailsInfo" v-model="showDetailsDialog" :data="detailsInfo" />
  </div>
</template>
