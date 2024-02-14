<template>
    <SidebarLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-3">
                <div class="flex flex-row gap-y-3 items-center justify-between">
                    <p class="heading">Queries</p>
                    
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
                                                    Email</th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Date
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                                                    Title
                                                </th>
                                                <th scope="col"
                                                    class="px-3 py-3.5 text-left text-md font-semibold text-gray-900">Status
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr class="even:bg-blue-50 even:bg-opacity-80" v-for="person in people"
                                                :key="person.email">
                                                <td
                                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-normal text-gray-500 sm:pl-6">
                                                    {{ person.email }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm font-normal text-gray-500">{{
                                                    person.date }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500">
                                                    {{ person.title }}</td>
                                                <td class="whitespace-nowrap px-3 py-4 text-sm  font-normal text-gray-500 ">
                                                    <span class="bg-blue-50 rounded-full px-4 py-1">{{
                                                        person?.status }}</span>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
const open = ref(false)

const people = [
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
    { email: "jonh4321@gmail.com", date: "12 Nov 2021", title: "Discount", status: "Open" },
]
</script>