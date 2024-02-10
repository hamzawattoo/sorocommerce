<template>
    <SidebarLayout>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-3">
                <div class="flex flex-row gap-y-3 items-center justify-between">
                    <p class="heading">Queries</p>
                    <div class="">
                        <button @click="open = true"
                            class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3 w-full rounded-xl flex items-center justify-center sm:justify-start gap-x-3 px-5">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            Create a Query</button>
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

        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-50" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-14">
                                <button @click="open = false" class="absolute top-3 right-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>    
                                <div class="space-y-6">
                                    <h1 class="heading !text-4xl text-center">
                                        Create a Query
                                    </h1>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Subject</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            placeholder="Write subject" />
                                    </div>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Email</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-xs sm:leading-6"
                                            placeholder="Write email" />
                                    </div>
                                    <div class="relative">
                                        <label for="name"
                                            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-500">Message</label>
                                        <textarea type="text" name="name" id="name"
                                            class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            placeholder="Write a message"></textarea>
                                    </div>
                                    <div class="col-span-full">
                                        <label for="cover-photo"
                                            class="block text-sm font-medium leading-6 text-gray-900"></label>
                                        <div
                                            class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label for="file-upload"
                                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file"
                                                            class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="mt-5 sm:mt-6 max-w-[200px]">
                                    <button
                                        class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3.5 w-full rounded-xl">Submit</button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
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