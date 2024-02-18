<template>
    <div class=" px-4 sm:px-8">
        <LandingNav />
        <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20 gap-12">
            <div class="space-y-6">
                <h1 class="text-3xl md:text-5xl font-bold">Welcome to Sorocommerce, where creativity meets innovation on the
                    Soroban blockchain.</h1>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Secure payments</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Full Transparency</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Streamlined Solutions</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Quick Setup</label>
                    </div>
                </div>
                <form class="relative flex w-full" action="#" method="GET"><label for="search-field"
                        class="sr-only">Search</label>
                    <div class="flex items-center w-full ml-auto relative">
                        <input id="search-field"
                            class="relative block bg-white shadow-md py-5 h-auto w-full border-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 placeholder:text-lg focus:ring-0 font-normal rounded-md"
                            placeholder="Search for any service" type="search" name="search"><span
                            class="absolute right-4"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-300"
                                viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M10.115 10.0941L13 13M11.6667 6.33333C11.6667 9.27887 9.27887 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27887 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27887 1 11.6667 3.38781 11.6667 6.33333Z"
                                    stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg></span>
                    </div>
                </form>
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                        class="text-center text-white shadow-lg font-semibold text-base  bg-gradient-to-r from-secondaryblue to-secondarypink hover:opacity-75 py-3  rounded-xl flex items-center justify-center gap-x-3 px-16 hover:bg-white  hover:text-white w-full">
                        Hire
                    </button>
                    <button
                        class="text-center hover:text-white font-semibold text-base  py-3 bg-white hover:bg-gradient-to-r from-secondaryblue to-secondarypink  rounded-xl flex items-center justify-center gap-x-3 px-16 w-full border border-gray-100 shadow-md">
                        Earn
                    </button>
                </div>

            </div>
            <div class="">
                <img :src="Herosection" alt="">
            </div>
        </section>
        <section class="bg-gradient-to-b from-white to-secondary-blue rounded-t-[200px] py-20">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                <div class="">
                    <img :src="Herosection2" alt="">
                </div>
                <div class="space-y-6">
                    <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3  "></div>
                    <h1 class="text-3xl md:text-5xl font-bold">Your One-Stop Online Store</h1>
                    <p class="text-md font-medium">Elevate your business on Sorocommerce, the platform where ease meets
                        innovation. Tailor
                        your online shop with tools designed for visibility and growth:
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Customizable Storefronts</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Smart Analytics</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Financial Clarity</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Subscription Ready</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Detailed Financial Reports</label>
                        </div>
                    </div>
                    <button
                        class="text-center text-white shadow-lg font-semibold text-base  bg-gradient-to-r from-secondaryblue to-secondarypink hover:opacity-75 py-3  rounded-xl flex items-center justify-center gap-x-3 px-16 hover:bg-white  hover:text-white ">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
        <section class="bg-gradient-to-b from-white to-secondary-blue rounded-t-[200px] py-20 ">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                <img class="block md:hidden mb-6" :src="Herosection3" alt="">

                <div class="space-y-6">
                    <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3  "></div>
                    <h1 class="text-3xl md:text-5xl font-bold">Flexible Payment Options </h1>
                    <p class="text-md font-medium">
                        In Sorocommerce's marketplace, you have the freedom to transact how you want. Choose
                        from a variety of payment methods, including Stellar-based cryptocurrencies like XLM, USDC,
                        EURT, MOBI, and more to suit your convenience.
                        <br><br>
                         Our platform ensures every payment is
                        secure, direct, and as fast as blockchain technology allows. Whether you're earning or hiring,
                        Sorocommerce's payment system is designed with your financial ease in mind.
                    </p>

                </div>
                <div class="relative hidden md:block">
                    <img class="" :src="Herosection3" alt="">
                </div>
            </div>
        </section>
        <section class="bg white rounded-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20">
            <img class=" mb-6" :src="Herosection4" alt="">

            <div class="space-y-6">
                <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3  "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Why Choose Our Payment Options </h1>
                <p class="text-md font-medium">
                    Opt for security and simplicity with Sorocommerce's payment system. We exclusively use
                    Stellar assets such as XLM and USDC, ensuring your transactions are not only fast but also
                    transparent and low-cost. With us, you get the assurance of blockchain with the convenience
                    of familiar currencies. Make the smart choice for your freelance payments with
                    Sorocommerce.
                </p>

            </div>

        </section>
        <section class="bg white rounded-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20">

            <div class="space-y-6">
                <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3  "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Support Your Customers</h1>

                <p class="text-md font-medium">
                    Elevate your customer service with Sorocommerce’s real-time support. Address customer
                    queries instantly, ensuring every interaction builds trust and satisfaction.
                </p>
                <div class="grid grid-cols-1 gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Instant Assistance</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Reliable Support</label>
                    </div>


                </div>
                <button
                    class="text-center text-white shadow-lg font-semibold text-base  bg-gradient-to-r from-secondaryblue to-secondarypink hover:opacity-75 py-3  rounded-xl flex items-center justify-center gap-x-3 px-16 hover:bg-white  hover:text-white ">
                    Learn More
                </button>
            </div>

            <div class="">
                <img :src="Herosection5" alt="">
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
        <Landingfooter />

    </div>
</template>
<script setup>
import LandingNav from '../components/LandingNav.vue';
import Landingfooter from '../components/landingFooter.vue';
import Herosection from '../assets/herosection.png';
import Herosection2 from '../assets/Frame 1558.png';
import Herosection3 from '../assets/Group 126.png';
import Herosection4 from '../assets/CircleGrp.png';
import Herosection5 from '../assets/Layer_6.png';
import Link1 from '../assets/Frame 15.png';
import Link2 from '../assets/Frame 16.png';
import Link3 from '../assets/Frame 17.png';
import Link4 from '../assets/Frame 18.png';
import Link5 from '../assets/Frame 19.png';
</script>