<template>
  <div class="container mx-auto p-4">
    <div class="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
      <div
        v-for="image in images"
        :key="image.id"
        class="relative overflow-hidden rounded-lg shadow-lg break-inside"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-auto transition-transform duration-300 transform hover:scale-105"
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
  { id: 4, src: 'https://i.ibb.co.com/xsTnbQx/photocard1.jpg', alt: 'Image 4' },
  { id: 5, src: 'https://i.ibb.co.com/YBXXNrt/about1-removebg-preview.png', alt: 'Image 5' },
  { id: 6, src: 'https://i.ibb.co.com/xsTnbQx/photocard1.jpg', alt: 'Image 6' },
  { id: 7, src: 'https://i.ibb.co.com/xsTnbQx/photocard1.jpg', alt: 'Image 7' },
  { id: 8, src: 'https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg', alt: 'Image 8' },
  { id: 9, src: 'https://i.ibb.co.com/YBXXNrt/about1-removebg-preview.png', alt: 'Image 9' },

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
