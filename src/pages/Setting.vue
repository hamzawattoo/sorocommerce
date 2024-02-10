<template>
  <SidebarLayout>
    <div class="flex flex-col lg:grid  lg:grid-cols-5 md:h-[85vh] gap-y-3 gap-x-3 2xl:gap-x-6">
      <div
        class="flex flex-row flex-wrap lg:flex-col justify-center lg:justify-start bg-white rounded-xl shadow p-4 lg:p-0">
        <h1 class="heading py-6 px-6 text-start mb-6 hidden lg:block">Settings</h1>
        <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{
          'bg-primary text-white lg:bg-transparent lg:text-primary': activeTab === index,
          'hover:text-primary': activeTab !== index,
        }" class="py-2 rounded-lg mr-2 focus:outline-none font-normal text-lg text-start px-6">
          {{ tab }}
        </button>
      </div>
      <div class="md:col-span-4 bg-white rounded-xl shadow p-6">
        <div v-if="activeTab === 0" class=""></div>
        <div v-if="activeTab === 1" class="">
          <h1 class="heading">Users</h1>
          <div class="space-y-6 grid grid-cols-1 md:gris-cols-2">
            <span class="md:col-span-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-36 h-36 text-[#F1F1FF]">
                <path fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            <div class="md:col-span-2">
              <div class="relative md:w-[50%]">
                <label for="name"
                  class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Username</label>
                <input type="text" name="name" id="name"
                  class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="johnsmith" />
              </div>
            </div>
            <div class="md:col-span-2">
              <div class="md:w-[50%]">
                <div class="relative">
                  <label for="name"
                    class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Account
                    Email</label>
                  <input type="text" name="name" id="name"
                    class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="johnsmith@gmail.com" />
                </div>
                <p class="text-gray-400 mt-2">We’ll use this address to contact you.</p>
              </div>
            </div>
            <div class="md:col-span-2">
              <p class="font-semibold text-md mb-6 text-gray-900">Bio</p>
              <TextEditor />
            </div>
            <div class="max-w-[200px] mt-6">
              <button
                class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                Update
              </button>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 2" class="mt-4 space-y-6">
          <p class="font-semibold text-lg mb-6 text-gray-900">Security</p>

          <div class="md:col-span-2">
            <div class="relative md:w-[50%]">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Current
                Password</label>
              <input type="text" name="name" id="name"
                class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="johnsmith" />
            </div>
          </div>
          <div class="md:col-span-2">
            <div class="relative md:w-[50%]">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">New
                Password</label>
              <input type="text" name="name" id="name"
                class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="johnsmith" />
            </div>
          </div>
          <div class="">
            <p class="font-semibold text-md mb-6 text-gray-900">Two-Factor Authentication</p>
            <ol class="space-y-4">
              <li>
                <p class="font-normal text-md">1. Download the Google Authenticator App</p>
                <div class="flex flex-col ml-8 mt-2">
                  <a href=""> <span class="font-normal text-md text-primary">Google Play Store</span></a>
                  <a href=""><span class="font-normal text-md text-primary">iOS App Store</span></a>
                </div>
              </li>
              <li>
                <p class="font-normal text-md">2. Scan the QR Code</p>
                <img class="ml-8 mt-4" :src="BarCode" alt="">
              </li>
              <li>
                <p class="font-normal text-md">3. Enter the code</p>
                <input
                  class="bg-white block w-[50%] md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 mt-2"
                  type="number">
              </li>
            </ol>
            <div class="max-w-xs mt-6">
              <button
                class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                Activate Two Factor
              </button>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 3" class="mt-4 grid md:grid-cols-2 gap-5">
          <div class="">
            <p class="font-semibold text-lg mb-6 text-gray-900">Security</p>
            <div class="relative">
              <label for="name"
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">
                Currency</label>
              <input type="text" name="name" id="name"
                class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="USD" />
            </div>
            <p class="font-semibold text-lg text-gray-900 mt-6">Don’t have wallet?</p>
            <div class="font-normal text-md mt-2 text-gray-800">
              How to create wallet? <a href="" class="text-primary font-semibold">Click here</a>
            </div>
          </div>
          <div class="border rounded-xl p-4">
            <p class="font-bold text-lg mb-6 text-gray-900 text-center max-w-xs mx-auto">Please Connect Your Account to Wallet</p>
            <div class="relative">
              <label for=""
                class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Choose your
                Wallet</label>
              <div
                class=" w-full rounded-xl border px-3 py-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 flex">
                <div class="px-2 py-4 w-full">
                  <p class="flex items-center gap-3 text-lg font-normal hover:bg-blue-50 px-4 py-2 rounded-lg"><img class="h-7 w-7 object-contain" :src="Wallet3" alt=""> Rabet</p>
                  <p class="flex items-center gap-3 text-lg font-normal hover:bg-blue-50 px-4 py-2 rounded-lg"><img class="h-8 w-8 object-contain" :src="Wallet2" alt=""> Frighter</p>
                  <p class="flex items-center gap-3 text-lg font-normal hover:bg-blue-50 px-4 py-2 rounded-lg"><img class="h-8 w-8 object-contain" :src="Wallet4" alt=""> Albedo</p>
                  <p class="flex items-center gap-3 text-lg font-normal hover:bg-blue-50 px-4 py-2 rounded-lg"><img class="h-8 w-8 object-contain" :src="Wallet1" alt=""> Xbull</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </SidebarLayout>
</template>

<script setup>
import { ref } from "vue";
import SidebarLayout from "../layout/SidebarLayout.vue";
import TextEditor from "../components/TextEditor.vue";
import BarCode from "../assets/Vector.png";
import Wallet1 from "../assets/image 27.png";
import Wallet2 from "../assets/image 26.png";
import Wallet3 from "../assets/PmIHK-cv_400x400 1 (1).png";
import Wallet4 from "../assets/wallet.png";

const tabs = ["Account", "General", "Security", "Payments"];
const activeTab = ref(0);
</script>
