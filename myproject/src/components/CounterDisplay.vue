<template>
  <div>
    <p>Current count: {{ counterStore.count }}</p>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
