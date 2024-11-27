<template>
    <div>
        <div  class="w-full lg:w-[20.8vw] flex group cursor-nome">
            <div class="w-full h-full bg-figma-1 flex justify-center rounded-lg shadow-xl hover:scale-100 md:hover:scale-105 transform transition-all duration-300">
                <div class="w-full h-full p-3 flex flex-col items-center">
                    <img class="w-full h-32 md:h-[45%] rounded-lg object-cover object-center transform transition-all duration-300 group-hover:-translate-y-10 group-hover:shadow-cardmua " src="https://i.ibb.co.com/fdPdPnJ/cardmua1.jpg" alt=""> 
                    <div class="text-center h-full flex flex-col md:gap-2 mt-5">
                        <h1 class="font-bold text-xs md:text-lg text-figma-11">Maharani Gallery</h1>
                        <h2 class="font-bold text-xs md:text-sm text-figma-11 ">Malang</h2>
                        <p class="font-thin text-xs text-figma-11 line-clamp-1">Open jasa makeup wedding, graduation, bridesmate</p>
                    </div>
                    <div class="w-full h-full border-t-0 md:border-t border-figma-11 mt-2 md:mt-5 mx-2">
                        <div class="w-full h-full flex flex-row">
                            <div class="w-full h-full flex flex-col">
                                <h4 class="font-thin hidden md:flex text-xs pt-5 text-figma-11">Start Form</h4>
                                <h2 class="font-bold text-figma-7 text-xs md:text-sm">100.000,00</h2>
                            </div>
                            <div class="w-full h-full flex flex-col items-end">
                                <h4 class="font-thin hidden md:flex text-xs pt-5 text-figma-11">134 Reviews</h4>
                                <h2 class="font-bold text-figma-11 text-sm">4.9/5</h2>
                            </div>
                        </div>
                    </div>
                    <div class="h-full flex items-center mt-2">
                        <CustomLink to="/" class="text-xs md:text-sm">
                            Detail
                        </CustomLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>