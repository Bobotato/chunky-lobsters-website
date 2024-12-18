<script setup lang="ts">
import HomeCarousel from '@/components/home/HomeCarousel.vue'
import { CarouselData } from '@/data/CarouselData'
</script>

<template>
  <main class="max-w-[980px] bg-dark-bg flex flex-col items-center justify-center overflow-hidden">
    <HomeCarousel :carousel-data="CarouselData" />
    <section
      class="home-1 flex flex-col items-center justify-center gap-6 bg-monogram bg-cover p-24"
    >
      <div class="cls-logo flex items-center justify-center w-2/3">
        <img src="/img/CLS-logo-fullwhite.png" class="object-contain" />
      </div>

      <div class="text flex flex-col gap-8 mx-12 items-center justify-center">
        <div class="flex flex-col text-9xl font-bold text-center text-white font-mocha-rounded">
          <div class="mt-[-20px]">NEW YEAR</div>
          <div class="mt-[-20px]">NEW MENU</div>
        </div>
        <div class="text-center text-white text-xl">
          All new lobster rolls, new mains, new food. A brand new taste of the ocean for a brand new
          year.
        </div>
      </div>

      <button class="bg-white rounded p-2 px-6 mt-10">
        <div class="text-bg-red text-xl">
          <RouterLink to="/menu" class="hover:text-bg-red">Have A Look ></RouterLink>
        </div>
      </button>
    </section>

    <section
      class="home-2 w-full flex flex-col items-end justify-center gap-12 bg-[url('/backgrounds/bg-1.jpg')] h-[700px] bg-cover lg:px-12 lg:py-24"
    >
      <div class="text flex flex-col gap-8 items-end justify-start w-1/2">
        <div class="text-9xl font-bold text-right text-white font-mocha-rounded leading-[7rem]">
          HAVE IT DELIVERED
        </div>
        <div class="text-white text-right text-xl">
          Enjoy free delivery islandwide for orders over $150.
        </div>
      </div>

      <button class="bg-bg-red rounded p-2 px-6">
        <div class="text-white text-xl">
          <RouterLink to="/delivery">Order Now ></RouterLink>
        </div>
      </button>
    </section>

    <section
      class="home-3 w-full flex flex-col items-start justify-center gap-12 bg-[url('/backgrounds/bg-2.jpg')] h-[700px] bg-cover lg:px-12 lg:py-24"
    >
      <div class="text flex flex-col gap-8 items-start justify-start w-1/2">
        <div class="text-9xl font-bold text-left text-bg-dark font-mocha-rounded leading-[7rem]">
          UNIQUELY SINGAPOREAN
        </div>
        <div class="text-bg-dark text-left text-xl">
          Uniquely Singaporean flavours made by none other than unique Singaporeans.
        </div>
      </div>

      <button class="bg-bg-dark rounded p-2 px-6">
        <div class="text-white text-xl">
          <RouterLink to="/about">About Us ></RouterLink>
        </div>
      </button>
    </section>
  </main>
</template>
