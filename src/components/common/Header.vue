<script setup lang="ts">
interface HeaderProps {
  header: string
}

const props = defineProps<HeaderProps>()
</script>

<template>
  <div class="h-[190px] w-full bg-monogram flex items-center justify-center bg-cover">
    <div class="font-mocha-rounded text-8xl text-white">
      {{ props.header }}
    </div>
  </div>
</template>
