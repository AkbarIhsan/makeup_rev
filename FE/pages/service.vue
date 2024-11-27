<template>
    <div class="w-full h-screen flex flex-col md:flex-row">
        <div class="w-full h-full flex justify-center -bottom-24 md:-bottom-0 items-center relative">
            <img class="md:w-96 md:h-96 w-64 h-64" src="@/assets/bg-efek.png" alt="">
            <img class="absolute md:w-[19rem] md:h-[19rem] w-48 h-48 rounded-full" src="@/assets/img-service.png" alt="">
        </div>
        <div class="w-full h-full flex justify-center pb-12 items-center">
            <div class="md:text-4xl text-2xl font-bold flex w-full flex-wrap justify-center gap-2 text-white text-shadow-md">
                <div>Discover your</div> 
                <div class="text-figma-12">favourite</div>
                <div class="text-figma-12">makeup artist</div>
                <div>for your event</div>
            </div>
        </div>
    </div>
    <div class="w-full h-auto flex flex-col">
        <div class="w-full flex justify-between text-xl md:text-2xl">
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
            <div class="lg:columns-4 md:columns-2 columns-2 space-y-10 md:space-y-4 mt-12">
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
                <Cardprofilemua/>
            </div>
        </div>

</template>