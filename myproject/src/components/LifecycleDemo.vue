<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('Component mounted')
})
onUpdated(() => {
  console.log('Component updated')
})
onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
<template>
  <div>
    Count: {{ count }}
    <button @click="count++">Increase</button>
  </div>
</template>
