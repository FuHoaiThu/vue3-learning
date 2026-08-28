<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product">
        <p>{{ product.name }}</p>
        <button @click="openDetail(product.id)">View Detail</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const products = [
  { id: 1, name: 'iPhone' },
  { id: 2, name: 'MacBook' },
  { id: 3, name: 'iPad' },
]
const router = useRouter()
const openDetail = (id) => {
  router.push({
    name: 'ProductDetail',
    params: {
      id,
    },
  })
}
</script>
<style lang="css" scoped>
.product {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 200px;
  p {
    width: 50%;
  }
}
</style>
