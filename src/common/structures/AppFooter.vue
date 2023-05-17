<script setup lang="ts">

import BaseUserItem from "@/common/components/base/BaseUserItem.vue";
</script>

<template>
    <q-footer bordered class="bg-primary">
        <BaseUserItem>
            <template #avatar>
                <img src="@/assets/images/avatar.jpeg" alt="Avatar" />
            </template>

            <template #name>
                Name: Osypov Tymur
            </template>

            <template #link>
                <div class="text-white">Github:
                    <a href="https://github.com/Timur0076565" target="_blank" class="text-white">https://github.com/Timur0076565</a>
                </div>
            </template>
        </BaseUserItem>
    </q-footer>
</template>
