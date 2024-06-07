<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <thead :class="cn('[&_tr]:border-b bg-red-400 text-stone-50', props.class)">
    <slot />
  </thead>
</template>
