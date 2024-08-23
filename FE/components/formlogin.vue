<script lang="ts" setup>
    import { onMounted } from 'vue';

    function togglePasswordVisibility(inputField: HTMLInputElement, label: HTMLElement) {
        if (inputField.type === 'password') {
            inputField.type = 'text'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/B6jkXf1/eye-key-look-password-security-see-svgrepo-com.png" alt="">'
        } else {
            inputField.type = 'password'
            label.innerHTML = '<img class="lg:h-5 md:h-4 sm:h-4 h-4" src="https://i.ibb.co.com/Wp1WFhf/eye-password-see-view-svgrepo-com.png" alt="">'
        }
    }

    onMounted(() =>{
        const inputFieldEm = document.getElementById('inputFieldEm') as HTMLInputElement
        const inputLabelEm = document.getElementById('inputLabelEm') as HTMLElement
        const inputFieldPas = document.getElementById('inputFieldPas') as HTMLInputElement
        const inputLabelPas = document.getElementById('inputLabelPas') as HTMLElement

        inputFieldEm?.addEventListener('focus', () => {
            inputLabelEm?.classList.remove('opacity-0')
            inputLabelEm?.classList.add('opacity-100')
            inputFieldEm?.setAttribute('placeholder', '')
        })

        inputFieldEm?.addEventListener('blur', () => {
        if (inputFieldEm?.value === '') {
            inputLabelEm?.classList.remove('opacity-100')
            inputLabelEm?.classList.add('opacity-0')
            inputFieldEm?.setAttribute('placeholder', 'Enter your email')
            }
        })

        inputFieldPas?.addEventListener('focus', () => {
            inputLabelPas?.classList.remove('opacity-0')
            inputLabelPas?.classList.add('opacity-100')
            inputFieldPas?.setAttribute('placeholder', '')
        })

        inputFieldPas?.addEventListener('blur', () => {
        if (inputFieldPas?.value === '') {
            inputLabelPas?.classList.remove('opacity-100')
            inputLabelPas?.classList.add('opacity-0')
            inputFieldPas?.setAttribute('placeholder', 'Enter again your password')
            }
        })

        const passwordToggle = document.querySelector('.js-password-toggle') as HTMLInputElement

        passwordToggle?.addEventListener('change', function () {
            const inputFieldPas = document.querySelector('.js-password') as HTMLInputElement
            const passwordLabel = document.querySelector('.js-password-label') as HTMLElement
            togglePasswordVisibility(inputFieldPas, passwordLabel)
        })
    })
</script>

<template>
    <div>
        <h1 class="text-3xl flex justify-center mt-[10%]">Sign In</h1>
        <form class="flex flex-col gap-y-4 mt-[10%] px-10" action="">
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

                <!-- remember and forgot password -->
                <div class="flex mt-[3%] justify-between">
                    <div>
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-3 h-3 accent-figma-1 border border-black rounded cursor-pointer ">
                        <label for="terms" class="ml-2 text-figma-11 cursor-pointer text-xs">Remember Me</label>
                    </div>

                    <NuxtLink class="underline cursor-pointer text-figma-21 text-xs" to="">Forgot Password</NuxtLink>
                </div>

                <!-- sign in button -->
                <div class="flex justify-center mt-[6%] ">
                    <CustomButton variant="primary" class="text-sm">Sign In</CustomButton>
                </div>
        </form>
    </div>
</template>