<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  modelValue: unknown | null,
}>();

const emit = defineEmits(['update:modelValue']);
const search = useVModel(props, 'modelValue', emit);
</script>

<template>
    <q-input borderless dense debounce="300" v-model="search" placeholder="Search">
        <template v-slot:append>
            <q-icon name="search" />
        </template>
    </q-input>
</template>
