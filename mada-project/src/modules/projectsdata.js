import { ref } from 'vue';

import image1 from '../assets/img/artane.png';
import image2 from '../assets/img/Trapholt.png';
import image3 from '../assets/img/flyer.png';
import image4 from '../assets/img/video.png';
import image5 from '../assets/img/tv.png';


export default function useModal() {
  const cards = ref([
    {
      id: 'my_modal_1',
      imgSrc: image1,
      title: 'Menu',
      modalTitle: 'Menu Design for San Marino Takeaway',
      modalContent: 'As a graphic designer, I enjoyed creating a series of seasonal menus for San Marino Takeaway, utilizing a warm, autumnal color palette for a fall flyer and a cozy, textured design for a winter trifold menu. Each layout was designed with care to highlight signature dishes and to craft a visual experience that resonates with the brand and draws customers in. ',
      modalIframeSrc: 'https://indd.adobe.com/view/7f7aafcc-2d74-4e75-a494-b60d213811cd',
    },
    {
      id: 'my_modal_2',
      imgSrc: image2,
      title: 'Trapholt',
      modalTitle: 'Trapholt Project',
      modalContent: 'In my first semester of multimedia design studies, our group project involved rebranding the Trapholt museum to appeal to families with children. I led the UX research for our team of four, where we employed surveys and observational studies to capture the interests of our audience, shaping our website and interactive content to be both user-friendly and engaging for all ages. We also thought about creating informative trifolder and eye-catching TV posters to promote the museum family-friendly offerings. I was involved in putting our ides into a final visual-appealing product. Our integrated approach and commitment to design informed by research earned us a top grade of 12, underscoring the success of our collaborative effort and the value of audience-centered design.',
      modalIframeSrc: 'https://indd.adobe.com/view/17b0c158-029d-43be-9155-7833d972b335',
    },
    {
      id: 'my_modal_3',
      imgSrc: image3,
      title: 'Saedding',
      modalTitle: 'Saedding',
      modalContent: 'In our team of three, we collaborated on a project to craft a flyer representing Saedding. Each member brought their unique skills to the table, with my specific role being the creation of illustrations. I focused on designing visually engaging artwork that reflected the Saedding character and values, ensuring the illustrations would harmonize with the overall aesthetic of the flyer and effectively convey the intended message. ',
      modalIframeSrc: 'https://indd.adobe.com/view/87244edc-9900-46de-b2a3-469e5bea84c4',
    },
    {
      id: 'my_modal_4',
      imgSrc: image4,
      title: 'Video',
      modalTitle: 'Video',
      modalContent: 'Creating the video ad for San Marino Takeaway involved a creative process of curating and editing some public YouTube content. I sourced high-quality footage that reflected the same vibrant atmosphere and culinary excellence of San Marino. With careful editing, I stitched together scenes that highlighted the takeaway short process of making the main dish, the burger. Color adjustments and fine-tuning were applied to each clip to create a cohesive and appealing visual story. ',
      modalIframeSrc: 'https://youtu.be/UBb1zzIF9gk',
    },
    {
      id: 'my_modal_5',
      imgSrc: image5,
      title: 'Posters',
      modalTitle: 'Posters',
      modalContent: 'For the San Marino Takeaway spring menu, I designed a dynamic digital display tailored for TV screens. The menu features of crisp ingredients and delicious dishes. Designed with legibility and visual appeal in mind, the layout ensures that even from a distance, customers can easily read the offerings. Engaging images draw the viewer eye, making the menu not only informative but also an enticing visual experience for San Marino clients. ',
      modalIframeSrc: 'https://indd.adobe.com/view/ff67dc20-01a8-4afb-8813-ed4bfe1f889e',
    },
    
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


