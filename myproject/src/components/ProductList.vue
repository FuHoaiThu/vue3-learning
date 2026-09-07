<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Failed to load products</div>
  <div v-else>
    <ul>
      <li v-for="item in products" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>Price: ${{ item.price }}</p>
      </li>
    </ul>
    <button @click="handleRetry">Retry</button>
  </div>
</template>
<script setup>
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const productStore = useProductStore()
const { fetchProducts } = productStore
const { loading, error, products } = storeToRefs(productStore)

onMounted(() => {
  fetchProducts()
})

const handleRetry = () => {
  fetchProducts()
}
</script>
