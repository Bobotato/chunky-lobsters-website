<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<template>
  <main class="about flex flex-col lg:w-[980px]">
    <section class="flex flex-col">
      <Header header="DELIVERIES"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex flex-col gap-16 text-white text-xl items-center text-center">
          <div class="delivery-cta flex flex-col gap-4 items-center justify-center">
            <p>For deliveries, please click on the whatsapp button below.</p>
            <p>
              This is our preferred mode of delivery <br />
              (Menu prices are lower as compared to third party apps.)
            </p>
            <button
              class="flex flex-row gap-2 justify-center items-center rounded bg-green-500 py-2 px-4 w-48 mt-8"
            >
              <img src="/icons/others/whatsapp.svg" /><a
                href="https://wa.me/+6591386992"
                target="_blank"
                >Whatsapp Us</a
              >
            </button>
          </div>

          <div class="delivery-fees flex flex-col gap-4">
            <p class="font-mocha-rounded text-4xl text-white">
              Delivery Fees (Based on distance to outlet):
            </p>
            <p>Orders above $150 enjoy free delivery islandwide!</p>
            <p>Delivery Locations less than or equal to 10km: <br />$10</p>
            <p>Delivery Locations exceeding 10km: <br />$15 ​</p>
            <p>
              For peak delivery periods, a $10 surcharge will apply due to higher delivery costs.
              For future peak dates, refer to the Lalamove website.
            </p>
            <p>
              Minimum Order for delivery is $60. <br />
              For orders below $60, please order from Foodpanda or Grabfood.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col">
      <Header header="DELIVERY APPS"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <p>Visit us on your favourite food delivery apps!</p>
          <div class="delivery-partners flex flex-row items-center justify-center gap-12">
            <button
              class="flex flex-row gap-2 justify-center items-center rounded bg-green-500 py-2 px-4 w-48"
            >
              <a
                href="https://food.grab.com/sg/en/restaurant/chunky-lobsters-orchard-gateway-delivery/4-C3TGJBDZNAAFGE"
                target="_blank"
                >GrabFood</a
              >
            </button>
            <button
              class="flex flex-row gap-2 justify-center items-center rounded bg-pink-700 py-2 px-4 w-48"
            >
              <a
                href="https://www.foodpanda.sg/restaurant/ikcc/chunky-lobsters-signature-orchardgateway"
                target="_blank"
                >FoodPanda</a
              >
            </button>
          </div>
          <p>
            Chunky Lobsters is not responsible for any surcharges involved with ordering with third
            party delivery partners.
          </p>
        </div>
      </div>
    </section>
    <section class="flex flex-col">
      <Header header="CATERING"></Header>
      <div
        class="bg-bg-dark flex flex-col items-center justify-center gap-6 py-16 px-16 lg:bg-opacity-70"
      >
        <div class="flex flex-col gap-8 text-white text-xl text-center">
          <img src="/img/delivery/illustrations/catering-collage.png" />
          <p>
            Find us for catering for your next event! <br />
            Feel free to contact us for any special requests or to discuss any events or
            collaborations.
          </p>
        </div>
        <button
          class="flex flex-row gap-2 justify-center items-center rounded bg-green-500 py-2 px-4 w-48 mt-8"
        >
          <img src="/icons/others/whatsapp.svg" /><a
            href="https://wa.me/+6591386992"
            target="_blank"
            class="text-white text-xl"
            >Whatsapp Us</a
          >
        </button>
      </div>
    </section>
  </main>
</template>
