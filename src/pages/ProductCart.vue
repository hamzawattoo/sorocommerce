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
                    RuneScape Membership Pin (144 Days)</div>
                <div class=" px-6 py-10 ">
                    <ul class="space-y-2 my-4">
                        <li>A 144-days RuneScape Membership Pin for your OldSchool RuneScape or RuneScape 3 needs.</li>
                        <li>Supplies are very limited, so grab some now before they run out!</li>
                    </ul>
                    <p class="font-medium text-lg mb-2">NOTE: The pins will be sent to your provided email address.</p>
                    <ul class="list-decimal list-inside space-y-2 my-4">
                        <p class="font-medium text-lg mb-2">How to use the pin code:</p>
                        <li>Head over to RuneScape's Pre-Paid Cards page: https://www.runescape.com/store_locato</li>
                        <li>Click on the <span class="font-medium">ACTIVATE CARD</span> button</li>
                        <li>Login, then enter the PIN</li>
                        <li>Click on Redeem</li>
                    </ul>
                    <div class="">
                        <p class="font-medium text-lg mb-2">Frequently Asked Questions (FAQ)</p>
                        <ul class="space-y-4 ">
                            <li><strong class="font-medium">Q:</strong> Is this for Old School RuneScape, or RuneScape 3?
                            </li>
                            <li><strong class="font-medium">A:</strong> Membership works for both OldSchool RuneScape, and
                                RuneScape 3.</li>
                            <li><strong class="font-medium">Q:</strong> Is this for Old School RuneScape, or RuneScape 3?
                            </li>
                            <li><strong class="font-medium">A:</strong> Membership works for both OldSchool RuneScape, and
                                RuneScape 3.</li>
                            <li><strong class="font-medium">Q:</strong> Is this for Old School RuneScape, or RuneScape 3?
                            </li>
                            <li><strong class="font-medium">A:</strong> Membership works for both OldSchool RuneScape, and
                                RuneScape 3.</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-white max-w-sm w-full border border-gray-200 rounded-xl">
                <div class="bg-primary h-16 w-full px-6 font-medium text-lg text-white rounded-t-xl flex items-center">About
                </div>
                <div class="px-6 space-y-6 flex flex-col items-center justify-center py-10">
                    <h1 class="font-bold text-2xl">$0.00</h1>
                    <button class="bg-secondarygreen text-white font-medium text-lg px-10 py-2 rounded-md">Buy Now</button>
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
                                class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Coupen code</label>
                            <input type="text" name="name" id="name"
                                class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                placeholder="Add Coupen code" />
                           
                        </div>
                        <button @click="addingCoupen()" class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-1.5 px-4 mt-2  rounded-md">
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
                    <div class="w-full border-t  pt-6">
                        <ul class="space-y-2">
                            <li class="flex items-center justify-between ">
                                <span>Seller</span>
                                <span class="font-medium text-blue-900">Fstlye</span>
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
        </div>
    </div>
</template>
<script setup>
import Logo from '../assets/Logo.png';
import { ref } from 'vue';

const quantity = ref(0);
const addCoupen = ref(false);
const increment = () => {
    quantity.value++;
};
const addingCoupen = () => {
    addCoupen.value = !addCoupen.value;
};  
const decrement = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
};
</script>