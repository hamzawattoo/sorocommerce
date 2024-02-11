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
        <div
            class="bg-white shadow-sm rounded-md px-8 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <img class="w-32 h-32 rounded-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="">
            <div class="flex-1">
                <p class="font-bold !text-3xl text-gray-900 ">John Smith</p>
                <dt class="text-gray-500 font-medium">Full Stack Developer | php ,laravel ,javcript</dt>
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 my-2">
                    <router-link to="/product_reviews"
                        class="bg-[#6AD8FF] text-white px-4 py-1 rounded-full flex items-center justify-center gap-1 font-medium"><span><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span> Top Rated</router-link>
                    <button
                        class="bg-primary text-white px-4 py-1 rounded-full flex items-center justify-center gap-1 font-medium"><span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.1206 14.3063C18.2572 14.3025 18.3605 14.4367 18.3235 14.5762C18.1397 15.2682 17.8479 15.8582 17.3798 16.3548C16.6945 17.0818 15.8255 17.4044 14.752 17.5576C13.7089 17.7063 12.376 17.7063 10.6932 17.7063H8.75862C7.07585 17.7063 5.74297 17.7063 4.69984 17.5576C3.6263 17.4044 2.75738 17.0818 2.07212 16.3548C1.38688 15.6278 1.08277 14.7059 0.938443 13.567C0.798191 12.4604 0.7982 11.0464 0.798218 9.26109V9.15151C0.7982 7.36625 0.798191 5.9522 0.938443 4.84554C1.08277 3.70661 1.38688 2.78478 2.07212 2.05779C2.75738 1.33081 3.6263 1.00818 4.69984 0.855064C5.74297 0.70627 7.07584 0.70628 8.75862 0.706299H10.6932C12.376 0.70628 13.7089 0.70627 14.752 0.855064C15.8255 1.00818 16.6945 1.33081 17.3798 2.05779C17.8479 2.55446 18.1396 3.14433 18.3235 3.83642C18.3605 3.97588 18.2572 4.11006 18.1206 4.1063L15.8096 4.10631C13.2122 4.10631 10.9228 6.28318 10.9228 9.2063C10.9228 12.1294 13.2122 14.3063 15.8096 14.3063H18.1206ZM5.37653 12.8492C4.99726 12.8492 4.68978 12.523 4.68978 12.1206V6.29201C4.68978 5.88964 4.99726 5.56344 5.37653 5.56344C5.75581 5.56344 6.06328 5.88964 6.06328 6.29201V12.1206C6.06328 12.523 5.75581 12.8492 5.37653 12.8492Z"
                                    fill="white" />
                            </svg>
                        </span> Store wallet: 0xd1d61175a1...3d6734e0b4548f</button>
                </div>
                <dt class="text-gray-500 font-medium">Texas, USA</dt>

            </div>
            <div class="">
                <dt class="text-[#22B16E] font-medium mb-2">1.2k Positive reviews</dt>
                <button @click="open = true"
                    class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                    Contact Profile
                </button>
            </div>
        </div>
        <div class="my-12 flex justify-end">
            <h1 class="!text-3xl font-bold">Products</h1>
            <form class="relative flex w-full" action="#" method="GET"><label for="search-field"
                    class="sr-only">Search</label>
                <div class="flex items-center w-full max-w-xs ml-auto relative">
                    <input id="search-field"
                        class="relative block bg-white shadow-md py-3 h-auto w-full border-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm rounded-md"
                        placeholder="Search..." type="search" name="search"><span class="absolute right-4"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300" viewBox="0 0 14 14"
                            fill="none">
                            <path
                                d="M10.115 10.0941L13 13M11.6667 6.33333C11.6667 9.27887 9.27887 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27887 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27887 1 11.6667 3.38781 11.6667 6.33333Z"
                                stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg></span>
                </div>
            </form>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 ">
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex flex-col items-start justify-center space-y-2">
                <img class="w-full h-[223px]" :src="Wordpress" alt="">
                <dt class="text-xl font-bold">Wordpress Plugin</dt>
                <dt class="text-primary font-bold text-3xl">USDC 19.99</dt>
            </div>
        </div>
    </div>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
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
                            class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-12">
                            <span @click="open = false" class="absolute top-3 right-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            <div class="space-y-5">
                                <h1 class="text-4xl font-medium text-center my-6">Feedback</h1>
                                <p class="font-medium">How would you rate your experience:</p>
                                <div class="rounded-full p-3 bg-blue-50 flex items-center justify-center gap-2 mb-6">
                                    <img :src="star" alt="">
                                    <img :src="star" alt="">
                                    <img :src="star" alt="">
                                    <img :src="star" alt="">
                                    <img :src="star" alt="">
                                    <p class="font-medium text-sm">4.5 out of 5.0</p>
                                </div>
                                <p class="font-medium">Will you purchase or use our products again?</p>
                                <div class="flex items-center gap-3 font-medium">
                                    <div class="flex items-center gap-2">
                                        <input type="radio" name="" id="">
                                        <label for="">Yes</label>
                                    </div>
                                    <div class="flex items-center gap-2 font-medium">
                                        <input type="radio" name="" id="">
                                        <label for="">No</label>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">What
                                            is your greatest concern about this product/service? </label>
                                        <textarea placeholder="Type here..."
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            name="" id="" cols="10" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="max-w-[200px] mt-6">
                                    <button 
                                        class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import dashboard from '../pages/Dashboard.vue';
import products from '../pages/Products.vue';
import Logo from '../assets/Logo.png';
import notificationLogo from '../assets/Notification.png';
import Wordpress from '../assets/image 22.png';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline';
import star from '../assets/Star 6.png';
import { ref } from 'vue';
const open = ref(false)

const isSidebarOpen = ref(false);
const isNotification = ref(false);

const isNotificationBtn = () => {
    isNotification.value = !isNotification.value;
}

const MobSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
}
const isSidebarClose = () => {
    isSidebarOpen.value = false;
}
</script>