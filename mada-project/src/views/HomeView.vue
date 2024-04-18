<script setup>
import { ref } from 'vue'

// Create a reactive reference for the modal visibility
const isModalVisible = ref(false)

// Method to open the modal
const openModal = () => {
  isModalVisible.value = true
}

// Method to close the modal
const closeModal = () => {
  isModalVisible.value = false
}

// Method to handle background click
// This can be used if you want to close the modal when the overlay is clicked
const onBackgroundClick = (event) => {
  if (event.target.id === 'modal-overlay') {
    closeModal()
  }
}
</script>


<template>
  <main id="home" class="pt-10 md:pt-24">
    <section class="mx-2 md:my-20 md:mx-36 flex flex-wrap items-center justify-evenly md:justify-between" >
      <div class="flex w[80%] flex-col justify-center items-center md:items-start">
        <p class="text-dark text-xl md:text-4xl leading-relaxed md:leading-relaxed ">I'm <span class="font-lora text-3xl text-center md:text-start md:text-6xl mx:3 md:mx-4">Madalina Sirbu</span><br> Mutimedia Design student at <br>Business Academy SouthWest. </p>
        
        <!-- Button to open the modal -->
          <button id="downloadBtn" @click="openModal" class="border border-dark rounded-lg shadow inline-block text-sm md:text-xl font-lora font-semibold hover:border-bg-light hover:border-medium text-dark hover:bg-medium hover:text-white py-2 md:py-3 px-7 md:px-16 my-5 md:my-10">Download CV</button>
        <!-- Modal overlay -->
        <div v-if="isModalVisible" id="modal-overlay" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity"
          @click="onBackgroundClick">
          <div class="bg-white rounded-lg w-1/2"
            @click.stop>
            <!-- Close button -->
            <button @click="closeModal" class="float-right pt-2 pr-2 text-2xl"> &times; <!-- This represents a cross (×) character -->
            </button>
            <!-- Iframe content -->
            <iframe class="w-full h-96" src="../src/assets/img/CV - English .pdf"></iframe>
          </div>
        </div>      
      </div>
      <div class="flex w[20%] justify-center items-center ">
        <img src="../assets/img/mada.png" alt="Personal Photo" class="rounded-full h-100 w-32 md:h-120 md:w-96">        
      </div>  
    </section>

    <!-- About page -->
    <section class="my-5 mx-2 md:my-20 md:mx-20">
      <div class="flex justify-center md:justify-start">
        <span class="text-4xl font-lora font-bold text-dark mt-7 mx-2 md:my-10 md:mx-14"> About</span>
      </div>
        <hr class="w-48 md:w-64 h-0.5 mx-auto mb-10 mt-10 md:mt-0 md:mx-14 bg-dark border-0 rounded">
        <p class="text-dark text-sm md:text-2xl text-center md:text-left leading-7 md:leading-10 my-5 mx-1 md:my-1 md:m-14">I’m from Republic of Moldova, currently a student at Business Academy SouthWest in Denmark. I am deeply passionate crafting visually appealing graphics and developing user-friendly websites. <br> My interest in this field was ignited in the moment I started to work as a content creator and grafic designer for a fast food takeaway. There, I was responsible for content creation, image editing, video production, and seasonal menu and trifold design.</p>
      <div class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        
        <!-- CV Download -->
        <!-- Button to open the modal -->
        <button id="downloadBtn" @click="openModal" class="border border-dark rounded-lg shadow inline-block text-sm md:text-xl font-lora font-semibold hover:border-bg-light hover:border-medium text-dark hover:bg-medium hover:text-white py-2 md:py-3 px-7 md:px-16 my-2 md:my-10 mx-14">Download CV</button>
        <!-- Modal overlay -->
        <div v-if="isModalVisible" id="modal-overlay" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity"
          @click="onBackgroundClick">
          <div class="bg-white rounded-lg w-1/2"
            @click.stop>
            <!-- Close button -->
            <button @click="closeModal" class="float-right pt-2 pr-2 text-2xl"> &times; <!-- This represents a cross (×) character -->
            </button>
            <!-- Iframe content -->
            <iframe class="w-full h-96" id="myiframe" src="../src/assets/img/CV - English .pdf"></iframe>
          </div>
        </div>

        <!-- Video CV -->
        <form action="https://youtu.be/-r7FmKfCzm8?si=Ljp0MEnnbp-UaSfp">
         <button type="submit" class="border border-dark rounded-lg shadow inline-block text-sm md:text-xl font-lora font-semibold hover:border-bg-light hover:border-medium text-dark hover:bg-medium hover:text-white py-2 md:py-3 px-7 md:px-16 my-2 md:my-10 mx-14">Video CV</button>
        </form>

      </div> 
    </section>
   
  </main>
</template>



