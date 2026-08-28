<template>
  <div>
    <h2>Product Detail</h2>
    <p>Product ID: {{ productID }}</p>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productID = computed(() => {
  return route.params.id
})
</script>
