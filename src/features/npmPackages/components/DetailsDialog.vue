<script setup lang="ts">
import {useVModel} from "@vueuse/core";
import {useDateFormat} from "../../../composables/useDateFormat";
import BaseUserItem from "@/common/components/base/BaseUserItem.vue";
import type {IPackage} from "@/common/types/IPackage";

const props = defineProps<{
    modelValue: boolean,
    data: IPackage,
}>()

const emit = defineEmits(['update:modelValue']);
const show = useVModel(props, 'modelValue', emit);

</script>

<template>
    <q-dialog v-model="show">
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h4">Details</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
                <div class="text-h6">{{ data.name }}</div>
                <div class="text-subtitle2">{{ data.version }}</div>
            </q-card-section>

            <q-card-actions v-if="data.keywords.length">
                <div class="text-subtitle2 q-mr-sm">Keywords:</div>

                <template v-for="keyword in data.keywords" :key="keyword">
                    <q-chip size="sm">{{ keyword }}</q-chip>
                </template>
            </q-card-actions>

            <q-separator />

            <q-card-section>
                <p>{{ data.description }}</p>

                <a class="ext-subtitle2" v-if="data.links" :href="data.links.npm" target="_blank">{{ data.links.npm }}</a>
            </q-card-section>

            <q-separator />

            <q-card-section v-if="data.author">
                <div class="text-subtitle2">Author:</div>

                <BaseUserItem>
                    <template #name>
                        {{ data.author.name }}
                    </template>

                    <template #username>
                        {{ data.author.username }}
                    </template>

                    <template #email>
                        {{ data.author.email }}
                    </template>
                </BaseUserItem>
            </q-card-section>

            <q-separator />

            <q-card-section v-if="data.publisher">
                <div class="text-subtitle2">Publisher:</div>

                <BaseUserItem>
                    <template #username>
                        {{ data.publisher.username }}
                    </template>

                    <template #email>
                        {{ data.publisher.email }}
                    </template>
                </BaseUserItem>
            </q-card-section>

            <q-separator />

            <q-card-section v-if="data.maintainers.length">
                <div class="text-subtitle2">Maintainers:</div>

                <BaseUserItem v-for="maintainer in data.maintainers" :key="maintainer.username">
                    <template #username>
                        {{ maintainer.username }}
                    </template>

                    <template #email>
                        {{ maintainer.email }}
                    </template>
                </BaseUserItem>
            </q-card-section>

            <q-separator />

            <q-card-actions v-if="data.date">
                <q-space />
                <q-icon size="sm" name="event" />
                <div class="text-subtitle2 q-ml-sm">{{ useDateFormat(data.date) }}</div>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
