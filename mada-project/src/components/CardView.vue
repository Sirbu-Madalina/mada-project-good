<template>
  <section class="my-5 mx-2 md:my-3 md:mx-32 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="project in projects" :key="project.id" class="bg-skills rounded-lg shadow-md p-3 mx-3 my-3 flex flex-col items-center">
      <img :src="project.image" class="rounded-lg" alt="" />
      <div class="p-1">
        <h5 class="text-center text-2xl font-hind font-bold tracking-tight text-dark my-2 md:my-4">{{ project.title }}</h5>
        <button @click="openModal(project)" class="border border-dark rounded-lg shadow inline-block text-sm md:text-sm font-lora font-semibold hover:border-bg-light hover:border-medium text-dark hover:bg-medium hover:text-white py-2 md:py-3 px-7 md:px-7 my-2 md:my-1">See more...</button>
      </div>
    </div>
  </section>

  <!-- Single modal for selected project -->
  <dialog v-if="showModal" class="modal bg-skills rounded-lg">
    <div class="modal-box">
      <form method="dialog">
        <button type="button" @click="closeModal" class="btn btn-sm btn-circle btn-ghost absolute bg-dark py-2 px-4 rounded-full right-2 top-2 text-light">✕</button>
      </form>
      <h3 class="text-center text-2xl font-hind font-bold tracking-tight text-dark my-3 p-1 md:p-3">{{ selectedProject.title }}</h3>
      <hr class="w-48 md:w-64 h-0.5 mx-auto my-5 md:mt-0 bg-dark border-0 rounded" />
      <p class="text-dark text-sm md:text-xl text-center md:text-left leading-7 md:leading-10 my-5 mx-1 md:my-1 md:m-14" v-html="selectedProject.description"></p>
      <iframe :src="selectedProject.iframe" class="mb-10 w-full h-[50vh] md:h-[50vh] lg:h-[80vh]"></iframe>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        // project data
        {
            id: 1,
            title: 'Menu',
            image: '../src/assets/img/artane.png',
            description:
              'As a graphic designer, I enjoyed creating a series of seasonal menus for <span class="font-semibold">San Marino Takeaway</span>, utilizing a warm, autumnal color palette for a <span class="font-semibold">fall flyer</span> and a cozy, textured design for a <span class="font-semibold">winter trifold menu</span>. Each layout was designed with care to highlight signature dishes and to craft a visual experience that resonates with the brand and draws customers in.',
            iframe: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
          },
          {
            id: 2,
            title: 'Trapholt',
            image: '../src/assets/img/Trapholt.png',
            description:
              'In my first semester of multimedia design studies, our group project involved rebranding the Trapholt museum to appeal to families with children. I led the UX research for our team of four, where we employed surveys and observational studies to capture the interests of our audience, shaping our website and interactive content to be both user-friendly and engaging for all ages. <br class="text-dark text-sm md:text-xl text-center md:text-left leading-7 md:leading-10 my-5 mx-1 md:my-1 md:m-14"> We also thought about creating informative trifolder and eye-catching TV posters to promote the museum\'s family-friendly offerings. I was involved in putting our ides into a final visual-appealing product. Our integrated approach and commitment to design informed by research earned us a top grade of 12, underscoring the success of our collaborative effort and the value of audience-centered design.',
            iframe: 'https://indd.adobe.com/view/17b0c158-029d-43be-9155-7833d972b335',
          },
          {
            id: 3,
            title: 'Saedding',
            image: '../src/assets/img/flyer.png',
            description:
              'In our team of three, we collaborated on a project to craft <span class="font-semibold">a flyer representing Saedding.</span> Each member brought their unique skills to the table, with my specific role being the creation of illustrations. I focused on designing visually engaging artwork that reflected Saedding\'s character and values, ensuring the illustrations would harmonize with the overall aesthetic of the flyer and effectively convey the intended message.',
            iframe: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
          },
          {
            id: 4,
            title: 'Videos',
            image: '../src/assets/img/video.png',
            description:
              'Creating the video ad for San Marino Takeaway involved a <span class="font-semibold">creative process of curating and editing</span>some public YouTube content. I sourced high-quality footage that reflected the same vibrant atmosphere and culinary excellence of San Marino. With careful editing, I stitched together scenes that highlighted the takeaway\'s short process of making the main dish, the burger.<span class="font-semibold"> Color adjustments and fine-tuning</span> were applied to each clip to create a cohesive and appealing visual story. ',
            iframe: 'https://youtu.be/UBb1zzIF9gk',
          },
          {
            id: 5,
            title: 'Posters',
            image: '../src/assets/img/tv.png',
            description:
              'For the <span class="font-semibold">San Marino Takeaway\'s spring menu,</span> I designed a dynamic digital display tailored for TV screens. The menu features <span class="font-semibold">vibrant imagery</span> of crisp ingredients and delicious dishes. Designed with legibility and visual appeal in mind, the layout ensures that even from a distance, <span class="font-semibold">customers can easily read the offerings.</span> Engaging images draw the viewer\'s eye, making the menu not only informative but also an enticing visual experience for San Marino\'s clients.',
            iframe: 'https://indd.adobe.com/view/aeffc1cb-3cfd-4e84-91cf-ad5bfff7610d',
          },
      ],
      showModal: false,
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProject = null;
    },
  },
};
</script>
