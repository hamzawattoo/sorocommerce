<template>
    <div class="h-screen">
     <div class="grid lg:grid-cols-2 sm:gap-10 md:py-8 px-4 md:px-10">
       <div class="">
         <img :src="Logo" alt="" />
       <div class="flex flex-col items-center lg:items-end justify-center mt-12 lg:mt-24">
         <div class="max-w-lg flex flex-col items-center justify-center">
           <div class="flex flex-col items-center gap-3">
           <span class="text-3xl lg:text-5xl	font-bold">Register</span>
           <span class="font-semibold text-base">Or <a class="text-primary" href="">Login</a> if you already have an
             Account</span>
         </div>
         <form class="space-y-5 md:space-y-7 mt-10" action="">
           <div class="relative">
             <label for="name"
               class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Email</label>
             <input type="text" name="name" id="name"
               class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
               placeholder="Jane@gmail.com" />
             <div class="absolute top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                 <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                 <path
                   d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
               </svg>
             </div>
           </div>
           <div class="relative">
             <label for="name"
               class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Username</label>
             <input type="text" name="name" id="name"
               class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
               placeholder="Jane@gmail.com" />
           </div>
           <div class="relative">
             <label for="name"
               class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Password</label>
             <input type="text" name="name" id="name"
               class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
               placeholder="Jane@gmail.com" />
             <div class="absolute top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
               <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
               <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
             </svg>
             </div>
           </div>
           <div class="relative">
             <label for="name"
               class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-600">Repeat
               Password</label>
             <input type="text" name="name" id="name"
               class="bg-white block w-full rounded-md border-0 px-3 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
               placeholder="Jane@gmail.com" />
             <div class="absolute top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
               <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
               <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
             </svg>
             </div>
           </div>
           <div class="relative flex items-start">
             <div class="flex h-6 items-center">
               <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                 class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary">
             </div>
           <div class="ml-3 text-sm leading-6">
             <label for="comments" class="font-medium text-gray-900 text-xs">By registering, you agree to our </label>
             <span id="comments-description" class="text-primary font-semibold"><a href="">Terms of Service and Privacy Policy.</a></span>
           </div>
         </div>
         <div class="">
         <button class="text-white font-semibold text-base bg-gradient-to-r from-secondaryblue to-secondarypink py-3.5 w-full rounded-md">Create Account</button></div>
       </form>
         </div>
     </div>
         
     </div>
     <div class="hidden lg:flex justify-end">
       <img class="rounded-3xl" :src="loginBanner" alt="" />
     </div>
   </div></div>
   </template>
   
   <script setup>
   import Logo from "../assets/Logo.png";
   import loginBanner from "../assets/loginbanner.png";
   </script>
   