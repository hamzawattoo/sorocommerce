<template>
    <SidebarLayout>
        <div class="">
            <h1 class="heading">Notifications</h1>
            <div
                class="bg-white rounded-xl px-8 py-6 space-y-6 shadow-sm border border-gray-100 mt-6">
                <div v-for="(notification, index) in notifications" :key="index"
                class="flex items-center justify-between gap-5 border-b pb-3">
                    <img :src="notificationLogo" alt="">
                    <div class="flex-1 flex flex-col gap-1">
                        <p class="font-semibold text-base text-gray-900">New Order</p>
                        <span class="text-gray-400 text-md">{{ notification.title }}</span>
                    </div>
                    <div class="text-gray-400 text-sm font-medium flex items-center gap-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M9.06403 4.65464V8.68164L11.0775 7.47354M16.3126 8.68164C16.3126 12.685 13.0673 15.9302 9.06403 15.9302C5.06074 15.9302 1.81543 12.685 1.81543 8.68164C1.81543 4.67835 5.06074 1.43304 9.06403 1.43304C13.0673 1.43304 16.3126 4.67835 16.3126 8.68164Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                  
                          </span>
                        <span>
                           {{ notification.time }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </SidebarLayout>
</template>
<script setup>
import notificationLogo from '../assets/Notification.png';
import SidebarLayout from "../layout/SidebarLayout.vue";

const notifications = [
    {
        title: 'You have received 2 news orders on your wordpress plugin product',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have received 2 news orders on your wordpress plugin product',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have received 2 news orders on your wordpress plugin product',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    },
    {
        title: 'You have a new order',
        time: '6/12/2023    2:00 PM'
    }
]
</script>