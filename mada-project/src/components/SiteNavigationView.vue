<script setup>
import { ref } from 'vue'

// Reactive property to track the visibility of the menu
const isMenuOpen = ref(false)

// Method to toggle menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>


<template>
    <header>
        <nav class="fixed top-0 left-0 z-50 flex justify-between items-center w-full flex-wrap bg-light shadow-sm">
            <div class="flex justify-between items-center w-full md:w-auto">
               
                <!-- It redirects you to the home page when you press the logo -->
               <RouterLink :to ="{ name: 'home'}">
                <div class="flex items-center">
                    <img src="../assets/img/logo.png" alt="logo" class="py-0 md:py-1 px-3 my-1 md:my-3 h-10 md:h-16 w-19 md:w-30">
                </div>
               </RouterLink>


                <!-- Burger icon -->
                <div class="px-4 cursor-pointer md:hidden" id="burger" @click="toggleMenu">
                    <svg class="w-6 h-6" fill="none" stroke="#9B745C" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </div>
            </div>

            <ul :class="{ 'hidden': !isMenuOpen }" class="text-sm w-full md:flex md:items-center md:w-auto md:ml-auto mobile-menu" id="menu">
                <li class="mr-3">
                    <a class="inline-block text-xl hover:border-bg-light rounded hover:border-medium text-dark hover:bg-medium hover:text-white py-1 px-3 my-3" href="#home">Home</a>
                </li>
                <li class="mr-3">
                    <a class="inline-block text-xl hover:border-bg-light rounded hover:border-medium text-dark hover:bg-medium hover:text-white py-1 px-3 my-3" href="#works">Works</a>
                </li>
                <li class="mr-3">
                    <a class="inline-block text-xl hover:border-bg-light rounded hover:border-medium text-dark hover:bg-medium hover:text-white py-1 px-3 my-3" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>



