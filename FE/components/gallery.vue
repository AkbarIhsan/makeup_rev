<template>
  <div class="container mx-auto px-4">
    <div class="columns-3 md:space-y-4">
      <div
        v-for="image in images"
        :key="image.id"
        class="relative overflow-hidden rounded-3xl shadow-lg break-inside cursor-pointer"
      >
      <NuxtLink to="@username" class="absolute z-5 w-full h-full transition-transform duration-300 transform hover:bg-figma-11/70">
        <div class="w-full h-full relative text-white/90 font-inter font-light flex flex-col opacity-0 hover:opacity-100">
          <div class="w-full h-full flex items-center justify-center flex-col">
            <h1>A picture of</h1>
            <h1 class="font-bold">Maharani Gallery</h1>
            <div class="flex h-auto items-center gap-2 py-5">
              <img class="w-8 h-8" src="@/assets/heart.png" alt="">
              <h1>100</h1>
            </div>
          </div>
          <div class="absolute w-full h-full flex items-end justify-end p-8">
            <div class="w-8 h-8 bg-figma-17/100 rounded-full p-2">
              <img class="w-full h-full" src="@/assets/share.png" alt="">
            </div>
          </div>
        </div>
      </NuxtLink>
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const images = [
    { id: 1, src: 'https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://i.ibb.co.com/xsTnbQx/photocard1.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://i.ibb.co.com/YBXXNrt/about1-removebg-preview.png', alt: 'Image 3' },
    { id: 4, src: 'https://i.ibb.co.com/hsgt2DV/1.png', alt: 'Image 4' },
    { id: 5, src: 'https://i.ibb.co.com/WzFG0Hk/e35094c7468f23612483af9ab89adad4.png', alt: 'Image 5' },
    { id: 6, src: 'https://i.ibb.co.com/0DBJ6QP/514c76640132a7cb44d9d8ad3b7e4024.png', alt: 'Image 6' },
    { id: 7, src: 'https://i.ibb.co.com/BCMFdrK/89e88cb88c0d4cb3e46fb7d77e4f3cb4.png', alt: 'Image 7' },
    { id: 8, src: 'https://i.ibb.co.com/9npw4dv/78cb8c6704595b4f6fced43ce528b1a8.png', alt: 'Image 8' },
    { id: 9, src: 'https://i.ibb.co.com/VqBQ3CH/86c1c280c7ea9ddbf76d9c920ba787b7.png', alt: 'Image 9' },
    { id: 10, src: 'https://i.ibb.co.com/0DBJ6QP/514c76640132a7cb44d9d8ad3b7e4024.png', alt: 'Image 10' },
    { id: 11, src: 'https://i.ibb.co.com/BCMFdrK/89e88cb88c0d4cb3e46fb7d77e4f3cb4.png', alt: 'Image 11' },
    { id: 12, src: 'https://i.ibb.co.com/9npw4dv/78cb8c6704595b4f6fced43ce528b1a8.png', alt: 'Image 12' },
    { id: 13, src: 'https://i.ibb.co.com/VqBQ3CH/86c1c280c7ea9ddbf76d9c920ba787b7.png', alt: 'Image 13' },
  ];
</script>

<style scoped>
/* Add any custom styling if needed */
</style>


<!-- <template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="relative overflow-hidden rounded-lg shadow-lg break-inside-auto"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  // Definisikan tipe data untuk produk
  interface Product {
    id: number;
    title: string;
    thumbnail: string;
  }

// Inisialisasi ref dengan tipe data yang tepat
const products = ref<Product[]>([]);
const loading = ref(true);

  onMounted(async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      products.value = data.products; // Menyimpan daftar produk ke dalam ref
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      loading.value = false; // Menyembunyikan loading setelah fetch selesai
    }
  });
</script>

<style scoped>
/* Add any custom styling if needed */
</style> -->
