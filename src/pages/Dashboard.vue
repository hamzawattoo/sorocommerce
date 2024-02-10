<template>
    <SidebarLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <p class="heading md:col-span-3">All-Time Stats</p>
            <div v-for="(widget, index) in widgets" :key="index"
                class="bg-white rounded-3xl px-8 pt-4 sm:pt-8 pb-4 sm:pb-14 space-y-6 shadow-sm border border-gray-100">
                <img :src="widget.image" alt="" />
                <p class="text-md sm:text-lg font-semibold">{{ widget.title }}</p>
                <h1 class="text-primary text-3xl sm:text-5xl font-semibold">{{ widget.value }}</h1>
            </div>
            <div class="md:col-span-3">
                <div class="flex flex-col sm:flex-row gap-y-3 sm:items-end sm:justify-between">
                    <p class="heading">Daily Report</p>
                    <select
                        class="palceholder:text-xs bg-white block w-full sm:max-w-[200px] rounded-md border-0 px-3 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm text-gray-400 sm:leading-6"
                        name="" id="">
                        <option selected value="">Weekly</option>
                        <option value="">Monthly</option>
                        <option value="">Yearly</option>
                    </select>
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
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Orders
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Revenue
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Views
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="even:bg-blue-50 even:bg-opacity-80" v-for="person in people" :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-500 sm:pl-6">
                                                    {{ person.date }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm font-normal text-gray-500">{{
                                                    person.orders }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">{{
                                                    person.revenue }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">{{ person.views
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

const widgets = ref([
    {
        image: cardgame,
        title: "Services",
        value: 6,
    },
    {
        image: cardorder,
        title: "Orders",
        value: 12,
    },
    {
        image: cardcurrency,
        title: "Revenue",
        value: '$500',
    },
]);
const people = [
    { date: '25 Nov 2023', orders: '12', revenue: '$212', views: '250' },
    { date: '25 Nov 2023', orders: '12', revenue: '$312', views: '250' },
    { date: '25 Nov 2023', orders: '12', revenue: '$112', views: '250' },
    { date: '25 Nov 2023', orders: '12', revenue: '$512', views: '250' },
]
</script>
