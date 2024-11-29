<template>
    <NuxtLink
        :to="to"
        :class="{
            'bg-figma-12 text-figma-1 py-3 px-8 rounded-3xl cursor-pointer hover:bg-opacity-80': variant === 'primary',
            'bg-figma-20 text-figma-11 md:py-3 md:px-8 py-2 px-4 rounded-3xl text-xs md:text-sm cursor-pointer hover:bg-opacity-70': variant === 'secondary',
            'bg-transparent hover:bg-figma-5 border-2 border-figma-1 font-semibold text-figma-1 py-3 px-8 rounded-3xl cursor-pointer hover:bg-opacity-80': variant === 'transparent',
            }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
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