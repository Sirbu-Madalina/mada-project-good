import { ref } from 'vue';

export default function useModal() {
  const cards = ref([
    {
      id: 'my_modal_1',
      imgSrc: '../src/assets/img/artane.png',
      title: 'Menu',
      modalTitle: 'Menu Design for San Marino Takeaway',
      modalContent: 'As a graphic designer, I enjoyed creating a series of seasonal menus for San Marino Takeaway, utilizing a warm, autumnal color palette for a fall flyer and a cozy, textured design for a winter trifold menu. Each layout was designed with care to highlight signature dishes and to craft a visual experience that resonates with the brand and draws customers in. ',
      modalIframeSrc: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
    },
    {
      id: 'my_modal_2',
      imgSrc: '../src/assets/img/trapholt.png',
      title: 'Trapholt',
      modalTitle: 'Trapholt',
      modalContent: 'In my first semester of multimedia design studies, our group project involved rebranding the Trapholt museum to appeal to families with children. I led the UX research for our team of four, where we employed surveys and observational studies to capture the interests of our audience, shaping our website and interactive content to be both user-friendly and engaging for all ages. We also thought about creating informative trifolder and eye-catching TV posters to promote the museum family-friendly offerings. I was involved in putting our ides into a final visual-appealing product. Our integrated approach and commitment to design informed by research earned us a top grade of 12, underscoring the success of our collaborative effort and the value of audience-centered design.',
      modalIframeSrc: 'https://indd.adobe.com/view/17b0c158-029d-43be-9155-7833d972b335',
    },
    {
      id: 'my_modal_4',
      imgSrc: '../src/assets/img/video.png',
      title: 'Video',
      modalTitle: 'Video',
      modalContent: 'Creating the video ad for San Marino Takeaway involved a creative process of curating and editing some public YouTube content. I sourced high-quality footage that reflected the same vibrant atmosphere and culinary excellence of San Marino. With careful editing, I stitched together scenes that highlighted the takeaway short process of making the main dish, the burger. Color adjustments and fine-tuning were applied to each clip to create a cohesive and appealing visual story. ',
      modalIframeSrc: 'https://youtu.be/UBb1zzIF9gk',
    },
    {
      id: 'my_modal_5',
      imgSrc: '../src/assets/img/tv.png',
      title: 'Posters',
      modalTitle: 'Posters',
      modalContent: 'For the San Marino Takeaway spring menu, I designed a dynamic digital display tailored for TV screens. The menu features of crisp ingredients and delicious dishes. Designed with legibility and visual appeal in mind, the layout ensures that even from a distance, customers can easily read the offerings. Engaging images draw the viewer eye, making the menu not only informative but also an enticing visual experience for San Marino clients. ',
      modalIframeSrc: 'https://indd.adobe.com/view/ff67dc20-01a8-4afb-8813-ed4bfe1f889e',
    },
    // Add other card objects here
  ]);



  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.close();
  }

  return {
    cards,
    showModal,
    closeModal
  };
}


// export default {
//     data() {
//       return {
//         cards: [
//           {
//             id: 'my_modal_1',
//             imgSrc: '../assets/img/artane.png',
//             title: 'Menu',
//             modalTitle: 'Menu Design for San Marino Takeaway',
//             modalContent: 'As a graphic designer, I enjoyed creating a series ... ',
//             modalIframeSrc: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
//           },
//           {
//             id: 'my_modal_2',
//             imgSrc: '../assets/img/Trapholt.png',
//             title: 'Trapholt',
//             modalTitle: 'Trapholt',
//             modalContent: 'In my first semester of multimedia design studies, ... ',
//             modalIframeSrc: 'https://indd.adobe.com/view/17b0c158-029d-43be-9155-7833d972b335',
//           },
//             {
//                 id: 'my_modal_3',
//                 imgSrc: '../assets/img/video.png',
//                 title: 'Video',
//                 modalTitle: 'Video',
//                 modalContent: 'As a graphic designer, I enjoyed creating a series ... ',
//                 modalIframeSrc: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
//             },
//             {
//                 id: 'my_modal_4',
//                 imgSrc: '../assets/img/tv.png',
//                 title: 'Posters',
//                 modalTitle: 'Posters',
//                 modalContent: 'In my first semester of multimedia design studies, ... ',
//                 modalIframeSrc: 'https://indd.adobe.com/view/17b0c158-029d-43be-9155-7833d972b335',
//             },
//             {
//                 id: 'my_modal_5',
//                 imgSrc: '../assets/img/Artane.png',
//                 title: 'Artane',
//                 modalTitle: 'Artane',
//                 modalContent: 'As a graphic designer, I enjoyed creating a series ... ',
//                 modalIframeSrc: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
//             },
//         ],
//       };
//     },
//     methods: {
//       showModal(modalId) {
//         const modal = this.\$refs[modalId];
//         if (modal) modal.showModal();
//       },
//       closeModal(modalId) {
//         const modal = this.\$refs[modalId];
//         if (modal) modal.close();
//       },
//     },
//   };
  