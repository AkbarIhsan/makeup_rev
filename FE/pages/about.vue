<template>
    <!-- slogan -->
        <div class="w-full h-screen flex flex-col gap-11 justify-center">
            <div class="w-full flex flex-row justify-center text-6xl">
                <h1 class="font-extrabold text-figma-12">WeMake</h1><h1 class="font-semibold">Artisty</h1>
            </div>
            <div class="w-full flex px-60">
                <p class="text-center text-lg text-figma-7">WeMakeArtistry is the ultimate platform connecting beauty professionals with clients. By bringing together a diverse community of makeup artists and clients, WeMakeArtistry creates a vibrant marketplace where both can thrive. Our platform simplifies the process of managing and discovering beauty services, making it a hub for innovation and convenience in the beauty industry.</p>
            </div>
        </div>

    <!-- get to know us -->
        <div class="flex justify-center">
            <h1 class="text-figma-1 text-6xl font-semibold text-shadow-md py-20">Get to Know Us</h1>
        </div>
        
    <!-- foto1 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-right" class="w-full h-full flex flex-row">
                    <div class="flex flex-col w-[60%] gap-10 px-10 justify-center">
                        <h1 class="text-4xl text-figma-7 font-bold">Elevate Your Artistry</h1>
                        <h2 class="text-figma-7">WeMakeArtistry empowers makeup artists to manage their businesses, connect with clients, and streamline scheduling. Our tools showcase your services and grow your clientele, allowing you to focus on creating stunning looks. We provide the support and visibility needed to achieve your business goals.</h2>
                    </div>
                    <div class="flex w-[40%] h-full px-10">
                        <div class="w-full h-full bg-figma-18">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- foto2 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-left" class="w-full h-full flex flex-row-reverse">
                    <div class="flex flex-col w-[60%] gap-10 px-10 justify-center">
                        <h1 class="text-4xl text-figma-7 font-bold">Discover Your Beauty</h1>
                        <h2 class="text-figma-7">For clients, WeMakeArtistry makes it easy to discover and book beauty services anytime, anywhere. Whether you need expert makeup for a special event or want to upgrade your daily routine, our platform connects you with top professionals. Enjoy personalized beauty experiences and effortless booking with WeMakeArtistry.</h2>
                    </div>
                    <div class="flex w-[40%] h-full px-10">
                        <div class="w-full h-full bg-figma-18">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- foto3 -->
        <div>
            <div class="w-full h-96 flex">
                <div data-aos="fade-down" class="w-full h-full flex bg-figma-17">
                    <div class="flex flex-col w-full h-full gap-10 items-center justify-center px-64">
                        <h1 class="text-4xl text-figma-7 text-center font-bold">Empowering Beauty, <br> Innovating Tomorrow</h1>
                        <h2 class="text-figma-7 text-center">Through WeMakeArtistry, we are committed to building a connected beauty community, driving innovation, and growing together for the future of the beauty industry.</h2>
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
                            <CustomLink to="/register/wma-mua">
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

    <!-- footer -->
        <Footer/>

</template>