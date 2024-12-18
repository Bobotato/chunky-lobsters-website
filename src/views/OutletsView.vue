<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<template>
  <main class="about flex flex-col lg:w-[980px]">
    <Header header="Our Locations"></Header>
    <div
      class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
    >
      <section class="flex flex-col items-center justify-center gap-12">
        <div class="flex items-center justify-center lg:w-[400px]">
          <img :src="'/img/CLS-logo-fullcolour.png'" class="object-contain" />
        </div>
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <p class="font-mocha-rounded text-4xl text-white">OrchardGateway (Permanently Closed)</p>
          <div class="flex flex-row items-center justify-center gap-4">
            <div class="flex flex-col gap-4 w-1/2">
              <p class="font-semibold">Location:</p>
              <p>277 Orchard Road #01-10, orchardgateway Singapore 238858</p>
              <p>
                Walk down from Somerset MRT towards KPO, we are after Coffeesmith and opposite
                Aburi-en and Underarmour
              </p>
            </div>
            <div class="w-[400px] p-4 mt-4">
              <img src="/img/outlets/illustrations/OG-direction.jpeg" />
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <p class="font-semibold">Operating Hours:</p>
            <p>
              Monday to Sunday: <br />
              11.00am to 10.00pm <br />
              Drinks only from 3.00pm to 4.00pm <br />
              (Last Order 9.30pm)
            </p>
          </div>
        </div>
        <button class="bg-bg-red rounded p-2 px-6">
          <div class="text-white text-xl">
            <a
              to="https://www.quandoo.sg/place/chunky-lobsters-93283/widget?aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
              >Reserve ></a
            >
          </div>
        </button>
      </section>
    </div>
  </main>
</template>
