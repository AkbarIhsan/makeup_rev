<template>
    <!-- get started -->
        <div class="w-full h-screen flex flex-col gap-10 justify-center place-items-center pt-28">
            <div class="absolute w-full h-full flex justify-between items-end overflow-hidden" data-aos="fade-up">
                <img class="w-[40%] h-[90%] absolute -left-20 -scale-x-100" src="https://i.ibb.co.com/27968LH/kanan-kiri.png" alt="">
                <img class="w-[40%] h-[90%] absolute -right-20" src="https://i.ibb.co.com/27968LH/kanan-kiri.png" alt="">
            </div>
            <h1  class="text-7xl text-white text-center font-bold text-shadow-xl">
                Professional <br> Make up Studio
            </h1>
            <h2 class="w-1/2 text-figma-13 text-center">
                Creating images and characters through the <br> medium of make-up, hairstyles and <br> prosthetics according to a brief
            </h2>
            <CustomLink class="z-5" to="/mua">
                Get Started
            </CustomLink>
        </div>

    <!-- iklan -->
        <div class="flex flex-col justify-center transition-all duration-300">
            <h1 class="text-figma-7 text-2xl font-bold">Special Promo</h1>
            <img data-aos="fade-left" class="rounded-lg w-full mt-12" src="https://i.ibb.co.com/BzhKKbY/promo.jpg" alt="">
        </div>

    <!-- card profile -->
        <div>
            <div class="w-full flex flex-row justify-between">
                <h1 class="text-figma-7 text-2xl font-bold">Top MUA</h1>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/mua">View More</NuxtLink>
            </div>
            <div class="flex justify-between gap-y-12 flex-wrap mt-12">
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
            </div>
        </div>

    <!-- photocard -->
        <Photocard1/>
</template>