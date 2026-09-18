<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div class="counter">
    <h2 data-test="count">Count: {{ count }}</h2>

    <button data-test="increment" @click="increment">Increment</button>

    <button data-test="decrement" @click="decrement">Decrement</button>

    <button data-test="reset" @click="reset">Reset</button>
  </div>
</template>
