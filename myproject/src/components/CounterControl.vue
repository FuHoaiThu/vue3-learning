<template>
  <div>
    <p>Control:</p>
    <button @click="counterStore.count++">Increase</button>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
