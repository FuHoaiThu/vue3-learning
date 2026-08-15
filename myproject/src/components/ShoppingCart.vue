<template>
  <div>
    <h1>{{ productName }}</h1>
    <p>Giá: {{ price }}</p>
    <div class="actions">
      <button @click="decreaseQuantity">[-]</button>
      <p>{{ quantity }}</p>
      <button @click="increaseQuantity">[+]</button>
    </div>
    <p>Tổng tiền: {{ totalPrice }}</p>
    <p v-if="quantity >= 5">Bạn đang mua số lượng lớn</p>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const productName = ref('Mechanical Keyboard')
const price = ref(150000)
const quantity = ref(1)

const totalPrice = computed(() => {
  const total = price.value * quantity.value
  const vndFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(total)
  return vndFormat
})

const increaseQuantity = () => {
  quantity.value = quantity.value + 1
}
const decreaseQuantity = () => {
  quantity.value = quantity.value === 1 ? 1 : quantity.value - 1
}
</script>
<style lang="css" scoped>
.actions {
  display: flex;
  gap: 16px;
}
</style>
