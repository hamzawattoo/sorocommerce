<template>
    <SidebarLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-3">
                <div class="flex flex-row gap-y-3 items-center justify-between">
                    <p class="heading">Products</p>
                    <div class="flex items-center justify-center gap-4 flex-1 max-w-lg ml-auto ">
                        <router-link to="/drafts"
                            class="text-gray-800 font-semibold text-base bg-white border py-3 w-full rounded-xl flex items-center justify-center  gap-x-3 px-5 text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </span>
                            Edit Drafts</router-link>
                        <router-link to="/create_products"
                            class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center gap-x-3 px-5">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            Add Products</router-link>
                    </div>
                </div>
                <div class="">
                    <div class="mt-6 flow-root">
                        <div class="-mx-0 sm:-mx-2 -my-2 overflow-x-auto">
                            <div class="inline-block min-w-full py-2 align-middle px-1  sm:px-4">
                                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-300 table-fixed">
                                        <thead class="bg-white">
                                            <tr>
                                                <th scope="col"
                                                    class="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-6">
                                                    Product</th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Price
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                                                    Conversion
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Type
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Stock
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr v-for="person in people"
                                                :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-500 sm:pl-6">
                                                    {{ person.product }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm font-normal text-gray-500">{{
                                                    person.price }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{person.conversion }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500 ">
                                                     <span class="bg-blue-50 rounded-full px-4 py-1">{{ person?.type}}</span> 
                                                 </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{ person.stock
                                                    }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500 flex items-center justify-start gap-x-3">
                                                    <router-link to="/editproduct" class="bg-blue-50 rounded-full p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                            </svg>
                                                    </router-link>
                                                    <button class="bg-blue-50 rounded-full p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 13 15" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4376 3.011C12.4376 4.30132 11.3916 5.34732 10.1013 5.34732C9.49917 5.34732 8.95027 5.11956 8.53601 4.7455L5.01887 7.09028C5.06847 7.27972 5.09488 7.47864 5.09488 7.68364C5.09488 7.88863 5.06847 8.08755 5.01887 8.27699L8.16807 10.3765C8.58841 9.75835 9.29745 9.35244 10.1013 9.35244C11.3916 9.35244 12.4376 10.3984 12.4376 11.6888C12.4376 12.9791 11.3916 14.0251 10.1013 14.0251C8.81883 14.0251 7.7777 12.9917 7.76509 11.7123L4.3238 9.41812C3.90956 9.7922 3.36065 10.02 2.75856 10.02C1.46824 10.02 0.422241 8.97395 0.422241 7.68364C0.422241 6.39332 1.46824 5.34732 2.75856 5.34732C3.36065 5.34732 3.90956 5.57508 4.3238 5.94913L7.84099 3.60436C7.79139 3.41488 7.76495 3.21603 7.76495 3.011C7.76495 1.72069 8.81096 0.674683 10.1013 0.674683C11.3916 0.674683 12.4376 1.72069 12.4376 3.011ZM10.1013 4.01228C10.6542 4.01228 11.1026 3.56399 11.1026 3.011C11.1026 2.45801 10.6542 2.00972 10.1013 2.00972C9.5483 2.00972 9.09999 2.45801 9.09999 3.011C9.09999 3.56399 9.5483 4.01228 10.1013 4.01228ZM2.75856 8.68492C3.31155 8.68492 3.75984 8.23661 3.75984 7.68364C3.75984 7.13066 3.31155 6.68236 2.75856 6.68236C2.20557 6.68236 1.75728 7.13066 1.75728 7.68364C1.75728 8.23661 2.20557 8.68492 2.75856 8.68492ZM11.1026 11.6888C11.1026 12.2417 10.6542 12.69 10.1013 12.69C9.5483 12.69 9.09999 12.2417 9.09999 11.6888C9.09999 11.1358 9.5483 10.6875 10.1013 10.6875C10.6542 10.6875 11.1026 11.1358 11.1026 11.6888Z" fill="black" fill-opacity="0.5"/>
                                                        </svg>
                                                    </button>
                                                    <button class="bg-red-600 rounded-full p-1 text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>
                                                    </button>
                                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
import SidebarLayout from "../layout/SidebarLayout.vue";
import cardgame from "../assets/CardGame.svg";
import cardorder from "../assets/order-1.svg";
import cardcurrency from "../assets/currency-revenue.svg";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const people = [
    { product: 'High-Quality SEO Content Writing Service ($1 for 1000 words) gTAZGbf', price: '0.005$', conversion: '6%', type: 'Digital service',stock:0 },
    { product: 'High-Quality SEO Content Writing Service ($1 for 1000 words) gTAZGbf', price: '0.005$', conversion: '6%', type: 'software and tools',stock:0 },
    { product: 'High-Quality SEO Content Writing Service ($1 for 1000 words) gTAZGbf', price: '0.005$', conversion: '6%', type: 'data services',stock:0 },
    { product: 'High-Quality SEO Content Writing Service ($1 for 1000 words) gTAZGbf', price: '0.005$', conversion: '6%', type: 'software & tools',stock:0 },
]
</script>