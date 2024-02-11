<template>

    <div class="px-6 md:px-6 lg:px-10">
        <LandingNav />
    <section
        class="max-w-7xl mx-auto bg-gradient-to-r from-secondaryblue to-secondarypink rounded-lg text-white py-20 items-center justify-center gap-10 mt-10 mb-20">
        <div class=" max-w-3xl mr-auto sm:mx-auto px-12 text-center">
            <div class="h-1 bg-white w-24 my-3 mx-auto "></div>
            <h1 class="text-3xl md:text-5xl font-bold">The Future of Freelancing on Soroban Blockchain</h1>
        </div>
    </section>
    <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20 gap-12">
        <div class="space-y-6">
            <div class="h-1  bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3 "></div>
            <h1 class="text-3xl md:text-5xl font-bold">A Decentralized Freelancing Marketplace Powered by Soroban Blockchain
            </h1>
            <p class="text-md font-medium">It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout.

                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here.</p>
            <h1 class="text-3xl font-bold">For Freelancers:</h1>
            <div class="grid grid-cols-1 gap-4">
                <div class="flex items-center gap-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" checked aria-describedby="comments-description" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                    </div>
                    <label class="font-medium text-lg whitespace-nowrap" for="">Secure payments</label>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" checked aria-describedby="comments-description" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                    </div>
                    <label class="font-medium text-lg whitespace-nowrap" for="">Transparent transactions</label>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" checked aria-describedby="comments-description" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                    </div>
                    <label class="font-medium text-lg whitespace-nowrap" for="">Reduced risk of fraud</label>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex h-6 items-center">
                        <input id="comments" checked aria-describedby="comments-description" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                    </div>
                    <label class="font-medium text-lg whitespace-nowrap" for="">Automated dispute resolution</label>
                </div>
            </div>
        </div>
        <div class="">
            <img :src="Herosection6" alt="">
        </div>
    </section>
    <section class="">
        <div class="max-w-7xl mx-auto py-20">
            <div class="h-1  bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3 mx-auto"></div>
            <h1 class="text-3xl md:text-5xl font-bold text-center mb-10">A Platform you can trust
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="space-y-5 bg-white flex flex-col items-center justify-center rounded-3xl py-14 shadow-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="128" viewBox="0 0 150 128" fill="none">
                            <rect x="0.780029" y="0.00390625" width="148.44" height="127.282" rx="12" fill="#FFB545"
                                fill-opacity="0.1" />
                            <rect x="25.2399" y="20.9775" width="99.5203" height="85.335" rx="12" fill="#FFB545" />
                            <path
                                d="M96.3248 43.351C95.7344 42.9691 95.0593 42.7381 94.3587 42.6782C93.6582 42.6183 92.9537 42.7314 92.3071 43.0076L71.1196 51.3521C70.618 51.5563 70.0816 51.6612 69.54 51.6612H55.976C54.8375 51.6612 53.7457 52.1134 52.9408 52.9184C52.1358 53.7234 51.6835 54.8152 51.6835 55.9536V56.297H47.3911V66.5988H51.6835V67.0452C51.7104 68.1657 52.1745 69.2312 52.9766 70.0141C53.7787 70.7969 54.8552 71.235 55.976 71.2346L61.1269 82.1546C61.4757 82.8899 62.0248 83.512 62.7112 83.9493C63.3976 84.3867 64.1934 84.6216 65.0072 84.627H67.1706C68.3031 84.618 69.3861 84.1617 70.1836 83.3577C70.9812 82.5537 71.4287 81.4671 71.4287 80.3346V71.6467L92.3071 79.9912C92.8206 80.1956 93.3683 80.3004 93.921 80.3002C94.7785 80.2864 95.6135 80.024 96.3248 79.5448C96.8896 79.1634 97.3555 78.6531 97.6839 78.0559C98.0123 77.4588 98.1938 76.792 98.2134 76.1108V46.888C98.2103 46.1892 98.0366 45.5018 97.7075 44.8854C97.3783 44.269 96.9037 43.7423 96.3248 43.351ZM67.1363 55.9536V67.0452H55.976V55.9536H67.1363ZM67.1363 80.3346H64.9729L60.7491 71.2346H67.1363V80.3346ZM72.6993 67.5603C72.2915 67.352 71.8664 67.1796 71.4287 67.0452V55.7132C71.8622 55.6238 72.2873 55.4974 72.6993 55.3355L93.921 46.888V76.0078L72.6993 67.5603ZM98.3165 57.1555V65.7403C99.4549 65.7403 100.547 65.2881 101.352 64.4831C102.157 63.6781 102.609 62.5863 102.609 61.4479C102.609 60.3095 102.157 59.2177 101.352 58.4127C100.547 57.6077 99.4549 57.1555 98.3165 57.1555Z"
                                fill="white" />
                        </svg>
                    </span>
                    <h1 class="text-3xl text-[#FFB545] font-bold">30,000+</h1>
                    <p class="text-xl font-medium">Creators</p>
                </div>
                <div class="space-y-5 bg-white flex flex-col items-center justify-center rounded-3xl py-14 shadow-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="128" viewBox="0 0 150 128" fill="none">
                            <rect x="0.780029" y="0.00390625" width="148.44" height="127.282" rx="12" fill="#D6A3FE"
                                fill-opacity="0.1" />
                            <rect x="25.2399" y="20.9775" width="99.5203" height="85.335" rx="12" fill="#D6A3FE" />
                            <path
                                d="M80.6052 48.6977C81.7263 48.6977 82.4736 47.9503 82.4736 46.8293V43.0925C82.4736 39.9162 80.0447 37.4873 76.8684 37.4873H58.1844C55.0081 37.4873 52.5792 39.9162 52.5792 43.0925V84.1973C52.5792 87.3736 55.0081 89.8025 58.1844 89.8025H76.8684C80.0447 89.8025 82.4736 87.3736 82.4736 84.1973V76.7237C82.4736 75.6027 81.7263 74.8553 80.6052 74.8553H56.316V48.6977H80.6052ZM65.658 80.4605H69.3948C70.5159 80.4605 71.2632 81.2079 71.2632 82.3289C71.2632 83.45 70.5159 84.1973 69.3948 84.1973H65.658C64.537 84.1973 63.7896 83.45 63.7896 82.3289C63.7896 81.2079 64.537 80.4605 65.658 80.4605Z"
                                fill="white" />
                            <path
                                d="M71.2633 69.2499C70.7028 69.2499 70.3291 69.0631 69.9554 68.6894L64.3502 63.0842C63.6028 62.3369 63.6028 61.2158 64.3502 60.4685L69.9554 54.8633C70.7028 54.1159 71.8238 54.1159 72.5712 54.8633C73.3185 55.6106 73.3185 56.7317 72.5712 57.479L68.2738 61.7763L72.5712 66.0737C73.3185 66.821 73.3185 67.9421 72.5712 68.6894C72.1975 69.0631 71.8238 69.2499 71.2633 69.2499Z"
                                fill="white" />
                            <path
                                d="M89.9472 69.2499C89.3867 69.2499 89.013 69.0631 88.6393 68.6894C87.892 67.9421 87.892 66.821 88.6393 66.0737L92.9366 61.7763L88.6393 57.479C87.892 56.7317 87.892 55.6106 88.6393 54.8633C89.3867 54.1159 90.5077 54.1159 91.2551 54.8633L96.8603 60.4685C97.6076 61.2158 97.6076 62.3369 96.8603 63.0842L91.2551 68.6894C90.8814 69.0631 90.5077 69.2499 89.9472 69.2499Z"
                                fill="white" />
                            <path
                                d="M76.8682 71.1186C76.6814 71.1186 76.3077 71.1186 76.1209 70.9318C75.1867 70.5581 74.813 69.437 75.3735 68.5028L82.8471 53.5556C83.2208 52.6214 84.3418 52.2478 85.276 52.8083C86.2102 53.182 86.5839 54.303 86.0234 55.2372L78.5498 70.1844C78.1761 70.7449 77.6156 71.1186 76.8682 71.1186Z"
                                fill="white" />
                        </svg>
                    </span>
                    <h1 class="text-3xl text-primary font-bold">$100,000,+</h1>
                    <p class="text-xl font-medium">Creators Earnings</p>
                </div>
                <div class="space-y-5 bg-white flex flex-col items-center justify-center rounded-3xl py-14 shadow-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="128" viewBox="0 0 150 128" fill="none">
                            <rect x="0.780029" y="0.00390625" width="148.44" height="127.282" rx="12" fill="#83DDFF"
                                fill-opacity="0.1" />
                            <rect x="25.2399" y="20.9775" width="99.5203" height="85.335" rx="12" fill="#83DDFF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M64.5369 67.6585V59.6312C64.5369 54.1203 70.3698 51.9934 74.113 53.9129L81.9407 57.9265C86.6373 60.3346 86.637 66.9551 81.9407 69.3632L74.113 73.3769C70.3698 75.2962 64.5369 73.1694 64.5369 67.6585ZM69.7684 59.6312C69.7684 58.7039 70.8477 58.1177 71.7261 58.5682L79.5538 62.5818C80.4575 63.0451 80.4575 64.2447 79.5538 64.7079L71.7261 68.7216C70.8477 69.172 69.7684 68.5858 69.7684 67.6585V59.6312Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M61.9211 89.8027C54.6978 89.8027 48.8422 83.9471 48.8422 76.7238V50.5661C48.8422 43.3429 54.6978 37.4872 61.9211 37.4872H88.0788C95.302 37.4872 101.158 43.3429 101.158 50.5661V76.7238C101.158 83.9471 95.302 89.8027 88.0788 89.8027H61.9211ZM54.0737 76.7238C54.0737 81.0578 57.5871 84.5712 61.9211 84.5712H88.0788C92.4129 84.5712 95.9262 81.0578 95.9262 76.7238V50.5661C95.9262 46.232 92.4129 42.7187 88.0788 42.7187H61.9211C57.5871 42.7187 54.0737 46.232 54.0737 50.5661V76.7238Z"
                                fill="white" />
                        </svg>
                    </span>
                    <h1 class="text-3xl text-secondaryblue font-bold">13.5k</h1>
                    <p class="text-xl font-medium">Orders per day</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-7xl mx-auto py-20">
            <div class="max-w-5xl mx-auto">
                <div class="h-1  bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3 mx-auto"></div>
                <h1 class="text-3xl md:text-5xl font-bold text-center mb-10 ">Empowering Creators:
                    Sorocommerce - Your Trusted Platform
                </h1>
                <p class="text-center">
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                <div class="bg-white rounded-3xl p-6 sm:p-10 relative sm:text-center mt-16 sm:mt-0 md:my-20 shadow-lg">
                    <div class="flex justify-center">
                        <img class="w-36 h-36 rounded-full absolute -top-14 shadow-xl object-cover" :src="profile" alt="">
                    </div>
                    <h1 class="text-2xl font-bold mt-16">Grayson Mason</h1>
                    <p class="text-gray-500 text-xl">Mason Carter</p>
                    <dt class="text-gray-500 mt-3">
                        It is a long established fact that a reader will be distracted by the content of a page when looking
                        at its layout. It is long established fact that a reader will be distracted by the It is a long
                        established fact that a reader will be distracted by the content of a page when looking at its
                        layout.
                    </dt>
                </div>

                <div class="bg-white rounded-3xl p-10 relative text-center mt-16 sm:mt-0 md:my-20 shadow-lg">
                    <div class="flex justify-center">
                        <img class="w-36 h-36 rounded-full absolute -top-14 shadow-xl object-cover" src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="">
                    </div>
                    <h1 class="text-2xl font-bold mt-16">Mason Carter</h1>
                    <p class="text-gray-500 text-xl">Mason Carter</p>
                    <dt class="text-gray-500 mt-3">
                        It is a long established fact that a reader will be distracted by the content of a page when looking
                        at its layout. It is long established fact that a reader will be distracted by the It is a long
                        established fact that a reader will be distracted by the content of a page when looking at its
                        layout.
                    </dt>
                </div>

                <div class="bg-white rounded-3xl p-10 relative text-center mt-16 sm:mt-0 md:my-20 shadow-lg">
                    <div class="flex justify-center">
                        <img class="w-36 h-36 rounded-full absolute -top-14 shadow-xl object-cover" src="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="">
                    </div>
                    <h1 class="text-2xl font-bold mt-16">Harper Jack</h1>
                    <p class="text-gray-500 text-xl">Mason Carter</p>
                    <dt class="text-gray-500 mt-3">
                        It is a long established fact that a reader will be distracted by the content of a page when looking
                        at its layout. It is long established fact that a reader will be distracted by the It is a long
                        established fact that a reader will be distracted by the content of a page when looking at its
                        layout.
                    </dt>
                </div>

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
        <LandingFooter />
    </div>
  </template>
<script setup>
import LandingNav from '../components/LandingNav.vue';
import LandingFooter from '../components/landingFooter.vue';
import Herosection6 from '../assets/Group 99.png';
import profile from '../assets/profile.png';
import Link1 from '../assets/Frame 15.png';
import Link2 from '../assets/Frame 16.png';
import Link3 from '../assets/Frame 17.png';
import Link4 from '../assets/Frame 18.png';
import Link5 from '../assets/Frame 19.png';
</script>