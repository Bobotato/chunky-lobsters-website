<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<template>
  <main class="about flex flex-col lg:w-[980px]">
    <section class="flex flex-col">
      <Header header="Our Menus"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <div class="flex items-center justify-center lg:w-[400px]">
          <img :src="'/img/CLS-logo-fullcolour.png'" class="object-cover" />
        </div>
          <p>View our menu by pressing on these menus!</p>
        </div>
      </div>
    </section>
  </main>
</template>
