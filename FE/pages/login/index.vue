<script lang="ts" setup>
    definePageMeta({
        layout: 'custom',
    })
</script>

<template>
    <div>
        <div class="w-full h-screen flex">
            <div class="w-full h-screen flex justify-center items-center">
                <div class="w-[75%] h-[80%] border-[3px] border-figma-7 mt-10 rounded-lg flex flex-row-reverse">
                    <div class="w-[50%] h-full flex flex-col gap-4 text-figma-1 justify-center items-center">
                        <img class="w-[35%] h-[30%] ml-12" src="https://i.ibb.co.com/FJ11MYD/auth-removebg-preview.png" alt="">
                        <h1 class="text-shadow-lg text-5xl font-bold">Welcome Back!</h1>
                        <h2 class="text-figma-11">Don't have an account yet?</h2>
                        <CustomLink to="/register" variant="transparent" class="text-sm">Sign Up</CustomLink>
                    </div>
                    <div class="w-[50%] h-full bg-figma-1 rounded-l-lg">
                        <Formlogin/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>