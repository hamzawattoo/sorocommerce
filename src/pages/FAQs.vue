<template>
    <LandingNav />
    <div class=" max-w-3xl mr-auto sm:mx-auto px-12 text-center my-5 md:my-20 px-6 md:px-6 lg:px-10">
                <div class="h-1 bg-gradient-to-r from-secondaryblue to-secondarypink w-24 my-3 mx-auto "></div>
                <h1 class="text-3xl md:text-5xl font-bold">Frequent questions</h1>
                <p class="text-gray-500 text-lg font-medium">It is a long established fact that a reader will be distracted</p>
            </div>
    <div class="faq-section space-y-3 md:space-y-5 px-6">
      <div class=" bg-white rounded-xl px-4 md:px-10 py-5 max-w-7xl mx-auto shadow-sm" v-for="(question, index) in faqList" :key="index">
        <button @click="toggleFAQ(index)" class="w-full text-left  py-2 focus:outline-none">
          <div class="flex justify-between items-center">
            <span class="text-lg font-medium text-gray-800">{{ question.question }}</span>
            <div class="min-w-[30px]">
                <span class="material-icons" :class="{ 'rotate-45': activeIndex === index }"><img class="w-8 h-8" :src="Plus" alt=""></span>
            </div>
          </div>
        </button>
        <transition name="fade">
          <div v-if="activeIndex === index" class="mt-2 text-gray-500">
            <p>{{ question.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
    <section
            class="max-w-7xl mx-auto bg-gradient-to-r from-secondaryblue to-secondarypink rounded-lg text-white py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 mt-20">
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
    <div class="bg-white md:rounded-t-[200px] mt-20 px-6">
        <LandingFooter />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import LandingNav from '../components/LandingNav.vue';
import LandingFooter from '../components/landingFooter.vue';
import Logo from '../assets/Logo.png';

import Plus from '../assets/Group 34.png';
  const faqList = ref([
    { question: 'What is Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How does Soroban Blockchain benefit Sorocommerce?', answer: 'You can install Tailwind CSS via npm or yarn and then configure it in your project.' },
    { question: 'What are the benefits of using Sorocommerce for freelancers?', answer: 'Vue 3 is the latest version of the Vue.js framework, offering improved performance and new features.' },
    { question: 'What is Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },

    { question: 'What are the benefits of using Sorocommerce for clients?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How can i get started with Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How can i get started with Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'What is Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How does Soroban Blockchain benefit Sorocommerce?', answer: 'You can install Tailwind CSS via npm or yarn and then configure it in your project.' },
    { question: 'What are the benefits of using Sorocommerce for freelancers?', answer: 'Vue 3 is the latest version of the Vue.js framework, offering improved performance and new features.' },
    { question: 'What is Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },

    { question: 'What are the benefits of using Sorocommerce for clients?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How can i get started with Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'How can i get started with Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },
    { question: 'What is Sorocommerce?', answer: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs.' },

  ]);
  
  const activeIndex = ref(-1);
  
  const toggleFAQ = (index) => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  