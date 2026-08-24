<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increase, decrease, reset } = useCounter()
</script>
<template>
  <div>Count: {{ count }}</div>
</template>
