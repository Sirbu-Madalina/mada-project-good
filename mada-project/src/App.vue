<script setup>
import { RouterView } from 'vue-router'
import SiteNavigationView from './components/SiteNavigationView.vue'
import carouselView from './components/carouselView.vue'
import WorksView from './components/WorksView.vue'
import ModalView from './components/ModalView.vue'
import FooterView from './components/FooterView.vue'
</script>


<template>
  <div class="bg-light py-16">
  <SiteNavigationView />
  <RouterView />
  <carouselView />
  <WorksView />
  <ModalView />
  <FooterView />
  </div>
</template>

<style>
</style>
