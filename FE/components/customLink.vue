<template>
    <NuxtLink
        :to="to"
        :class="{
            'bg-figma-12 text-figma-1 py-3 px-14 rounded-3xl cursor-pointer hover:bg-opacity-80': variant === 'primary',
            'bg-figma-20 text-figma-19 py-3 px-14 rounded-3xl cursor-pointer hover:bg-opacity-80': variant === 'secondary',
            'bg-transparent hover:bg-figma-5 border-2 border-figma-1 font-semibold text-figma-1 py-3 px-14 rounded-3xl cursor-pointer hover:bg-opacity-80': variant === 'transparent',
            }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
        to: {
            type: String,
        },
        variant: {
            type: String,
            default: 'primary',
        },
    })
</script>