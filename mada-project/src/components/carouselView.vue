<template>
    <div class="carousel-container my-5 mx-2 md:my-20 md:mx-20">
      
      <!-- Carousel Slide -->
      <div v-for="(skillSet, index) in skillSets" :key="index" class="carousel-slide" :class="{ 'active': currentIndex === index }">
        
        <!-- Section Title -->
        <div class="section-title flex justify-center md:justify-start">
          <span class="title text-4xl font-lora font-bold text-dark mt-12 mx-2 md:my-10 md:mx-14">{{ skillSet.title }}</span>
        </div>
        <hr class="divider w-48 md:w-64 h-0.5 mx-auto mb-10 mt-10 md:mt-0 md:mx-14 bg-dark border-0 rounded">
        
        <!-- Skills Section -->
        <div class="flex flex-col md:flex-row">
          
          <!-- Text Block -->
          <div class="text-block md:w-1/2 flex items-center">
            <p class="description text-dark text-sm md:text-2xl text-center md:text-left leading-7 md:leading-10 my-5 mx-1 md:my-1 md:m-14">{{ skillSet.description }}</p>        
          </div>
          
          <!-- Icons Block -->
          <div class="icons-block md:w-1/2 flex flex-wrap justify-center items-center">
            <div v-for="skill in skillSet.skills" :key="skill.name" class="skill-icon bg-skills rounded-lg shadow-md p-3 mx-3 my-3 flex flex-col items-center">
              <img :src="skill.image" :alt="skill.name + ' logo'" class="icon-image w-10 h-10 md:w-24 md:h-24 my-2"/>
              <div class="skill-name mb-1 text-sm md:text-xl font-hind text-dark">{{ skill.name }}</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Carousel Controls -->
      <div class="carousel-controls">
        <button class="prev-button" @click="prev">Previous</button>
        <button class="next-button" @click="next">Next</button>
      </div>
      
    </div>  
</template>

<script>
import image1 from '../assets/img/indesign.png';
import image2 from '../assets/img/photoshop.png';
import image3 from '../assets/img/ilustrator.png';
import image4 from '../assets/img/aftereffects.png';
import image5 from '../assets/img/figma.png';
import image6 from '../assets/img/premiere.png';

import image7 from '../assets/img/html&css.png';
import image8 from '../assets/img/JavaScript.png';
import image9 from '../assets/img/vue.png';
import image10 from '../assets/img/git.png';
import image11 from '../assets/img/WordPress.png';

  export default {
    data() {
      return {
        currentIndex: 0,
        skillSets: [
          {
            title: 'My Skills',
            description: 'During my Multimedia studies, I gained valuable experience using the Adobe Creative Suite. I applied these skills to various projects, both within the academic environment and for external clients, showcasing my ability to translate creative concepts into visually appealing deliverables.',
            skills: [
              { name: 'InDesign',  image: image1 },
              { name: 'Photoshop', image: image2 },
                { name: 'Ilustrator', image: image3 },
                { name: 'After Effects', image: image4 },
                { name: 'Figma', image: image5 },
                { name: 'Premiere Pro', image: image6 },
            ],
          },
          {
            title: 'My Skills',
            description: 'While I love the artistic side of design, my primary focus is on enhancing my coding skills, where I see challenges as puzzles waiting to be solved.',
            skills: [
                { name: 'HTML&CSS', image: image7 },
                { name: 'JavaScript', image: image8 },
                { name: 'Vue.js', image: image9 },
                { name: 'Git', image: image10 },
                { name: 'Wordpress', image: image11 }
                
            ],
          },
        ],
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.skillSets.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.skillSets.length) % this.skillSets.length;
      },
    },
  };
  </script>

<style scoped>
.carousel-container {
  position: relative;
}

.carousel-slide {
  transition: opacity 0.5s;
  display: none;
}

.carousel-slide.active {
  opacity: 1;
  display: block;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.prev-button, .next-button {
  border: 1px solid #9B745C;  
  padding: 0.7rem 2rem;
  background-color: #FFFCF6;
  color: #9B745C;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: Lora;
  font-size: 20px;
  border-radius: 10px;
  margin: 30px;
}

.prev-button:hover, .next-button:hover {
  background-color: #9B745C;
  color: #FFFCF6;
}

@media screen and (max-width: 600px) {
  .prev-button, .next-button {
  border: 1.5px solid #9B745C;  
  padding: 0.5rem 1.5rem;
  background-color: #FFFCF6;
  color: #9B745C;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: Lora;
  font-size: 14px;
  border-radius: 10px;
  margin: 20px;
  } 
}


</style>
