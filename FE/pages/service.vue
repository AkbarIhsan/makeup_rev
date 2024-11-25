<template>
    <div class="w-full h-auto py-28">
        <div class="w-full h-screen flex flex-row">
        <!-- gambar -->
        <div class="w-[40%] h-full flex items-center relative">
            <img data-aos="zoom-right" class="absolute top-10 -right-16" src="https://i.ibb.co.com/D5NBjHj/Whats-App-Image-2024-11-08-at-2-55-08-PM-removebg-preview.png" alt="">

        </div>
        <!-- slogan -->
        <div class="w-[60%] h-full flex items-center justify-end">
            <div data-aos="fade-left" class="flex flex-col w-[85%] h-auto gap-10">
                <div class="flex flex-row justify-center text-7xl">
                    <h1 class="font-black text-figma-12 ">WeMake</h1><h1 class="font-bold">Artisty</h1>
                </div>
                <div class="px-2">
                    <p class="text-center text-lg font-medium text-figma-7">WeMakeArtistry connects beauty professionals with clients, creating a dynamic marketplace where both can thrive. Our platform simplifies managing and discovering beauty services, offering convenience and innovation in the beauty industry.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center text-3xl font-semibold text-shadow-md justify-center">
        <h1>
            <span class="text-figma-1">Discover your</span> 
            <span class="text-figma-12"> favourite</span>
        </h1>
        <h1>
            <span class="text-figma-12">makeup artist</span>
            <span class="text-figma-1"> for your event</span> 
        </h1>
        </div>
    <!-- gallery -->
        <div>
            <div class="w-full flex flex-row justify-between">
                <h1 class="text-figma-7 text-2xl font-bold">Gallery Makeup Look</h1>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/">View More</NuxtLink>
            </div>
            <div class="flex justify-between gap-y-12 flex-wrap mt-12">
            </div>
        </div>
    <!-- card profile -->
        <div>
            <div class="w-full flex flex-row justify-between">
                <h1 class="text-figma-7 text-2xl font-bold">Makeup Artist</h1>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/viewmore">View More</NuxtLink>
            </div>
            <div class="flex justify-between gap-y-12 flex-wrap mt-12">
                <Cardservice/>
                <Cardservice/>
                <Cardservice/>
                <Cardservice/>
            </div>
        </div>
</div>  
</template>