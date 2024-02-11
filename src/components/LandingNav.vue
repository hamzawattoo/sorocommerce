<template>
     <nav class="max-w-8xl mx-auto flex items-center justify-between w-full">
        <div class="flex-1">
            <img :src="Logo" alt="Logo" class="px-4 py-12 w-44 sm:w-auto">
        </div>
        <span
            class="block lg:hidden hover:text-secondaryblue border-2 border-secondaryblue rounded-md bg-secondaryblue hover:bg-white text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                class="w-8 h-8 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
        </span>
        <div class="hidden lg:flex items-center justify-between flex-1">
            <router-link to="/dashboard" class="text-xl border-b-4 rounded-sm border-transparent hover:border-primary px-4">Explore</router-link>
            <a class="text-xl border-b-4 rounded-sm border-transparent hover:border-primary px-4" href="">Pricing</a>
            <a class="text-xl border-b-4 rounded-sm border-transparent hover:border-primary px-4" href="">Jobs </a>
            <div class="flex items-center justify-between gap-x-4">
                <router-link to="signin"
                    class="whitespace-nowrap text-center text-black shadow-lg font-semibold text-base bg-white py-3  rounded-xl flex items-center justify-center gap-x-3 px-16 hover:bg-gradient-to-r from-secondaryblue to-secondarypink  hover:text-white">
                    Sign In
                </router-link >
                <router-link to="/signup"
                    class="whitespace-nowrap text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink hover:opacity-75 py-3  rounded-xl flex items-center justify-center gap-x-3 px-16">
                    Sign Up
                </router-link>
            </div>

        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import Logo from '../assets/Logo.png';

</script>