<template>
    <div class="px-6 md:px-6 lg:px-10">
        <LandingNav />
        <section>
            <div class=" max-w-3xl mr-auto sm:mx-auto px-12 text-center my-5 md:my-20 px-6 md:px-6 lg:px-10">
                <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3 mx-auto "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Contact Us</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-20">
                <img class="h-[500px] object-contain" :src="herosection9" alt="">
                <div class="bg-white rounded-2xl shadow py-8 px-6 md:px-14 space-y-6">
                    <h1 class="text-3xl font-bold text-center">Get in Touch</h1>
                    <div class="relative">
                        <label for="name"
                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Name</label>
                        <input type="text" name="name" id="name"
                            class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            placeholder="Write your name" />

                    </div>
                    <div class="relative">
                        <label for="name"
                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Email</label>
                        <input type="text" name="name" id="name"
                            class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            placeholder="Write your email" />

                    </div>
                    <div class="relative">
                        <label for="name"
                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Meassage</label>
                        <textarea placeholder="Write a message"
                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            name="" id="" cols="20" rows="5"></textarea>

                    </div>
                    <button
                        class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                        Send your message
                    </button>
                </div>
            </div>
        </section>
        <section
            class="max-w-7xl mx-auto bg-gradient-to-r from-secondaryblue to-secondarypink rounded-lg text-white py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
            <div class=" max-w-5xl mr-auto sm:mx-auto px-12">
                <div class="h-1 bg-white w-24 my-3  "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Ready to get <br /> started?</h1>
                <a href="">
                    <p class="text-white font-bold">Sign up with us and get started</p>
                </a>
            </div>
            <div class="text-center px-12">
                <button
                    class="text-center text-primary shadow-lg font-semibold text-base  bg-white hover:opacity-75 py-3  rounded-xl flex items-center justify-center gap-x-3 px-16 ">
                    Get Started
                </button>
            </div>
        </section>
        <div class="bg-white md:rounded-t-[200px] mt-20 px-6">
            <LandingFooter />
        </div>
    </div>
</template>
<script setup>
import LandingNav from '../components/LandingNav.vue';
import LandingFooter from '../components/landingFooter.vue';
import Logo from '../assets/Logo.png';
import herosection9 from '../assets/herosection9.png';

</script>