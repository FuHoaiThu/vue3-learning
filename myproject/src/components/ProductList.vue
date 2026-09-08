<template>
  <div>
    <div>
      <label for="search">Search:</label>
      <input id="search" v-model="searchQuery" placeholder="Search products..." />
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Failed to fetch products</div>
    <div v-else>
      <h2>Mini 1: Product List</h2>
      <ul>
        <li v-for="item in products" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>Price: ${{ item.price }}</p>
          <p>Category: {{ item.category }}</p>
          <p>Rating: {{ item.rating }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { debounce } from 'lodash'
const productStore = useProductStore()
const { products, loading, error } = storeToRefs(productStore)
const { fetchProducts } = productStore

onMounted(() => {
  fetchProducts()
})

const searchQuery = ref('')

const handleSearch = debounce(() => {
  fetchProducts(searchQuery.value)
}, 300)
watch(searchQuery, (newQuery) => {
  handleSearch(newQuery)
})
</script>
