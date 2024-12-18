<script setup lang="ts">
import { ref } from 'vue'

import type { Ref } from 'vue'

const emailInput: Ref<string> = ref("")

function registerEmail() {
    //mailchimp integration goes here
    console.log(emailInput.value)
    emailInput.value = ""
}
</script>

<template>
    <div class="flex flex-row items-center justify-center gap-2 py-2">
    <input class="rounded p-2 text-xl" v-model=emailInput></input>
    <button class="bg-bg-red rounded text-white text-xl py-2 px-4" @click="registerEmail">Subscribe</button>
    </div>
</template>
