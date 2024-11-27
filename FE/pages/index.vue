<template>
    <!-- get started -->
        <div class="w-full h-screen flex flex-col gap-10 justify-center place-items-center pt-28">
            <div class="absolute w-full h-full flex justify-between items-center lg:items-end overflow-hidden" data-aos="fade-up">
                <img class="lg:w-[40%] md:w-72 w-52 lg:h-[90%] md:h-96 h-52 absolute -left-20 -scale-x-100" src="https://i.ibb.co.com/27968LH/kanan-kiri.png" alt="">
                <img class="lg:w-[40%] md:w-72 w-52 lg:h-[90%] md:h-96 h-52 absolute -right-20" src="https://i.ibb.co.com/27968LH/kanan-kiri.png" alt="">
            </div>
            <h1  class="md:text-7xl text-3xl text-figma-1 text-center font-bold text-shadow-lg">
                Professional <br> Make up Studio
            </h1>
            <h2 class="md:w-1/2 text-figma-13 flex text-xs md:text-base justify-center text-center">
                Creating images and characters through the <br> medium of make-up, hairstyles and <br> prosthetics according to a brief
            </h2>
            <CustomLink class="z-5" to="/mua">
                Get Started
            </CustomLink>
        </div>

    <!-- iklan -->
        <SlideIklan/>

    <!-- card profile -->
        <div>
            <div class="w-full flex flex-row justify-between">
                <h1 class="text-figma-7 text-2xl font-bold">Top MUA</h1>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/mua">View More</NuxtLink>
            </div>
            <div class="lg:columns-4 md:columns-2 columns-2 space-y-10 md:space-y-4 mt-12">
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
            </div>
        </div>

    <!-- photocard -->
        <Photocard1/>
</template>