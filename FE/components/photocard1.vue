<template>
    <div>
        <div data-aos="fade-up" class="w-full lg:h-[65vh] rounded-lg bg-figma-15 flex overflow-hidden">
            <div class="absolute lg:h-[75vh] w-full justify-end items-end flex">
                <img class="h-full w-44 md:w-60 lg:w-[45%] object-cover object-center scale-100 lg:scale-y-150 lg:scale-x-110" src="https://i.ibb.co.com/xsTnbQx/photocard1.jpg" alt="">
            </div>
            <div class="flex w-full h-full flex-col justify-center clip-lancip-kedalam-sm lg:clip-lancip-kedalam bg-figma-16 rounded-l-lg">
                <div data-aos="fade-right" class="gap-5 md:gap-8 h-full w-44 md:w-[40%] flex flex-col justify-center items-center mx-5 my-5 md:mx-20">
                    <h1 class="md:text-4xl text-sm font-bold text-figma-7 text-center">Discover your favourite makeup look</h1>
                    <CustomLink class="text-xs md:text-base" to="/explore">
                        Explore
                    </CustomLink>    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .clip-lancip-kedalam{
        clip-path: polygon(75% 0, 55% 50%, 75% 100%, 0 100%, 0 0);
    }
    .clip-lancip-kedalam-sm{
        clip-path: polygon(75% 0, 60% 50%, 75% 100%, 0 100%, 0 0);
    }
</style>