<template>
    <input 
    :type="type as 'text' | 'email' | 'password' | 'number'"
    :class="'w-full h-11 border px-3 text-figma-11 font-thin rounded-lg'"
    :id="id"
    :placeholder="placeholder"
    :name="name"
    :value="value">
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },
        id: String,
        placeholder: String,
        name: String,
        value: String
    })
</script>