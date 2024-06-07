<template>
  <button @click="isShowing = !isShowing">Toggle</button>
  <TransitionRoot
    :show="isShowing"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    I will appear and disappear.
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const isShowing = ref(true)
</script>
