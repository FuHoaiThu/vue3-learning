<template>
  <ul>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :category="product.category"
      @add-to-cart="onAdd"
    />
  </ul>
</template>
<script setup>
import ProductCard from './ProductCard.vue'

const emit = defineEmits(['add-to-cart'])

defineProps({
  products: {
    type: Array,
    default: () => [],
  },
})

const onAdd = (id) => {
  emit('add-to-cart', id)
}
</script>
