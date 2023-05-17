<script setup lang="ts">
import SearchField from "@/common/components/base/SearchField.vue";
import {ref, computed} from "vue";
import type {IPackage} from "@/common/types/IPackage";
import type {QTableColumn} from "quasar";
import {useVModel} from "@vueuse/core";

const props = defineProps<{
  list: IPackage[],
  columns: QTableColumn[],
  modelValue: unknown | null,
  loading: boolean,
}>();

const emit = defineEmits<{
    (e: 'onOpenDetailsInfo', status: boolean, data: IPackage): void,
    (e: 'update:modelValue', value: unknown | null,): void,
}>();

const navigationActive = ref(false);
const search = useVModel(props, 'modelValue', emit);
const pagination = ref({
    rowsPerPage: 10,
});
const selected = ref([]);

const tableClass = computed(() => navigationActive.value ? 'shadow-8 no-outline' : null);

function toggleNavigation(value: boolean) {
    navigationActive.value = value;
}

function openDetails(data: IPackage) {
    emit('onOpenDetailsInfo', true, data)
}

</script>

<template>
    <q-table
        flat bordered
        ref="tableRef"
        tabindex="0"
        :class="tableClass"
        title="Packages:"
        :rows="list"
        :columns="columns"
        row-key="name"
        selection="none"
        v-model:selected="selected"
        v-model:pagination="pagination"
        @focusin="toggleNavigation(true)"
        @focusout="toggleNavigation(false)"
        :loading="loading"
    >
        <template v-slot:top-right>
            <SearchField v-model="search" />
        </template>

        <template v-slot:body-cell-open="props">
            <q-td :props="props">
                <q-btn color="secondary" size="sm" label="Details" @click="openDetails(props.row)"/>
            </q-td>
        </template>
    </q-table>
</template>
