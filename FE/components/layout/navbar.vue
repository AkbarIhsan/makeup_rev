<template>
    <div>
        <nav :class="['w-full fixed px-20 transition-all duration-300 z-10',{'flex bg-figma-1 shadow-lg h-16' : isScrolled, 'h-24':!isScrolled}]">
            <ul class="flex flex-row w-full h-full items-center">
                <li class="flex flex-row text-2xl text-shadow-md"><h1 class="font-extrabold text-figma-12">WeMake</h1><h1>Artisty</h1></li>
                <div class="w-full h-full flex flex-row gap-8 justify-end items-center">
                    <li><NuxtLink :class="{'text-figma-12 hover:border-none' : isActive('/')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/">Home</NuxtLink></li>
                    <li><NuxtLink :class="{'text-figma-12 hover:border-none' : isActive('/mua')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/mua">MakeUp Artist</NuxtLink></li>
                    <li><NuxtLink :class="{'text-figma-12 hover:border-none' : isActive('/promo')}" class="flex text-figma-11 text-sm cursor-pointer hover:border-b-2 hover:border-figma-7" to="/promo">Promo</NuxtLink></li>
                    <li><NuxtLink class="bg-figma-12 text-white py-3 px-14 font-bold flex items-center rounded-3xl text-sm hover:opacity-80" to="/">Sing In</NuxtLink></li>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
    export default {
        setup(){
            const router = useRouter();

            const isActive = (path:string) => router.currentRoute.value.path === path;

            return {
                isActive,
            };
        },

        data() {
            return {
                isScrolled: false,
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
            this.isScrolled = window.scrollY > 50;
            },
        },
    };
</script>