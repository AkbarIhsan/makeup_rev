<template>
    <div>
        <LayoutNavbar/>
        <div class="w-full h-screen bg-figma-4 flex flex-col gap-11 justify-center">
            <div class="w-full flex flex-row justify-center text-6xl">
                <h1 class="font-extrabold text-figma-12">WeMake</h1><h1 class="font-semibold">Artisty</h1>
            </div>
            <div class="w-full flex px-60">
                <p class="text-center text-lg text-figma-7">WeMakeArtistry is the ultimate platform connecting beauty professionals with clients. By bringing together a diverse community of makeup artists and clients, WeMakeArtistry creates a vibrant marketplace where both can thrive. Our platform simplifies the process of managing and discovering beauty services, making it a hub for innovation and convenience in the beauty industry.</p>
            </div>
        </div>
        <div class="w-full h-auto bg-figma-4 pt-10 overflow-hidden">
            <div class="w-full h-96 flex">
                <div data-aos="fade-right" class="w-full h-full flex flex-row bg-figma-17 mx-12">
                    <div class="flex flex-col w-[60%] gap-10 p-10">
                        <h1 class="text-4xl text-figma-7 font-bold">JUDUL</h1>
                        <h2 class="text-figma-7">Our marketplace empowers makeup artists to manage and expand their businesses while seamlessly engaging with both new and returning clients. With tools designed to streamline scheduling, showcase services, and grow their clientele, makeup artists can focus on what they do best—creating stunning looks. WeMakeArtistry provides the support and visibility needed to elevate their craft and achieve their business goals.</h2>
                    </div>
                    <div class="flex w-[40%] h-full px-10">
                        <div class="w-full h-full bg-figma-18">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 overflow-hidden">
            <div class="w-full h-96 flex">
                <div data-aos="fade-left" class="w-full h-full flex flex-row-reverse bg-figma-17 mx-12">
                    <div class="flex flex-col w-[60%] gap-10 p-10">
                        <h1 class="text-4xl text-figma-7 font-bold">JUDUL</h1>
                        <h2 class="text-figma-7">Our marketplace empowers makeup artists to manage and expand their businesses while seamlessly engaging with both new and returning clients. With tools designed to streamline scheduling, showcase services, and grow their clientele, makeup artists can focus on what they do best—creating stunning looks. WeMakeArtistry provides the support and visibility needed to elevate their craft and achieve their business goals.</h2>
                    </div>
                    <div class="flex w-[40%] h-full px-10">
                        <div class="w-full h-full bg-figma-18">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 overflow-hidden">
            <div class="w-full h-96 flex">
                <div data-aos="fade-down" class="w-full h-full flex bg-figma-17 mx-12">
                    <div class="flex flex-col w-full h-full gap-10 items-center justify-center px-64">
                        <h1 class="text-4xl text-figma-7 text-center font-bold">Empowering Beauty, <br> Innovating Tomorrow</h1>
                        <h2 class="text-figma-7 text-center">Through WeMakeArtistry, we are committed to building a connected beauty community, driving innovation, and growing together for the future of the beauty industry.</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 overflow-hidden">
            <div class="w-full h-[533px] pt-10 flex">
                <div class="w-full h-full flex flex-row gap-5 mx-12">
                    <div data-aos="fade-right" class="w-1/2 h-full rounded-lg bg-figma-16">
                        <div class="w-full h-full flex flex-col items-center justify-center gap-10">
                            <img class="w-48 h-48" src="https://i.ibb.co.com/Fx8WnW6/mua-removebg-preview.png" alt="">
                            <div class="gap-3 flex flex-col">
                                <h1 class="text-4xl text-figma-7 text-center font-bold">Are you a Makeup Artist?</h1>
                                <h2 class="text-figma-7 text-center">Want to improve your <br> beauty career?</h2>
                            </div>
                            <NuxtLink class="bg-figma-12 text-white py-3 px-16 rounded-3xl text-sm cursor-pointer  hover:bg-opacity-80" to="/explore">Join Now</NuxtLink>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="w-1/2 h-full rounded-lg bg-figma-16">
                        <div class="w-full h-full flex flex-col items-center justify-center gap-10">
                            <img class="w-48 h-48" src="https://i.ibb.co.com/xXFB8Gc/cust-removebg-preview.png" alt="">
                            <div class="gap-3 flex flex-col">
                                <h1 class="text-4xl text-figma-7 text-center font-bold">Need a Makeup Artist?</h1>
                                <h2 class="text-figma-7 text-center">Finding the best makeup artist <br> for your special moment</h2>
                            </div>
                            <NuxtLink class="bg-figma-12 text-white py-3 px-12 rounded-3xl text-sm cursor-pointer  hover:bg-opacity-80" to="/explore">Booking Now</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 px-12">
            <div class="w-full h-3 bg-figma-12 rounded-full"></div>
        </div>

        <div class="w-full h-auto bg-figma-4 pt-10 px-12">
            <div class="flex w-full h-full">
                <LayoutFooter/>
            </div>
        </div>

    </div>
</template>