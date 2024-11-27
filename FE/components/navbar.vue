<template>
    <div>
        <nav :class="['w-full fixed px-10 md:px-20 transition-all duration-300 z-10', {'flex bg-figma-1 shadow-lg h-16': isScrolled, 'h-24': !isScrolled}]">
            <ul class="flex flex-row w-full h-full items-center justify-end md:justify-start">
                <li class="flex flex-row text-2xl text-shadow-md">
                    <h1 class="font-extrabold text-figma-12">WeMake</h1><h1>Artisty</h1>
                </li>
            <div class="w-full h-full md:flex flex-row gap-10 justify-end items-center hidden">
                <li>
                    <NuxtLink :class="{'text-figma-12 hover:border-none': isActive('/')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink :class="{'text-figma-12 hover:border-none': isActive('/about')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/about">About Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink :class="{'text-figma-12 hover:border-none': isActive('/service')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/service">Service</NuxtLink>
                </li>
                <li>
                    <CustomButton @click="open" class="text-sm flex flex-row justify-center items-center gap-2">
                        <img class="w-4 h-4" src="https://i.ibb.co.com/D1Z5zZs/b65f4508c2025d9ac78fb5382d855879.png" alt="">
                        Sign In
                    </CustomButton>
                </li>
            </div>
            </ul>
        </nav>
        <ModalsContainer/>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'
    import { ModalsContainer, useModal } from 'vue-final-modal';
    import LoginPopup from './LoginPopup.vue';

    const {open,close} = useModal({
        component: LoginPopup
    })

    const isScrolled = ref(false)
    const router = useRouter()

    const isActive = (path: string) => router.currentRoute.value.path === path

    const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    })
</script>

