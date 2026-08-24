<template>
  <div>
    <div>
      <input v-model="keyword" type="text" placeholder="Search..." aria-label="product search" />
    </div>
    <div>
      <select id="category" v-model="category">
        <option value="all">All</option>
        <option value="phone">Phone</option>
        <option value="laptop">Laptop</option>
      </select>
    </div>
    <div>
      <button @click="page--">Previous</button>
      <button @click="page++">Next</button>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')
const category = ref('all')
const page = ref(1)

const searchProducts = (keyword, category, page) => {
  console.log(`Searching: keyword="${keyword}", category="${category}", page=${page}`)
}

watch(
  [keyword, category, page],
  ([newKeyword, newCategory, newPage], [oldKeywor, oldCategory, oldPage]) => {
    searchProducts(newKeyword, newCategory, newPage)
  },
  {
    immediate: true,
  },
)
</script>
