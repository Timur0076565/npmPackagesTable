<template>
    <q-item>
        <q-item-section avatar>
            <q-avatar>
                <slot name="avatar">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="Avatar">
                </slot>
            </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label v-if="$slots.name">
                <slot name="name"/>
            </q-item-label>

            <q-item-label caption v-if="$slots.username">
                <slot name="username"/>
            </q-item-label>

            <q-item-label caption v-if="$slots.email">
                <slot name="email"/>
            </q-item-label>

            <q-item-label caption v-if="$slots.link">
                <slot name="link"/>
            </q-item-label>
        </q-item-section>
    </q-item>
</template>
<script setup>
</script>
