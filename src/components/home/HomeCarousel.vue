<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Siema from 'siema'

import type { Ref } from 'vue'
import type { CarouselType } from '@/types/CarouselType'

const props = defineProps<{
  carouselData: CarouselType[]
}>()

const siemaRef: Ref<HTMLElement | null> = ref(null)
let mySiema: Siema | null = null
const slideIndex: Ref<number> = ref(0)

onMounted(() => {
  if (siemaRef.value) {
    mySiema = new Siema({
      selector: siemaRef.value,
      perPage: 1,
      loop: true,
      draggable: false,
      onChange: () => (slideIndex.value = mySiema!.currentSlide),
    })
  }
  function nextImage(carousel: Siema | null) {
    if (carousel) {
      carousel.next()
    }
  }
  const nextImageInterval = setInterval(() => nextImage(mySiema), 5000)
})
</script>

<template>
  <div ref="siemaRef" class="lg:w-[980px]">
    <img v-for="(item, index) in props.carouselData" :src="item.src" :alt="item.alt" class="" />
  </div>
</template>
