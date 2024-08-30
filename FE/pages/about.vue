<template>
    <div class="w-full h-screen flex flex-row">
        <!-- gambar -->
        <div class="w-[40%] h-full flex items-center relative">
            <img data-aos="zoom-right" class="absolute top-10 -right-16" src="https://i.ibb.co.com/3Sw2DTk/percikan-removebg-preview.png" alt="">
            <div class="mt-32 w-[80%] h-[80%] bg-figma-12 rounded-t-full flex z-5">
                <div class="w-full h-full flex flex-col">
                    <div class="scale-x-[-1] w-full h-full">
                        <img data-aos="fade-up" class="h-full w-full pt-10" src="https://i.ibb.co.com/YBXXNrt/about1-removebg-preview.png" alt="">
                    </div>
                    <div class="absolute -bottom-10 -left-10 w-full h-[30%] bg-figma-4 blur-xl"></div>
                </div>
            </div>
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

    <!-- get to know us -->
        <div class="flex flex-col items-center text-6xl gap-3 font-semibold text-shadow-md justify-center">
            <h1 class="text-figma-1">GET TO</h1>
            <h1 class="text-figma-12">KNOW US</h1>
        </div>
        
    <!-- foto1 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-right" class="w-full h-full flex flex-row">
                    <div class="flex flex-col w-[60%] gap-10 justify-center">
                        <h1 class="text-4xl text-figma-7 font-bold">Elevate Your Artistry</h1>
                        <h2 class="text-figma-7">WeMakeArtistry empowers makeup artists to manage their businesses, connect with clients, and streamline scheduling. Our tools showcase your services and grow your clientele, allowing you to focus on creating stunning looks. We provide the support and visibility needed to achieve your business goals.</h2>
                    </div>
                    <div class="flex w-[40%] h-full justify-center">
                        <div class="absolute flex h-full"><img class="rounded-lg" src="https://i.ibb.co.com/9W3NXYK/foto1.jpg" alt=""></div>
                        <div class="w-full h-full flex items-center">
                            <div class="w-[80%] h-[80%] mx-10 bg-figma-12 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- foto2 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-left" class="w-full h-full flex flex-row-reverse">
                    <div class="flex flex-col w-[60%] gap-10 justify-center">
                        <h1 class="text-4xl text-figma-7 font-bold">Discover Your Beauty</h1>
                        <h2 class="text-figma-7">For clients, WeMakeArtistry makes it easy to discover and book beauty services anytime, anywhere. Whether you need expert makeup for a special event or want to upgrade your daily routine, our platform connects you with top professionals. Enjoy personalized beauty experiences and effortless booking with WeMakeArtistry.</h2>
                    </div>
                    <div class="flex w-[40%] h-full justify-center">
                        <div class="absolute flex h-full"><img class="rounded-lg" src="https://i.ibb.co.com/WHwjJFr/foto2.jpg" alt=""></div>
                        <div class="w-full h-full flex items-center">
                            <div class="w-[80%] h-[80%] mx-10 bg-figma-12 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- foto3 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-down" class="w-full h-full flex rounded-lg" style="background-image: url('https://i.ibb.co.com/mXb2dvY/about.jpg');">
                    <div class="w-full h-full bg-gradient-to-b rounded-lg from-figma-1-opacity to-figma-12-opacity absolute"></div>
                    <div class="flex flex-col w-full h-full gap-10 items-center justify-center px-60">
                        <h1 class="text-3xl text-figma-1 text-center font-bold">Empowering Beauty, Innovating Tomorrow</h1>
                        <h2 class="text-figma-1 text-center">Through WeMakeArtistry, we are committed to building a connected beauty community, driving innovation, and growing together for the future of the beauty industry.</h2>
                    </div>
                </div>
            </div>
        </div>

    <!-- booking or join mua -->
        <div>
            <div class="w-full h-[533px] flex">
                <div class="w-full h-full flex flex-row gap-5">
                    <div data-aos="fade-right" class="w-1/2 h-full rounded-lg bg-figma-16">
                        <div class="w-full h-full flex flex-col items-center justify-center gap-10">
                            <img class="w-48 h-48" src="https://i.ibb.co.com/Fx8WnW6/mua-removebg-preview.png" alt="">
                            <div class="gap-3 flex flex-col">
                                <h1 class="text-4xl text-figma-7 text-center font-bold">Are you a Makeup Artist?</h1>
                                <h2 class="text-figma-7 text-center">Want to improve your <br> beauty career?</h2>
                            </div>
                            <CustomLink to="/register/up-mua">
                                Join Now
                            </CustomLink>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="w-1/2 h-full rounded-lg bg-figma-16">
                        <div class="w-full h-full flex flex-col items-center justify-center gap-10">
                            <img class="w-48 h-48" src="https://i.ibb.co.com/xXFB8Gc/cust-removebg-preview.png" alt="">
                            <div class="gap-3 flex flex-col">
                                <h1 class="text-4xl text-figma-7 text-center font-bold">Need a Makeup Artist?</h1>
                                <h2 class="text-figma-7 text-center">Finding the best makeup artist <br> for your special moment</h2>
                            </div>
                            <CustomLink to="/mua">
                                Booking Now
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>