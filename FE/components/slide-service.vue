<template>
    <div class="w-full h-auto flex flex-row items-center rounded-lg overflow-hidden mt-10">
        <Carousel :items-to-show="3" :autoplay="autoplaySpeed" wrapAround >
            <Slide v-for="(item, index) in items" :key="index" class="flex ml-2" @mouseover="stopAutoplay" @mouseleave="startAutoplay">
                <div class="rounded-lg flex items-center justify-center w-full group transition-all duration-300    ">
                    <div class="absolute z-10 w-full h-full hover:bg-figma-11/70 rounded-lg">
                        <div class="w-full h-full flex flex-col justify-center items-center gap-3 opacity-0 hover:opacity-100">
                            <h1 class="text-white font-semibold">{{item.title}}</h1>
                            <CustomLink variant="secondary" class="text-sm font-bold hover:text-white">
                                Get Started
                            </CustomLink>
                        </div>
                    </div>
                    <img class="object-cover rounded-lg object-center w-[400px] h-72" :src="item.image" alt="slide item">
                    <h1 class="text-white absolute font-semibold opacity-100 group-hover:opacity-0">{{item.title}}</h1>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const items = ref([
        { image : 'https://i.ibb.co.com/TgGYMSj/basic.png' , title : 'Basic MakeUp'},
        { image : 'https://i.ibb.co.com/ncfxkLm/wedding.png', title : 'Wedding MakeUp'},
        { image : 'https://i.ibb.co.com/KwTS0G4/photo.png', title : 'Photo MakeUp'},
    ]);

    const autoplaySpeed = ref(2000);

    // Fungsi untuk menghentikan autoplay
    const stopAutoplay = () => {
        autoplaySpeed.value = 0;
    };

    // Fungsi untuk memulai autoplay kembali
    const startAutoplay = () => {
        autoplaySpeed.value = 2000;
    };
</script>