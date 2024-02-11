<template>
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
                        <li><router-link to="/about">About us</router-link></li>
                        <li><router-link to="/faqs">Company</router-link></li>
                        <li><router-link to="/terms&condition">Support</router-link></li>
                        <li>Connect with us</li>
                    </ul>
                    <ul class="space-y-3">
                        <p class="text-black font-bold">Useful Links</p>
                        <li><router-link to="/contact_us">Contact us</router-link></li>
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
</template>
<script setup>
import Logo from '../assets/Logo.png';
import Link1 from '../assets/Frame 15.png';
import Link2 from '../assets/Frame 16.png';
import Link3 from '../assets/Frame 17.png';
import Link4 from '../assets/Frame 18.png';
import Link5 from '../assets/Frame 19.png';
</script>