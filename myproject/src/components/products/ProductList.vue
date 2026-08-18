<template>
  <ul class="products">
    <ProductCart
      v-for="item in products"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :image="item.image"
      @add-to-cart="handleAddToCart"
    />
  </ul>
</template>
<script setup>
import ProductCart from './ProductCart.vue'

const products = [
  {
    id: 1,
    name: 'Mechanical Keyboard',
    price: 150000,
    image: 'https://i.pinimg.com/1200x/32/48/85/324885d926ddc57db047e380e7029f71.jpg',
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    price: 200000,
    image: 'https://i.pinimg.com/736x/1f/4a/d1/1f4ad15bae2dde77545c94290b640f32.jpg',
  },
  {
    id: 3,
    name: 'Monitor',
    price: 3000000,
    image: 'https://i.pinimg.com/736x/f3/62/37/f3623702d951fd6ae634fde1bb0c6e09.jpg',
  },
]

const handleAddToCart = (id) => {
  const product = products.find((p) => p.id === id)
  console.log(product ? `Added ${product.name} to card` : '')
}
</script>
<style>
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  overflow: hidden;
}
</style>
