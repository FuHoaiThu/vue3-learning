<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increase, decrease, reset, double } = useCounter(10, 5)
</script>
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
  </div>
  <div class="actions">
    <button @click="decrease">Decrease</button>
    <button @click="increase">Increase</button>
    <button @click="reset">Reset</button>
  </div>
</template>
<style lang="css" scoped>
.actions {
  display: flex;
  gap: 16px;
  margin-top: 16px;
  button {
    cursor: pointer;
  }
}
</style>
