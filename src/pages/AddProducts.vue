<template>
    <SidebarLayout>
      <p class="heading md:col-span-3">Product</p>
      <div class="bg-white rounded-xl px-8 pt-4 sm:pt-8 pb-4 sm:pb-14 space-y-6 shadow-sm border border-gray-100 mt-6 relative">
        <a class="absolute top-3 right-3" href="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </a>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-md text-gray-900">Product Stock</p>
          <select class="bg-white block w-44 rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6" name="" id="">
          <option value="">Listed</option>
          <option value="">Unlisted</option>
        </select>
          <div class="relative flex items-start hidden">
            <div class="flex h-6 items-center">
              <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                class="h-4 w-4 rounded border-2 border-gray-700 text-primary focus:ring-primary">
            </div>
            <div class="ml-3 text-sm leading-6">
              <label for="comments" class="font-semibold text-gray-900 text-sm">Unlisted </label>
            </div>
          </div>
        </div>
        <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10" action="">
          <div class="sm:col-span-2">
            <ImgUploader />
          </div>
          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Title</label>
            <input type="text" name="name" id="name"
              class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
              placeholder="High-Quality SEO Content Writing Service ($1 for 1000 words)" />
          </div>
          <div class="relative">
            <label for="phone-number"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Price</label>
            <div
              class="bg-white block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none ">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" autocomplete="country"
                  class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-10 text-gray-500 sm:text-sm  focus:ring-0 font-medium">
                  <option>USDC</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input type="text" name="phone-number" id="phone-number"
                class="block w-full rounded-md border-0 pl-20 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-0 "
                placeholder="0.01" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <p class="font-semibold text-md mb-6 text-gray-900">Description</p>
            <TextEditor />
          </div>
          <p class="font-semibold text-md text-gray-900 sm:col-span-2">Product Stock</p>
  
          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Type</label>
            <select
              class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  sm:text-sm sm:leading-6"
              name="" id="">
              <option value="">Service</option>
              <option value="">Item</option>
              <option value="">File</option>
              <option value="">Dynamic</option>
            </select>
          </div>
          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Callback
              URL</label>
            <input type="text" name="name" id="name"
              class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
              placeholder="Receive a HTTP request for events" />
          </div>
          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Minimum</label>
            <input type="number" name="name" id="name"
              class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
              placeholder="0" />
          </div>
          <div class="relative">
            <label for="name"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Maximum
              Quantity</label>
            <input type="number" name="name" id="name"
              class="bg-white block w-full rounded-md border-0 px-3 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
              placeholder="2" />
          </div>
        </form>
      </div>
     <div class="flex items-center justify-between">
      <div class="max-w-[200px] w-full mt-6">
        <button
          class="text-center text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
          Update</button>
      </div>
      <div class="max-w-[200px] w-full mt-6">
        <button
          class="text-center text-white font-semibold text-base bg-gradient-to-r from-red-400 to-pink-700 py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
          Save to Draft
          </button>
      </div>
     </div>
    </SidebarLayout>
  </template>
  <script setup>
  import SidebarLayout from "../layout/SidebarLayout.vue";
  import ImgUploader from "../components/ImgUploader.vue";
  import TextEditor from "../components/TextEditor.vue";
  </script>