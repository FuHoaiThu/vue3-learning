<template>
  <div>
    <input v-model="keyword" type="text" placeholder="Search..." aria-label="product search" />
    <select>
      <option></option>
    </select>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')

const searchProducts = (keyword) => {
  console.log(`Searching products with keyword: ${keyword}`)
}

watch(keyword, (newValue, oldValue) => {
  console.log(`Keyword changed from "${oldValue}" to "${newValue}"`)
})
</script>
