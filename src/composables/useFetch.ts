import { ref } from 'vue';

//!!! a solution without a store manager
export function useFetch<T>(callback: () => Promise<T>) {
    const loading = ref(false);

    const data = ref<T>();

    const error = ref<Error | unknown>();

    async function execute() {
        try {
            loading.value = true;

            data.value = await callback();
        } catch (e) {
            error.value = e;
        } finally {
            loading.value = false;
        }
    }

    return { loading, execute, data, error };
}
