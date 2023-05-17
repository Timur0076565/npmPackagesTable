<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppFooter from "@/common/structures/AppFooter.vue";
</script>

<template>
  <q-layout>
    <RouterView />
    <AppFooter />
  </q-layout>
</template>

<style scoped>
</style>
