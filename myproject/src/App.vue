<script setup>
import { ref } from 'vue'
import LifecycleDemo from './components/LifecycleDemo.vue'

const isShow = ref(false)
</script>

<template>
  <div>
    <LifecycleDemo v-if="isShow" />
    <button @click="isShow = !isShow">Toggle</button>
  </div>
</template>

<style scoped></style>
