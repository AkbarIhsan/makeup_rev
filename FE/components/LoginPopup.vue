<script lang="ts" setup>
    import { VueFinalModal } from 'vue-final-modal';
    
</script>

<template>
    <VueFinalModal  
        class="flex justify-center items-center"
        content-class="relative px-8 w-[30%] h-[70%] rounded-lg bg-figma-1 flex flex-col"
        content-transition="vfm-fade"
        overlay-transition="vfm-fade">
            <h1 class="text-3xl flex justify-center mt-[10%]">Sign In</h1>
            <Formlogin/>
    </VueFinalModal>
</template>