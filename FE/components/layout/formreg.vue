<template>
    <div>
        <div class="w-full flex flex-col">
            <div class="w-full flex justify-center">
                <h1 class="text-2xl font-semibold mt-5">Sign Up</h1>
            </div>
            <form class="mx-10 mt-5 flex flex-col gap-2" action="">
                <div>
                    <label id="inputLabelUs" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldUs">Name</label>
                    <input id="inputFieldUs" class="w-full h-11 border px-3 text-figma-11 font-thin rounded-lg" placeholder="Enter your name" type="text">
                </div>
                <div>
                    <label id="inputLabelEm" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldEm">Email Address</label>
                    <input id="inputFieldEm" class="w-full h-11 border px-3 text-figma-11 font-thin rounded-lg" placeholder="Enter your email" type="text">
                </div>
                <div>
                    <label id="inputLabelPas" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldPas">Password</label>
                    <input id="inputFieldPas" class="w-full h-11 border px-3 text-figma-11 font-thin rounded-lg" placeholder="Enter your password" type="password">
                </div>
                <div>
                    <label id="inputLabelConPas" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldConPas">Confirm Password</label>
                    <input id="inputFieldConPas" class="w-full h-11 border px-3 text-figma-11 font-thin rounded-lg" placeholder="Enter again your password" type="password">
                </div>
                <div>
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 accent-figma-7 border border-black rounded cursor-pointer ">
                    <label for="terms" class="ml-2 text-figma-11 opacity-30 cursor-pointer">I accept the <a class="font-semibold text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
                <div class="w-full flex justify-center">
                    <NuxtLink class="bg-figma-20 text-figma-19 py-3 px-16 rounded-3xl text-sm cursor-pointer  hover:bg-opacity-80" to="/explore">Sign Up</NuxtLink>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const inputFieldEm = document.getElementById('inputFieldEm');
            const inputLabelEm = document.getElementById('inputLabelEm');
            const inputFieldUs = document.getElementById('inputFieldUs');
            const inputLabelUs = document.getElementById('inputLabelUs');
            const inputFieldPas = document.getElementById('inputFieldPas');
            const inputLabelPas = document.getElementById('inputLabelPas');
            const inputFieldConPas = document.getElementById('inputFieldConPas');
            const inputLabelConPas = document.getElementById('inputLabelConPas');

            inputFieldEm.addEventListener('focus', () => {
                inputLabelEm.classList.remove('opacity-0');
                inputLabelEm.classList.add('opacity-100');
                inputFieldEm.setAttribute('placeholder','');
            });

            inputFieldUs.addEventListener('focus', () => {
                inputLabelUs.classList.remove('opacity-0');
                inputLabelUs.classList.add('opacity-100');
                inputFieldUs.setAttribute('placeholder','');
            });

            inputFieldPas.addEventListener('focus', () => {
                inputLabelPas.classList.remove('opacity-0');
                inputLabelPas.classList.add('opacity-100');
                inputFieldPas.setAttribute('placeholder','');
            });

            inputFieldConPas.addEventListener('focus', () => {
                inputLabelConPas.classList.remove('opacity-0');
                inputLabelConPas.classList.add('opacity-100');
                inputFieldConPas.setAttribute('placeholder','');
            });

            inputFieldEm.addEventListener('blur', () => {
                if (inputFieldEm.value === '') {
                    inputLabelEm.classList.remove('opacity-100');
                    inputLabelEm.classList.add('opacity-0');
                    inputFieldEm.setAttribute('placeholder','Enter your email');
                }
            });

            inputFieldUs.addEventListener('blur', () => {
                if (inputFieldUs.value === '') {
                    inputLabelUs.classList.remove('opacity-100');
                    inputLabelUs.classList.add('opacity-0');
                    inputFieldUs.setAttribute('placeholder','Enter your name');
                }
            });

            inputFieldPas.addEventListener('blur', () => {
                if (inputFieldPas.value === '') {
                    inputLabelPas.classList.remove('opacity-100');
                    inputLabelPas.classList.add('opacity-0');
                    inputFieldPas.setAttribute('placeholder','Enter again your password');
                }
            });

            inputFieldConPas.addEventListener('blur', () => {
                if (inputFieldPas.value === '') {
                    inputLabelConPas.classList.remove('opacity-100');
                    inputLabelConPas.classList.add('opacity-0');
                    inputFieldConPas.setAttribute('placeholder','Enter your password');
                }
            });
        }
    };
</script>
