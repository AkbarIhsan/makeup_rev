<template>
    <div>
        <div data-aos="fade-up" class="w-full h-[65vh] rounded-lg bg-figma-15 flex overflow-hidden">
            <div class="absolute h-[75vh] w-full justify-end items-end flex">
                <img class="h-full w-[45%] scale-y-150 scale-x-110" src="https://i.ibb.co.com/xsTnbQx/photocard1.jpg" alt="">
            </div>
            <div class="flex w-full h-full flex-col justify-center clip-lancip-kedalam bg-figma-16 rounded-l-lg">
                <div data-aos="fade-right" class="gap-8 h-full w-[40%] flex flex-col justify-center items-center mx-20">
                    <h1 class="text-4xl font-bold text-figma-7 text-center">Discover your favourite makeup look</h1>
                    <CustomLink to="/explore">
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
</style>