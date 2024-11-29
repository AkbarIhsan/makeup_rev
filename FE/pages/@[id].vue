<template>
    <div class="w-full h-auto flex flex-col gap-28">
        <div class="w-full mt-32 flex flex-row">
            <div class="w-[35%] items-end flex flex-col ">
                <div class="w-52 h-52 rounded-full border-2 overflow-hidden">
                    <img class="w-full h-full object-cover object-center" src="@/assets/basic.png" alt="">
                </div>
                <div class=" w-52 flex justify-center font-semibold">
                    <img class="w-6 h-6" src="@/assets/loc.png" alt="">    
                    Malang, Jawa Timur
                </div>
            </div>
            <div class="w-[65%] px-20 flex flex-col justify-center">
                <div class="w-full flex flex-row justify-between items-center">
                    <h1 class="text-3xl font-semibold">Maharani Gallery</h1>
                    <div class="flex flex-row gap-2">
                        <CustomButton class="font-semibold text-sm" variant="secondary">
                            Message
                        </CustomButton>
                        <CustomButton class="font-semibold flex justify-center items-center" variant="secondary">
                            <img class="w-4 h-4" src="@/assets/lopek.png" alt="">
                        </CustomButton>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center text-xl py-5">
                    <div>9 Post</div>
                    <div>89 job done</div>
                    <div>4/5 rate</div>
                </div>
                <div class="w-full">
                    <div>
                        Open jasa makeup wedding, graduation, bridesmate, dll. Harga terjangkau. Mohon Konsultasi dulu sebelum booking ✅ ✅
                    </div>
                </div>
            </div>
        </div>

        <!-- card info -->
        <div class="w-full flex flex-row justify-between gap-5">
            <div class="w-full h-32 bg-white rounded-lg flex flex-row">
                <div class="px-10 h-full flex items-center justify-center">
                    <img class="w-16" src="@/assets/icon-best.png" alt="">
                </div>
                <div class="h-full flex flex-col justify-center gap-2 text-figma-11 text-sm">
                    <div class="font-semibold">Best Booking</div>
                    <div>Wedding Makeup</div>
                    <div class="text-figma-18">More than 10+ booking</div>
                </div>
            </div>
            <div class="w-full h-32 bg-white rounded-lg flex flex-row">
                <div class="px-10 h-full flex items-center justify-center">
                    <img class="w-16" src="@/assets/kalender.png" alt="">
                </div>
                <div class="h-full flex flex-col justify-center gap-2 text-figma-11 text-sm">
                    <div class="font-semibold">Jadwal Tersedia</div>
                    <div>Hampir penuh bulan ini</div>
                    <div class="text-figma-18">Lihat Jadwal</div>
                </div>
            </div>
            <div class="w-full h-32 bg-white rounded-lg flex flex-row">
                <div class="px-10 h-full flex items-center justify-center">
                    <img class="w-16" src="@/assets/pengumuman.png" alt="">
                </div>
                <div class="h-full flex flex-col justify-center gap-2 text-figma-11 text-sm">
                    <div class="font-semibold">Pengumuman Khusus</div>
                    <div>LIBUR pada 20 Oktober 2024</div>
                    <div class="text-figma-18">Kembali buka pada tangal berikutnya</div>
                </div>
            </div>
        </div>

        <!-- porto -->
        <div class="w-full flex flex-col gap-5">
            <div class="text-figma-7 text-2xl font-bold">
                Portofolio
            </div>
            <div class="w-full columns-3 space-y-4">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
                <img class="w-96 h-52 object-cover object-center rounded-lg" src="@/assets/basic.png" alt="">
            </div>
        </div>

        <!-- service -->
        <div class="w-full flex flex-col gap-5">
            <div class="text-figma-7 text-2xl font-bold">
                Service
            </div>
            <div class="w-full flex flex-col gap-8">
                <div class="w-full py-3 bg-figma-7 text-white rounded-lg justify-center flex font-semibold text-xl">
                    Basic Makeup
                </div>
                <div class="columns-1 md:columns-3 space-y-5">
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col gap-8">
                <div class="w-full py-3 bg-figma-7 text-white rounded-lg justify-center flex font-semibold text-xl">
                    Wedding Makeup
                </div>
                <div class="columns-1 md:columns-3 space-y-5">
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto flex flex-col bg-white rounded-3xl">
                        <div class="h-auto">
                            <img class="w-full object-cover object-center h-52 rounded-t-3xl" src="@/assets/basic.png" alt="">
                        </div>
                        <div class="flex flex-col p-5 gap-10">
                            <div class="flex flex-col gap-3">
                                <div class="font-semibold">Daily Makeup Basic</div>
                                <div class="text-xs line-clamp-1">Makeup untuk daily atau sehari-sehari, simple look, bis untuk acara singkat, baik formal/santai.</div>
                            </div>
                            <div class="w-full flex flex-row justify-between items-center">
                                <div class="text-figma-7 font-semibold">IDR 150.000,00</div>
                                <CustomButton class="font-semibold text-xs">
                                    Detail
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col gap-5">
            <div class=" flex flex-row justify-between">
                <div class="text-figma-7 text-2xl font-bold flex flex-row gap-2"><h1>Review</h1><h2 class="font-light">(134)</h2></div>
                <NuxtLink class="flex items-center text-figma-12 font-semibold text-xl" to="/mua">View More</NuxtLink>
            </div>
            <div class="flex flex-col ite gap-5">
                <div class="w-full h-auto rounded-lg bg-white px-14">
                    <div class="w-full flex flex-col py-4 gap-4">
                        <div class="w-full flex flex-row items-center gap-3">
                            <div>
                                <img class="w-24 h-24 rounded-full object-cover object-center" src="@/assets/basic.png" alt="">
                            </div>
                            <div class="text-figma-11 flex flex-col gap-1">
                                <div class="font-semibold">Username</div>
                                <div class="text-xs font-thin">1 Jam yang lalu</div>
                                <div class="flex flex-row gap-1">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="font-extralight">
                            Suka banget sama makeup look nya, MUA juga ramah dimintain request ini itu, on time juga, sepanjang acara aman dikasih layanan sesuai yang tertera di paket yang dibeli. Love banget dan nggak kapok.
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto rounded-lg bg-white px-14">
                    <div class="w-full flex flex-col py-4 gap-4">
                        <div class="w-full flex flex-row items-center gap-3">
                            <div>
                                <img class="w-24 h-24 rounded-full object-cover object-center" src="@/assets/basic.png" alt="">
                            </div>
                            <div class="text-figma-11 flex flex-col gap-1">
                                <div class="font-semibold">Username</div>
                                <div class="text-xs font-thin">1 Jam yang lalu</div>
                                <div class="flex flex-row gap-1">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="font-extralight">
                            Suka banget sama makeup look nya, MUA juga ramah dimintain request ini itu, on time juga, sepanjang acara aman dikasih layanan sesuai yang tertera di paket yang dibeli. Love banget dan nggak kapok.
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto rounded-lg bg-white px-14">
                    <div class="w-full flex flex-col py-4 gap-4">
                        <div class="w-full flex flex-row items-center gap-3">
                            <div>
                                <img class="w-24 h-24 rounded-full object-cover object-center" src="@/assets/basic.png" alt="">
                            </div>
                            <div class="text-figma-11 flex flex-col gap-1">
                                <div class="font-semibold">Username</div>
                                <div class="text-xs font-thin">1 Jam yang lalu</div>
                                <div class="flex flex-row gap-1">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                    <img class="w-5" src="@/assets/star.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="font-extralight">
                            Suka banget sama makeup look nya, MUA juga ramah dimintain request ini itu, on time juga, sepanjang acara aman dikasih layanan sesuai yang tertera di paket yang dibeli. Love banget dan nggak kapok.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>