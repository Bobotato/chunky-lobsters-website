<script setup lang="ts">
import Header from '@/components/common/Header.vue'

import { FAQData } from '@/data/FAQData'
</script>

<template>
  <main class="about flex flex-col lg:w-[980px]">
    <section class="flex flex-col">
      <Header header="About Chunky Lobsters"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-12 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex items-center justify-center lg:w-[400px]">
          <img :src="'/img/CL-logo-old-whitetext.png'" class="object-contain" />
        </div>
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <p>
            Chunky Lobsters Signature is here to bring you a fresh taste of mouthwatering local and
            international seafood flavours.
          </p>
          <p>
            Inspired by the lobster shacks of the New England, enjoy lobster rolls, seafood pasta
            and giant seafood platters served straight to your table from sustainable fisheries
            across the globe.
          </p>
          <p>
            From the creamy Mala 'Red Monster' Lobster Roll, to the chilly Truffle Capellini,
            there's always a flavour made just for you.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-bg-dark">
      <Header header="How It All Began"></Header>
      <div class="about-image w-[980px] overflow-hidden">
        <img src="/img/about/photos/oxley.jpg" class="object-cover h-full" />
        <p class="text-right text-white px-8 pt-4">Chunky Lobsters Oxley, 2018</p>
      </div>
      <div class="flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70">
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <p>
            The idea for Chunky Lobsters came about when our founders dined at a lobster shack on a
            business trip overseas and realised that there was no equivalent back home in Singapore.
            Wanting to share this experience with friends and family back home, the pair began their
            research on bringing it to Singapore.
          </p>
          <p>
            After years and years of planning, Chunky Lobsters started off as a small unit in Oxley
            Tower, where it shot to fame as one of the first affordable "shack" styled Lobster
            joints in Singapore.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-bg-dark">
      <Header header="Where Are We Now"></Header>
      <div class="about-image w-[980px] overflow-hidden">
        <img src="/img/about/photos/OG.jpg" class="object-cover h-full" />
        <p class="text-right text-white px-8 pt-4">
          Chunky Lobsters Signature Orchard Gateway, 2020
        </p>
      </div>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex items-center justify-center lg:w-[400px]">
          <img :src="'/img/CLS-logo-fullcolour.png'" class="object-cover" />
        </div>
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <p>
            Chunky Lobsters has expanded to a dine-in concept, in order to address growing requests
            for a sit-in establishment. Chunky Lobsters Signature now hosts a whole range of seafood
            dishes in addition to our seafood rolls, served hot and fresh straight to your table.
          </p>
          <p>
            We're always looking out for new ideas and concepts that we can expand into. Stay tuned
            to see where the next Chunky Lobsters will pop up near you!
          </p>
        </div>
      </div>
    </section>
    <section>
      <Header header="Frequently Asked"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-16 py-16 px-24 lg:bg-opacity-70"
      >
        <div v-for="faq in FAQData" class="flex flex-col gap-8 text-white text-xl text-left">
          <p class="font-mocha-rounded text-6xl text-white">{{ faq.title }}</p>
          <div v-for="faqItem in faq.items" class="flex flex-col gap-4">
            <p class="font-semibold">Q: {{ faqItem.question }}</p>
            <p v-html="faqItem.answer"></p>
          </div>
        </div>
        <div class="flex flex-col gap-8 text-white text-xl text-left w-full">
          <p class="font-mocha-rounded text-6xl text-white">Any other enquiries</p>
          <p>Hit us up on Instagram or Facebook and we'll get back to you as soon as we can!</p>
        </div>
      </div>
    </section>
  </main>
</template>
