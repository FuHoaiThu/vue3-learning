<template>
  <div>
    <h2>Mini 1: Product Detail</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Failed to fetch product</div>
    <div v-else-if="product">
      <h3>{{ product.title }}</h3>
      <p>Price: {{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { product, loading, error } = storeToRefs(productStore)
const { fetchProduct } = productStore
const route = useRoute()

const productId = computed(() => {
  return route.params.id
})

watch(
  productId,
  () => {
    fetchProduct(productId.value)
  },
  {
    immediate: true,
  },
)
</script>
