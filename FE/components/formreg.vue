<template>
    <div>
        <div class="w-full flex flex-col">
            <div class="w-full flex justify-center">
                <h1 class="text-2xl font-semibold mt-4">Sign Up</h1>
            </div>
            <form class="mx-10 mt-5 flex flex-col gap-3" action="">
                <!-- name -->
                <div>
                    <label id="inputLabelUs" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldUs">Name</label>
                    <CustomInput id="inputFieldUs" placeholder="Enter your name" type="text"/>
                </div>

                <!-- email address -->
                <div>
                    <label id="inputLabelEm" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldEm">Email Address</label>
                    <CustomInput id="inputFieldEm" placeholder="Enter your email" type="email"/>
                </div>

                <!-- password -->
                <div>
                    <label id="inputLabelPas" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldPas">Password</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                            <label class="py-1 text-sm cursor-pointer js-password-label" for="toggle"><img class="h-4 lg:h-5 md:h-4 sm:h-4 w-4 lg:w-5 md:w-4 sm:w-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt=""></label>
                        </div>
                        <CustomInput id="inputFieldPas" class="js-password" placeholder="Enter your password" type="password"/>
                    </div>
                </div>

                <!-- confirm password -->
                <div>
                    <label id="inputLabelConPas" class="text-figma-11 font-semibold text-sm transition duration-300 opacity-0" for="inputFieldConPas">Confirm Password</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            <input class="hidden js-confirm-password-toggle" id="confirm-toggle" type="checkbox" />
                            <label class="py-1 text-sm cursor-pointer js-confirm-password-label" for="confirm-toggle">
                                <img class="h-4 lg:h-5 md:h-4 sm:h-4 w-4 lg:w-5 md:w-4 sm:w-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt="">
                            </label>
                        </div>
                        <CustomInput id="inputFieldConPas" class="js-confirm-password" placeholder="Enter again your password" type="password"/>
                    </div>
                </div>

                <!-- terms and conditions -->
                <div class="mt-2">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 accent-figma-7 border border-black rounded cursor-pointer ">
                    <label for="terms" class="ml-2 text-figma-11 opacity-30 cursor-pointer">I accept the <a class="font-semibold text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>

                <!-- sign up button -->
                <div class="flex justify-center items-center">
                    <CustomButton variant="secondary">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

    // Function to toggle password visibility
    function togglePasswordVisibility(inputField: HTMLInputElement, label: HTMLElement) {
        if (inputField.type === 'password') {
            inputField.type = 'text'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/B6jkXf1/eye-key-look-password-security-see-svgrepo-com.png" alt="">'
        } else {
            inputField.type = 'password'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt="">'
        }
    }

    onMounted(() => {
    const inputFieldEm = document.getElementById('inputFieldEm') as HTMLInputElement
    const inputLabelEm = document.getElementById('inputLabelEm') as HTMLElement
    const inputFieldUs = document.getElementById('inputFieldUs') as HTMLInputElement
    const inputLabelUs = document.getElementById('inputLabelUs') as HTMLElement
    const inputFieldPas = document.getElementById('inputFieldPas') as HTMLInputElement
    const inputLabelPas = document.getElementById('inputLabelPas') as HTMLElement
    const inputFieldConPas = document.getElementById('inputFieldConPas') as HTMLInputElement
    const inputLabelConPas = document.getElementById('inputLabelConPas') as HTMLElement

    inputFieldEm?.addEventListener('focus', () => {
        inputLabelEm?.classList.remove('opacity-0')
        inputLabelEm?.classList.add('opacity-100')
        inputFieldEm?.setAttribute('placeholder', '')
    })

    inputFieldUs?.addEventListener('focus', () => {
        inputLabelUs?.classList.remove('opacity-0')
        inputLabelUs?.classList.add('opacity-100')
        inputFieldUs?.setAttribute('placeholder', '')
    })

    inputFieldPas?.addEventListener('focus', () => {
        inputLabelPas?.classList.remove('opacity-0')
        inputLabelPas?.classList.add('opacity-100')
        inputFieldPas?.setAttribute('placeholder', '')
    })

    inputFieldConPas?.addEventListener('focus', () => {
        inputLabelConPas?.classList.remove('opacity-0')
        inputLabelConPas?.classList.add('opacity-100')
        inputFieldConPas?.setAttribute('placeholder', '')
    })

    inputFieldEm?.addEventListener('blur', () => {
        if (inputFieldEm?.value === '') {
        inputLabelEm?.classList.remove('opacity-100')
        inputLabelEm?.classList.add('opacity-0')
        inputFieldEm?.setAttribute('placeholder', 'Enter your email')
        }
    })

    inputFieldUs?.addEventListener('blur', () => {
        if (inputFieldUs?.value === '') {
        inputLabelUs?.classList.remove('opacity-100')
        inputLabelUs?.classList.add('opacity-0')
        inputFieldUs?.setAttribute('placeholder', 'Enter your name')
        }
    })

    inputFieldPas?.addEventListener('blur', () => {
        if (inputFieldPas?.value === '') {
        inputLabelPas?.classList.remove('opacity-100')
        inputLabelPas?.classList.add('opacity-0')
        inputFieldPas?.setAttribute('placeholder', 'Enter again your password')
        }
    })

    inputFieldConPas?.addEventListener('blur', () => {
        if (inputFieldPas?.value === '') {
        inputLabelConPas?.classList.remove('opacity-100')
        inputLabelConPas?.classList.add('opacity-0')
        inputFieldConPas?.setAttribute('placeholder', 'Enter your password')
        }
    })

    const passwordToggle = document.querySelector('.js-password-toggle') as HTMLInputElement
    const confirmPasswordToggle = document.querySelector('.js-confirm-password-toggle') as HTMLInputElement

    passwordToggle?.addEventListener('change', function () {
        const inputFieldPas = document.querySelector('.js-password') as HTMLInputElement
        const passwordLabel = document.querySelector('.js-password-label') as HTMLElement
        togglePasswordVisibility(inputFieldPas, passwordLabel)
    })

    confirmPasswordToggle?.addEventListener('change', function () {
        const inputFieldConPas = document.querySelector('.js-confirm-password') as HTMLInputElement
        const confirmPasswordLabel = document.querySelector('.js-confirm-password-label') as HTMLElement
        togglePasswordVisibility(inputFieldConPas, confirmPasswordLabel)
    })
    })
</script>
