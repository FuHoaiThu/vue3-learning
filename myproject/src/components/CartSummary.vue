<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
        <button @click="increaseQuantity(item.id)">Increase</button>
        <button :disabled="item.quantity === 1" @click="decreaseQuantity(item.id)">Decrease</button>
        <button @click="removeProduct(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total quantity: {{ totalQuantity }}</p>
    <p>Total price: {{ totalPrice }}</p>
    <p>Has products: {{ hasProduct }}</p>
    <button @click="clearCart">Clear Cart</button>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items, totalQuantity, totalPrice, hasProduct } = storeToRefs(cartStore)
const { increaseQuantity, decreaseQuantity, removeProduct, clearCart } = cartStore
</script>
