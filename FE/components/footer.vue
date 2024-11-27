<template>
    <div>
        <div class="w-full h-3 bg-figma-12 rounded-full"></div>
        <div class="w-full h-auto flex flex-col mt-10">
            <div class="w-full flex flex-row text-4xl">
                <h1 class="font-extrabold text-figma-12">WeMake</h1><h1 class="font-semibold">Artisty</h1>
            </div>
            <div class="flex flex-col md:flex-row w-full h-auto md:justify-between pt-16 space-y-10 md:space-y-0">
                <div class="flex flex-col md:w-1/3 h-full gap-y-4">
                    <h1 class="text-figma-11 font-semibold">About Us</h1>
                    <p class="text-figma-11 font-thin text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non rem dolores necessitatibus tempora! Quibusdam fugit magni animi! Accusamus enim dolorem nihil ut beatae sapiente cupiditate atque officia!</p>
                </div>
                <div class="flex flex-col md:items-center md:w-1/4 ">
                    <div class="flex flex-col gap-y-4">
                        <div class="flex">
                            <h1 class="text-figma-11 font-semibold">Information</h1>
                        </div>
                        <div class="flex flex-col font-thin text-figma-11 text-sm">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms and Conditions</a>
                            <a href="">How to Book</a>
                            <a href="">Payment and Cancellation</a>
                        </div>
                        </div>
                    </div>
                <div class="flex flex-col md:w-1/4 gap-y-4 ">
                    <h1 class="text-figma-11 font-semibold">Follow Us and Stay Connetcted</h1>
                        <div class="flex flex-row items-center space-x-5">
                        <NuxtLink class="w-8 h-8 bg-black rounded-full" to=""><img src="" alt=""></NuxtLink>
                        <NuxtLink class="w-8 h-8 bg-black rounded-full" to=""><img src="" alt=""></NuxtLink>
                        <NuxtLink class="w-8 h-8 bg-black rounded-full" to=""><img src="" alt=""></NuxtLink>
                        <NuxtLink class="w-8 h-8 bg-black rounded-full" to=""><img src="" alt=""></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto flex text-center justify-center">
                <h1 class="text-figma-11 font-semibold mt-10">&copy; 2024 WeMakeArtisty. All Rights Reserved.</h1>
            </div>
        </div>
    </div>
</template>