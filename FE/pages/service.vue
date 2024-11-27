<template>
    <div class="w-full h-screen flex">
        <div class="w-full h-full flex justify-center items-center relative">
            <img class="w-96 h-96" src="@/assets/bg-efek.png" alt="">
            <img class="absolute w-[19rem] h-[19rem] rounded-full" src="@/assets/img-service.png" alt="">
        </div>
        <div class="w-full h-full flex justify-center items-center">
            <div class="md:text-4xl font-bold flex w-full flex-wrap justify-center gap-2 text-white text-shadow-md">
                <div>Discover your</div> 
                <div class="text-figma-12">favourite</div>
                <div class="text-figma-12">makeup artist</div>
                <div>for your event</div>
            </div>
        </div>
    </div>
    <div class="w-full h-auto flex flex-col">
        <div class="w-full flex justify-between text-2xl">
            <h1 class="text-figma-7 font-bold">Gallery Makeup Look</h1>
            <NuxtLink class="text-figma-12 font-semibold" to="">View More</NuxtLink>
        </div>
        <SlideService/>
    </div>

    <div>
        <div class="w-full flex flex-row justify-between">
                <h1 class="text-figma-7 text-2xl font-bold">Makeup Artist</h1>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/mua">View More</NuxtLink>
            </div>
            <div class="flex justify-between gap-y-12 flex-wrap mt-12">
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
            </div>
        </div>

</template>