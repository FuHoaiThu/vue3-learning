<script setup>
import ProductList from '@/components/ProductList.vue'
import SearchInput from '@/components/SearchInput.vue'
import { computed, provide, ref } from 'vue'

const currency = 'VND'

const products = ref([
  {
    id: 1,
    name: 'Mechanical Keyboard',
    price: 150000,
    category: 'Keyboard',
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    price: 200000,
    category: 'Mouse',
  },
  {
    id: 3,
    name: 'Gaming Monitor',
    price: 3000000,
    category: 'Monitor',
  },
  {
    id: 4,
    name: 'Wireless Keyboard',
    price: 500000,
    category: 'Keyboard',
  },
])
const search = ref('')
const cart = ref([])

const filteredProducts = computed(() => {
  if (!search.value) return products.value
  return products.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
})

const handleAddProduct = (id) => {
  const product = products.value.find((p) => p.id === id)
  if (!product) return
  cart.value = [...cart.value, product]
}
provide('currency', currency)
</script>
<template>
  <div class="product">
    <h1>Product Browser</h1>
    <div class="product-search">
      <SearchInput v-model.trim="search" type="text" placeholder="Search product... " />
    </div>
    <ProductList :products="filteredProducts" @add-to-cart="handleAddProduct" />
  </div>
</template>
