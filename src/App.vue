<template>
  <component :is="layout || div">
    <router-view />
  </component>
</template>
<script setup>
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import layouts from '@/layouts'
const router = useRouter()
const layout = shallowRef('div')

router.beforeEach((to) => {
  console.log(to.meta.layout)
  layout.value = layouts[to.meta.layout] || 'div'
})
</script>
