<template>
    <div>
        <div data-aos="fade-up" class="w-[1160px] h-[420px] rounded-lg bg-figma-15 flex overflow-hidden">
            <div class="absolute h-full w-full justify-start items-end flex">
                <img class="h-full w-[45%] scale-y-150 scale-x-125" src="https://i.ibb.co.com/D8cZ3dv/photocard2.jpg" alt="">
            </div>
            <div class="flex w-full h-full flex-col items-end clip-lancip-kedalam2 bg-figma-16 rounded-l-lg ">
                <div data-aos="fade-left" class="gap-8 h-full w-[40%] flex flex-col justify-center items-center mx-24">
                    <h1 class="text-[40px] font-bold text-figma-7 text-center">Get ready with us for your special moment</h1>
                    <CustomLink to="/mua">Booking Now</CustomLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .clip-lancip-kedalam2{
        /* clip-path: polygon(75% 0, 55% 50%, 75% 100%, 0 100%, 0 0); */
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 45% 50%);
    }
</style>
