<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '@/components/common/NavBar/NavBar.vue'
import Footer from '@/components/common/Footer/Footer.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <NavBar class="z-0"></NavBar>
    <div class="overlay fixed left-0 top-0 bg-bg-dark w-full h-screen z-[-99] bg-opacity-60"></div>
    <video
      muted
      loop
      autoplay
      class="fixed left-0 top-0 z-[-100] h-auto w-auto min-w-full min-h-screen object-cover"
    >
      <source src="/backgrounds/bg-vid.mp4" type="video/mp4" />
    </video>
    <RouterView class="z-0" />
    <Footer></Footer>
  </div>
</template>
