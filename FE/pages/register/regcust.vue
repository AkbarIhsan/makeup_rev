<template>
    <div>
        <div class="w-full h-screen bg-figma-4">
            <div class="w-full flex flex-row px-20 pt-5 fixed text-xl">
                <h1 class="font-extrabold text-figma-12">WeMake</h1><h1 class="font-semibold">Artisty</h1>
            </div>
            <div class="w-full h-screen flex border-black">
                <div class="w-full h-screen flex justify-center items-center">
                    <div class="w-[75%] h-[80%] border-[3px] border-figma-7 mt-10 rounded-lg flex flex-row">
                        <div class="w-[50%] h-full flex flex-col gap-4 text-figma-1 justify-center items-center">
                            <img class="w-[35%] h-[30%] ml-12" src="https://i.ibb.co.com/FJ11MYD/auth-removebg-preview.png" alt="">
                            <h1 class="text-shadow-lg text-5xl font-bold">Welcome!</h1>
                            <h2 class="text-figma-11">Already have an account?</h2>
                            <NuxtLink class="bg-transparent border-2 border-figma-1 font-semibold text-figma-1 py-2 px-12 rounded-3xl cursor-pointer hover:bg-opacity-80" to="/explore">Sign In</NuxtLink>
                        </div>
                        <div class="w-[50%] h-full bg-figma-1 rounded-r-lg">
                            <LayoutFormreg/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>