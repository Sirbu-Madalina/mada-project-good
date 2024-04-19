<template>
  <div>
    <section class="my-5 mx-2 md:my-3 md:mx-32 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="card in cards" :key="card.id" class="bg-skills rounded-lg shadow-md p-3 mx-3 my-3 flex flex-col items-center">
        <img :src="card.imgSrc" alt="Card Image" @click="showModal(card.id)">
        <div class="p-1">
          <h5 class="text-center text-2xl font-hind font-bold tracking-tight text-dark my-2 md:my-4">{{ card.title }}</h5>
          <button class="btn border border-dark rounded-lg shadow inline-block text-sm md:text-sm font-lora font-semibold hover:border-bg-light hover:border-medium text-dark hover:bg-medium hover:text-white py-2 md:py-3 px-7 md:px-7 my-2 md:my-1" @click="showModal(card.id)">See more..</button>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <dialog v-for="card in cards" :key="card.id" :id="card.id" class="modal bg-skills rounded-lg">
      <h3 class="text-center text-2xl font-hind font-bold tracking-tight text-dark my-3 p-1 md:p-3">{{ card.modalTitle }}</h3>
      <hr class="w-48 md:w-64 h-0.5 mx-auto my-5 md:mt-0  bg-dark border-0 rounded">
      <p class="text-dark text-sm md:text-xl text-center md:text-left leading-7 md:leading-10 my-5 mx-1 md:my-1 md:m-14">{{ card.modalContent }}</p>
      
      <iframe :src="card.modalIframeSrc" title="YouTube video player"  frameborder="0" class="mb-10 w-full h-[50vh] md:h-[50vh] lg:h-[80vh]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <!-- <iframe src="https://www.youtube.com/embed/UBb1zzIF9gk?si=ebrkrbJq_7LLc1mZ"></iframe>
       --><button @click="closeModal(card.id)" class="btn btn-sm btn-circle btn-ghost absolute bg-dark py-2 px-4 rounded-full right-2 top-2 text-light">Close</button>
    </dialog>
  </div>
</template>

<script>
import useModal from '../modules/projectsdata';

export default {
  setup() {
    const { cards, showModal, closeModal } = useModal();

    return {
      cards,
      showModal,
      closeModal
    };
  }
};
</script>


