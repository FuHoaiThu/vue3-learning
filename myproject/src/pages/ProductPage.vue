<script setup>
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
</script>
<template>
  <div class="product">
    <h1>Product Browser</h1>
    <div class="product-search">
        <input type="text" placeholder="Search product... "/>
    </div>
  </div>
</template>
