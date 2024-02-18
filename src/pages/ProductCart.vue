<template>
    <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between ">
            <img :src="Logo" alt="Logo" class="px-4 py-12 w-44 sm:w-auto">
            <div class="flex items-center justify-end sm:justify-normal w-full sm:w-auto gap-x-4 lg:gap-x-4 relative">
                <button @click="isNotificationBtn" type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
                        <path
                            d="M14.0849 5.41765C16.5278 5.41765 18.8705 6.28021 20.5978 7.8156C22.3251 9.35097 23.2954 11.4334 23.2954 13.6048C23.2954 16.9634 24.0546 19.4783 25.0391 21.3278C26.2969 23.6908 26.9257 24.8723 26.8908 25.1421C26.85 25.4571 26.798 25.5438 26.5391 25.7277C26.3172 25.8854 25.2134 25.8854 23.0058 25.8854H5.16398C2.95639 25.8854 1.85262 25.8854 1.63073 25.7277C1.3719 25.5438 1.31989 25.4571 1.27909 25.1421C1.24411 24.8723 1.873 23.6908 3.1308 21.3278C4.11525 19.4783 4.87441 16.9634 4.87441 13.6048C4.87441 11.4334 5.84481 9.35097 7.5721 7.8156C9.29941 6.28021 11.6421 5.41765 14.0849 5.41765ZM14.0849 5.41765V2.00635M9.57177 31.0024C10.7763 32.0655 12.3586 32.7108 14.0918 32.7108C15.8247 32.7108 17.407 32.0655 18.6117 31.0024"
                            stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="23.0019" cy="9.42865" r="7.91696" fill="#FFB545" stroke="#F3F1FF" stroke-width="2" />
                        <path
                            d="M23.2692 11.7096H25.7067V13.3209H20.111V12.9459C21.2556 11.6256 22.0739 10.6568 22.5661 10.0396C23.0583 9.42245 23.3903 8.95175 23.5622 8.62753C23.738 8.30331 23.8259 7.99472 23.8259 7.70175C23.8259 7.42441 23.7399 7.20175 23.5681 7.03378C23.4001 6.86191 23.1813 6.77597 22.9118 6.77597C22.6306 6.77597 22.404 6.86386 22.2321 7.03964C22.0641 7.21152 21.9802 7.44003 21.9802 7.72519V7.87753H20.2634V7.70175C20.2634 6.95956 20.5016 6.3541 20.9782 5.88535C21.4587 5.41269 22.0934 5.17636 22.8825 5.17636C23.6677 5.17636 24.3083 5.41074 24.8044 5.87949C25.3044 6.34824 25.5544 6.9498 25.5544 7.68417C25.5544 8.19589 25.3981 8.73495 25.0856 9.30136C24.7731 9.86386 24.1677 10.6666 23.2692 11.7096Z"
                            fill="white" />
                    </svg>
                </button>
                <router-link to="/notification" v-if="isNotification"
                    class="border rounded-lg bg-white px-4 py-2 absolute right-20 top-20 shadow-md z-50 w-96">
                    <div class="flex items-center justify-between border-b py-2">
                        <p class="font-semibold text-md text-gray-900">Notifications</p>
                        <a href="" class="text-sm text-gray-400 font-medium">Mark all as read</a>
                    </div>
                    <div class="flex items-center justify-start gap-3 border-b py-2">
                        <img :src="notificationLogo" alt="">
                        <p class="font-medium">You have Received <a class="text-primary" href="">2 Queries</a></p>
                    </div>
                    <div class="flex items-center justify-start gap-3 border-b py-2">
                        <img :src="notificationLogo" alt="">
                        <p class="font-medium">You have Received <a class="text-primary" href="">2 Queries</a></p>
                    </div>
                    <div class="flex items-center justify-start gap-3 border-b py-2">
                        <img :src="notificationLogo" alt="">
                        <p class="font-medium">You have Received <a class="text-primary" href="">2 Queries</a></p>
                    </div>
                </router-link>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative">
                    <MenuButton class="-m-1.5 flex items-center p-1.5">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-10 w-10 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="" />
                        <div class="flex flex-col ml-4">
                            <span class="text-gray-400 text-xs font-medium">Welcom</span>
                            <span class="hidden lg:flex lg:items-center gap-4">
                                <span class="text-sm font-semibold text-gray-900" aria-hidden="true">John
                                    Smith</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>
                    </MenuButton>
                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="hidden absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                            <a :href="item.href"
                                :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{
                                    item.name }}</a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </nav>
    </div>
    <div class="max-w-7xl mx-auto min-h-screen px-6">

        <div class="flex items-start justify-between gap-6">
            <div class="rounded-xl bg-white flex-1 border border-gray-200 ">
                <div class="bg-primary h-16 w-full px-6 font-medium text-lg text-white rounded-t-xl flex items-center">
                    Ultimate Developer's Toolkit: Elevate Your Coding Game</div>

                <div class=" px-6 py-10 ">

                    <ul class="space-y-2 my-4">
                        <dt>
                            Unlock the full potential of your software development with my Ultimate Developer's Toolkit.
                            This comprehensive package offers exclusive access to cutting-edge tools and resources
                            designed to streamline your workflow and enhance your coding prowess. From seasoned pros
                            to budding developers, this toolkit is your secret weapon in the fast-paced world of tech.
                        </dt>
                    </ul>

                    <ul class="list-decimal list-inside space-y-2 my-4">
                        <p class="font-medium text-lg mb-2">What You'll Get:</p>
                        <li>A curated collection of the latest development software and utilities.</li>
                        <li>Access to a library of code snippets, frameworks, and plugins to accelerate project completion.
                        </li>
                        <li>Premium support from industry experts, ensuring your development journey is smooth and
                            efficient.</li>

                    </ul>
                    <div class="">
                        <p class="font-medium text-lg mb-2">FAQs:</p>
                        <ul class="space-y-4 ">
                            <li><strong class="font-medium">Q:</strong>Is this toolkit suitable for all levels of
                                developers?
                            </li>
                            <li><strong class="font-medium">A:</strong>Yes, it's designed to assist developers at every
                                stage, from beginners to experts.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-sm w-full">
                <div class="bg-white  border border-gray-200 rounded-xl">
                    <div class="bg-primary h-16 w-full px-6 font-medium text-lg text-white rounded-t-xl flex items-center">
                        About
                    </div>
                    <div class="px-6 space-y-6 flex flex-col items-center justify-center py-10">
                        <div v-if="!BayNowCurrency" class="px-6 space-y-6 flex flex-col items-center justify-center ">
                            <h1 class="font-bold text-2xl">$0.00</h1>
                            <button @click="bayingNow" class="bg-secondarygreen text-white font-medium text-lg px-10 py-2 rounded-md">Buy
                                Now</button>
                            <div class="flex items-center space-x-4">
                                <button @click="decrement"
                                    class="px-3 py-1  text-gray-600 hover:bg-gray-300 focus:outline-none text-2xl">-</button>
                                <input v-model="quantity" type="number"
                                    class=" text-center border border-gray-300 rounded-md focus:outline-none max-w-[100px] pl-8 h-auto"
                                    min="0">
                                <button @click="increment"
                                    class="px-3 py-1  text-gray-600 hover:bg-gray-300 focus:outline-none text-2xl">+</button>
                            </div>
                            <div v-if="addCoupen" class=" w-full">
                                <div class="relative">
                                    <label for="name"
                                        class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Coupen
                                        code</label>
                                    <input type="text" name="name" id="name"
                                        class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        placeholder="Add Coupen code" />

                                </div>
                                <button @click="addingCoupen()"
                                    class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-1.5 px-4 mt-2  rounded-md">
                                    Add
                                </button>
                            </div>
                            <button @click="addingCoupen()" class="text-gray-500 flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z" />
                                    <path fill="currentColor"
                                        d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" />
                                </svg>
                                <span>Add Coupen</span>
                            </button>
                        </div>
                        <div v-if="BayNowCurrency" class="flex items-center justify-start gap-1 py-2 border rounded-xl w-full px-4 hover:bg-blue-100">
                            <img class="w-8 h-8 rounded-full object-contain"
                                src="data:image/jpeg;base64,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"
                                alt="">
                            <p class="text-lg font-semibold">Steller</p>
                        </div>
                        <div v-if="BayNowCurrency" class="flex items-center justify-between w-full max-w-[250px] text-gray-500">
                        <button @click="bayingNow" class="hover:bg-blue-100 px-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button @click="buyNowPayment = true" class="hover:bg-blue-100 px-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                        </div>
                        <div class="w-full border-t  pt-3">
                            <ul class="space-y-2">
                                <li class="flex items-center justify-between ">
                                    <span>Seller</span>
                                    <span class="font-medium text-blue-900">JonhSmith</span>
                                </li>
                                <li class="flex items-center justify-between ">
                                    <span>Stock</span>
                                    <span class="font-medium text-green-600">10</span>
                                </li>
                                <li class="flex items-center justify-between ">
                                    <span>Feedback</span>
                                    <span class="font-medium text-red-600">25</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="w-full flex items-end justify-end py-4">
                    <button @click="open = true"
                        class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full text-center rounded-xl flex items-center justify-center gap-x-3 px-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        Create a Query</button>
                </div>
            </div>
        </div>

        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-50" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-14">
                                <button @click="open = false" class="absolute top-3 right-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                <div class="space-y-6">
                                    <h1 class="heading !text-4xl text-center">
                                        Create a Query
                                    </h1>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Subject</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            placeholder="Write subject" />
                                    </div>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Email</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-xs sm:leading-6"
                                            placeholder="Write email" />
                                    </div>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Message</label>
                                        <textarea type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            placeholder="Write a message"></textarea>
                                    </div>
                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm font-medium leading-6 text-gray-900"></label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label for="file-upload"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file"
                                                            class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="mt-5 sm:mt-6 max-w-[200px]">
                                    <button
                                        class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3.5 w-full rounded-xl">Submit</button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <TransitionRoot as="template" :show="buyNowPayment">
            <Dialog as="div" class="relative z-50" @close="buyNowPayment = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-3xl bg-white  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">

                                <div class="relative bg-primary h-16 w-full px-6 font-medium text-lg text-white rounded-t-xl flex items-center">
                                    High_Quality SEO Content Writing Service ($1 for 1000 words)add
                                    <button @click="buyNowPayment = false" class="absolute top-3 right-3 z-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                </div>
                                <div class="px-8 pt-2 py-12">
                                    <dt>0 / 0.0034 XLM</dt>
                                    <div class="text-center space-y-2 py-6 mt-2 border-t p-8">
                                        <img class="w-24 h-24 rounded-full object-cover border mx-auto" :src="Stellar">
                                        <p class="text-gray-600">You are paying with <strong class="font-medium text-gray-900 text-lg">Stellar</strong></p>
                                        <p class="font-medium">Order ID: 21bbe37c-af02-3943s03-sjdsdsd</p>
                                        <dt class="text-gray-600">Please Send Exactly <span class="text-blue-900 font-medium">0.00000361</span> <strong class="font-medium text-gray-900 text-lg">XLM</strong></dt>
                                    </div>
                                    <div class="flex items-center justify-start gap-4">
                                        <div class="flex-1 flex items-center justify-start gap-2 py-2 px-4 bg-gray-200 rounded-md border border-gray-300">
                                            <img class="h-8 w-7 object-contain rounded-full" :src="Stellar" alt="">
                                            <p class="text-gray-700 break-all text-sm">09s0dasdnkjjjncd98fcbdjcksdkjvdv89dvsbdjvbsdvsd98b</p>
                                        </div>
                                        <button class="text-white font-medium px-4 py-3 rounded-md bg-gradient-to-r from-secondaryblue to-secondarypink ">
                                            PAY
                                        </button>
                                    </div>
                                </div>
                                
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script setup>
import Logo from '../assets/Logo.png';
import Stellar from '../assets/stellar.jpg';
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
const open = ref(false)
const buyNowPayment = ref(false)
const quantity = ref(0);
const addCoupen = ref(false);
const BayNowCurrency = ref(false);
const increment = () => {
    quantity.value++;
};
const addingCoupen = () => {
    addCoupen.value = !addCoupen.value;
};
const bayingNow = () => {
    BayNowCurrency.value = !BayNowCurrency.value;
};
const decrement = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
};
</script>