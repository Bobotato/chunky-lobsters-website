<script setup lang="ts">
import SocialsList from '@/components/common/SocialsList.vue'
import MailingListCTA from './MailingListCTA.vue'
</script>

<template>
  <footer class="footer w-full bg-bg-dark flex items-center justify-center p-6">
    <div class="footer-content flex flex-col w-full max-w-[980px] bg-bg-dark items-center justify-center gap-4">
      <div class="divider flex flex-row items-center justify-center gap-4 w-full">
        <hr class="border flex-grow"></hr>
        <div class="flex items-center justify-center w-24">
          <img src="/img/CL-monogram-red.png" class="object-contain" />
        </div>
        <hr class="border flex-grow"></hr>
      </div>

      <div class="footer-cta flex flex-row items-start justify-start gap-36">
        <div class="socials flex flex-col items-center justify-center gap-2">
          <div class="text-white">FOLLOW US!</div>
          <SocialsList />
        </div>

        <div class="maillist flex flex-col items-center justify-center gap-2">
          <div class="text-white">JOIN OUR MAILING LIST!</div>

          <MailingListCTA />
        </div>
      </div>
      <div class="copyright text-white mt-12">© Chunky Lobsters 2024</div>
    </div>
  </footer>
</template>
