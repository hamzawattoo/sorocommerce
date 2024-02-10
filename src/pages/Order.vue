
<template>
    <SidebarLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-3">
                <div class="flex flex-row gap-y-3 items-center justify-between">
                    <p class="heading">Orders</p>
                    <form class="relative flex" action="#" method="GET">
                            <label for="search-field" class="sr-only">Search</label>

                            <div class="flex items-center w-full max-w-xs relative">
                                <input id="search-field"
                                    class="relative block bg-white shadow-md py-3  h-auto w-full border-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm rounded-md"
                                    placeholder="Search..." type="search" name="search" />
                                <span class="absolute  right-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300"
                                        viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M10.115 10.0941L13 13M11.6667 6.33333C11.6667 9.27887 9.27887 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27887 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27887 1 11.6667 3.38781 11.6667 6.33333Z"
                                            stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>

                        </form>
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
                                                    Date</th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                                                    Order Number
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                                                    Email
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Country
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Service
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="even:bg-blue-50 even:bg-opacity-80" v-for="person in people"
                                                :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-500 sm:pl-6">
                                                    {{ person.date }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm font-normal text-gray-500">{{
                                                    person.orderNumber }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{person.email }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500 ">
                                                    {{ person?.country}}
                                                 </td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{ person.service
                                                    }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{ person.amount
                                                    }}</td>
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
   {
    date: "2021-10-10",
    orderNumber: "123456",
    email: "jonh4322@gmail.com",
    country: "Australia",
    service: "High-Quality SEO",
    amount: "$100"
   },
   {
    date: "2021-10-10",
    orderNumber: "123456",
    email: "jonh4322@gmail.com",
    country: "Australia",
    service: "High-Quality SEO",
    amount: "$100"
   },
   {
    date: "2021-10-10",
    orderNumber: "123456",
    email: "jonh4322@gmail.com",
    country: "Australia",
    service: "High-Quality SEO",
    amount: "$100"
   },
   {
    date: "2021-10-10",
    orderNumber: "123456",
    email: "jonh4322@gmail.com",
    country: "Australia",
    service: "High-Quality SEO",
    amount: "$100"
   },
   {
    date: "2021-10-10",
    orderNumber: "123456",
    email: "jonh4322@gmail.com",
    country: "Australia",
    service: "High-Quality SEO",
    amount: "$100"
   }


]
</script>
