// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    'aos/dist/aos.css',
    'vue-final-modal/style.css'
  ],
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' }
  ],
  
})