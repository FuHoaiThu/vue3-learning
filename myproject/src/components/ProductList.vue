<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Failed to fetch products </div>
  <div>
    <ul>
      <li v-for="item in products">
        <h3>{{ item.title }}</h3>
        <p>Price: ${{ item.price }}</p>
        <p>Category: {{ item.category }}</p>
        <p>Rating: {{ item.rating }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const productStore = useProductStore()
const { products } = storeToRefs(productStore)
const { fetchProducts } = productStore

onMounted(() => {
  fetchProducts()
})
</script>
