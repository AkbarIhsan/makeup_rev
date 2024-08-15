<template>
    <div>
        <LayoutNavbar/>
        <div class="w-full h-screen bg-figma-4">
            <div class="w-full h-full flex flex-col gap-10 justify-center place-items-center pt-28">
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
                <NuxtLink class="bg-figma-12 text-white py-3 px-10 rounded-3xl text-sm cursor-pointer z-5  hover:bg-opacity-80" to="/mua">Get Started</NuxtLink>
            </div>
        </div>
        <div class="flex w-full h-auto bg-figma-4 pt-10 overflow-hidden">
            <div class="px-20 flex w-full h-full justify-center">
                <img data-aos="fade-left" class="rounded-lg w-full" src="https://i.ibb.co.com/BzhKKbY/promo.jpg" alt="">
            </div>
        </div>
        <div class="w-full h-auto bg-figma-4 pt-16">
            <div class="w-full flex flex-row justify-between px-20">
                <h1 class="text-figma-7 text-2xl font-bold">Top MUA</h1>
                <NuxtLink class="flex items-center text-figma-11 font-semibold text-xl" to="/mua">View More</NuxtLink>
            </div>
            <div class="flex justify-between mx-20 gap-y-12 flex-wrap mt-12">
                <LayoutCardprofilemua/>
                <LayoutCardprofilemua/>
                <LayoutCardprofilemua/>
                <LayoutCardprofilemua/>
            </div>
        </div>
        <div class="w-full h-auto bg-figma-4 pt-16 px-20">
            <LayoutPhotocard1/>
        </div>
        
        <div class="w-full h-auto bg-figma-4 pt-10 px-20">
            <div class="w-full h-3 bg-figma-12 rounded-full"></div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 px-20">
            <div class="flex w-full h-full">
                <LayoutFooter/>
            </div>
        </div>
    </div>
</template>