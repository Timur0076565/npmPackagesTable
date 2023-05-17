import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useNpmAPI} from "@/features/npmPackages/composables/useNpmAPI";
import type {IObject, IResponseObject} from "@/common/types/IResponseObject";

export const useGetPackagesStore = defineStore('getPackages', () => {
  const loading = ref(false);
  const data = ref<IResponseObject>();
  const error = ref<Error | unknown>();

  const packagesList = computed(() => {
    return data.value ? data.value.objects.map((item: IObject) => item.package) : [];
  })

  async function getPackages(search: string) {
    try {
      loading.value = true;

      data.value = await useNpmAPI().searchPackages(search);
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return { packagesList, getPackages, loading }
})
