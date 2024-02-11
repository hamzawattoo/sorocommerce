<template>
    <div class=" px-4 sm:px-8">
        <LandingNav />
        <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20 gap-12">
            <div class="space-y-6">
                <h1 class="text-3xl md:text-5xl font-bold">Creativity Soroban’s Global Talent Pool</h1>
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
                        <label class="font-medium text-lg whitespace-nowrap" for="">Transparent transactions</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Reduced risk of fraud</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondaryblue focus:ring-secondaryblue">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Automated dispute resolution</label>
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
                    <h1 class="text-3xl md:text-5xl font-bold">Online Store</h1>
                    <p class="text-md font-medium">Complete E-commerce Solution</p>
                    <p class="text-md font-medium">
                        Our platform offers a comprehensive e-commerce solution, covering every aspect you need for your
                        online
                        business. Build and showcase your brand effortlessly with features like coupons, customer feedback,
                        analytics, and more.
                        <br /><br />
                        Now, you can have a stunning online store that perfectly aligns with the essence of your business."
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Flexible Store Designs</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Tailored Coupon Options</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Powerful Analytics</label>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex h-6 items-center">
                                <input id="comments" checked aria-describedby="comments-description" name="comments"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                            </div>
                            <label class="font-medium text-lg whitespace-nowrap" for="">Developer Assistance</label>
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
                    <h1 class="text-3xl md:text-5xl font-bold">Our Payment Options </h1>
                    <p class="text-md font-medium">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when
                        looking at its layout.
                        <br /><br />
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed
                        to using 'Content here, content here. making it look like readable English. Many desktop publishing
                        packages and web page editors now use Lorem Ipsum as their default model text.
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
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout.
                    <br /><br />
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    to using 'Content here, content here. making it look like readable English.
                    <br /><br />
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                </p>

            </div>

        </section>
        <section class="bg white rounded-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-20">

            <div class="space-y-6">
                <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3  "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Support Your Customers</h1>

                <p class="text-md font-medium">
                    Communicate and assist your customers in real time with our support integrations.
                </p>
                <div class="grid grid-cols-1 gap-4">
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Flexible Store Designs</label>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex h-6 items-center">
                            <input id="comments" checked aria-describedby="comments-description" name="comments"
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-secondarygreen focus:ring-secondarygreen">
                        </div>
                        <label class="font-medium text-lg whitespace-nowrap" for="">Powerful Analytics</label>
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
        <footer>
            <div class="max-w-7xl mx-auto text-gray-500 ">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
                    <div class="">
                        <img class="w-44 lg:w-auto" :src="Logo" alt="">
                        <p class="text-sm mt-3 pr-12">It is a long established fact that a reader will be distracted by the
                            readable.</p>
                    </div>
                    <ul class="space-y-2">
                        <p class="text-black font-bold">Quick Links</p>
                        <li>About us</li>
                        <li>Company</li>
                        <li>Support</li>
                        <li>Connect with us</li>
                    </ul>
                    <ul class="space-y-3">
                        <p class="text-black font-bold">Useful Links</p>
                        <li>Contact us</li>
                        <li>Partner</li>
                        <li>Cookie Preferences</li>
                        <li>Disclaimer</li>
                        <li>Imprint </li>
                    </ul>
                    <ul class="space-y-2">
                        <p class="text-black font-bold">Follow Us</p>
                        <div class="flex items-center justify-start gap-3">
                            <a href=""><img :src="Link1" alt=""></a>
                            <a href=""><img :src="Link2" alt=""></a>
                            <a href=""><img :src="Link3" alt=""></a>
                            <a href=""><img :src="Link4" alt=""></a>
                            <a href=""><img :src="Link5" alt=""></a>
                        </div>
                    </ul>
                </div>
                <div class="border-t py-5 text-center col-span-5">
                    <p class="text-md font-medium text-black text-center">Copyright © 2024, Sorocommerce LLC</p>
                </div>

            </div>
        </footer>
    </div>
</template>
<script setup>
import LandingNav from '../components/LandingNav.vue';
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