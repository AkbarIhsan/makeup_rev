<script lang="ts" setup>
    import { VueFinalModal } from 'vue-final-modal';
    
</script>

<template>
    <VueFinalModal  
        class="flex justify-center items-center"
        content-class="relative w-[30%] h-[70%] rounded-lg bg-figma-1 flex flex-col"
        content-transition="vfm-fade"
        overlay-transition="vfm-fade">
            <Formlogin/>
            <div class="flex flex-row gap-x-1 justify-center w-full h-full mt-[3%]">
                <h6 class="text-sm text-figma-11 font-thin">Don’t have an account yet?</h6>
                <NuxtLink class="text-sm text-figma-11 font-semibold" to="/register">Sign Up Here</NuxtLink>
            </div>
    </VueFinalModal>
</template>