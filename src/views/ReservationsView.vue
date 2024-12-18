<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<template>
  <main class="about flex flex-col lg:w-[980px]">
    <section class="flex flex-col">
      <Header header="Make A Reservation"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-12 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex flex-col gap-8 text-white text-xl text-center items-center justify-center">
          <p>For any reservations, please press on the whatsapp button below.</p>
          <button class="flex flex-row gap-2 justify-center items-center rounded bg-green-500 py-2 px-4 w-48"><img src="/icons/others/whatsapp.svg" />Whatsapp Us</button>
          <p>
            For very large groups, special events, pre-orders and other special enquiries, please
            call us directly and we will make the necessary arrangements.
          </p>
        </div>
        <div class="reservation-image w-[980px] overflow-hidden">
          <img src="/img/reservations/photos/reservations.jpg" class="object-cover h-full" />
          <p class="text-right text-white px-8 pt-4">
            Chunky Lobsters x Mrs Singapore Pageant, 2020
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
