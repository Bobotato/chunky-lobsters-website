<script setup lang="ts"></script>

<template>
  <main>
    <div id="contact-links" class="flex flex-col justify-center">
      <section>
        <ul class="contact-menu flex flex-row my-2 gap-6 items-center justify-center">
          <li class="text-xs">
            <a
              class="block text-white hover:text-green-700 dark:hover:text-green-700"
              href="https://www.instagram.com/chunky.lobsters/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">Chunky Lobsters Instagram</span>
              <img src="/icons/socials/ig-icon.svg" class="social-icon w-10 h-10" />
            </a>
          </li>

          <li class="text-xs">
            <a
              class="block text-white"
              href="https://sg.linkedin.com/company/chunky-lobsters"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">Chunky Lobsters Facebook</span>
              <img src="/icons/socials/facebook-icon.svg" class="social-icon w-10 h-10" />
            </a>
          </li>

          <li class="text-xs">
            <a
              class="block text-white"
              href="https://sg.linkedin.com/company/chunky-lobsters"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">Chunky Lobsters Linkedin</span>
              <img src="/icons/socials/linkedin-icon.svg" class="social-icon w-10 h-10" />
            </a>
          </li>

          <li class="text-xs">
            <a
              class="block text-white"
              href="https://www.tiktok.com/@chunkylobsters"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">Chunky Lobsters TikTok</span>
              <img src="/icons/socials/tiktok-icon.svg" class="social-icon w-10 h-10" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style>
.social-icon:hover {
  filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(3011%) hue-rotate(347deg)
    brightness(66%) contrast(97%);
  transform: translate(0px, -5px);
  transition-duration: 0.1s;
}
</style>
