<script setup>
import CartSummary from './components/CartSummary.vue'
import CounterControl from './components/CounterControl.vue'
import CounterDisplay from './components/CounterDisplay.vue'
import ProductList from './components/ProductList.vue'
import UserControl from './components/UserControl.vue'
import UserProfile from './components/UserProfile.vue'
</script>

<template>
  <div>
    <h1>Pinia</h1>
    <hr />
    <div>
      <h2>Mini 1:</h2>
      <CounterControl />
      <CounterDisplay />
    </div>
    <hr />
    <div>
      <h2>Mini 2:</h2>
      <UserProfile />
      <UserControl />
    </div>
    <hr />
    <div>
      <h2>Mini 3:</h2>
      <CartSummary />
    </div>
    <hr />
    <div>
      <h2>Mini 4:</h2>
      <ProductList />
    </div>
  </div>
</template>

<style scoped></style>
