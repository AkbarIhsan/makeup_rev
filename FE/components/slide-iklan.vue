<template>
    <div class="flex flex-col justify-center transition-all duration-300">
        <h1 class="text-figma-7 text-2xl font-bold">Special Promo</h1>
        <Carousel :items-to-show="1" :autoplay="2000" wrapAround>
            <Slide v-for="(item,index) in items" :key="index">
                <img class="rounded-lg w-full mt-12" :src="item.image" alt="">
            </Slide>
        </Carousel>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue"

    const items = ref([
        { image : 'https://i.ibb.co.com/BzhKKbY/promo.jpg'},
    ]);
</script>