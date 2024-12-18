<script setup lang="ts">
import { NavData } from '@/data/NavData'

import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full bg-bg-dark h-[104px] flex items-center justify-center">
    <div class="w-full max-w-[980px] flex flex-row px-4">
      <div class="header-logo flex h-16">
        <RouterLink to="/">
          <img :src="'/img/CL-logo-whitetext.png'" class="object-contain"
        /></RouterLink>
      </div>

      <nav class="nav-options flex flex-row text-white">
        <div
          v-for="item in NavData"
          :key="item.id"
          class="flex items-center p-4 border-r-2 last:border-r-0"
        >
          <RouterLink :to="item.target" class="hover:text-bg-red">{{ item.label }}</RouterLink>
        </div>
      </nav>
    </div>
  </div>
</template>
