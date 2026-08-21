<template>
  <BaseCard>
    <template #header>
      <h2>{{ name }}</h2>
    </template>
    <p>Price: {{ price }} {{ currency }}</p>
    <p>Category: {{ category }}</p>
    <template #footer>
      <button @click="onAdd">Add to cart</button>
    </template>
  </BaseCard>
</template>
<script setup>
import { inject } from 'vue'
import BaseCard from './BaseCard.vue'

const emit = defineEmits(['add-to-cart'])

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: ''
  }
})

const currency = inject('currency')

const onAdd = () => {
  emit('add-to-cart', props.id)
}
</script>
