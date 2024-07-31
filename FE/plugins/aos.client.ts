import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:mounted', () => {
        AOS.init({
        duration: 1200, // durasi animasi dalam milidetik
        easing: 'ease-in-out', // jenis easing
        once: true, // animasi hanya sekali terjadi
        mirror: false // apakah animasi diputar ulang saat scroll ke atas
        });
    });
});
