<template>
  <li class="card">
    <div class="card-header">
      <img :src="image" alt="card image" />
      <h2>{{ name }}</h2>
    </div>
    <p>{{ price }}</p>
    <button @click="onAdd">Add to cart</button>
  </li>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  id: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['add-to-cart'])

const onAdd = () => {
  emit('add-to-cart', props.id)
}
</script>
<style lang="css" scoped>
.card {
  overflow: hidden;
}
.card-header img {
  width: 100%;
  height: 300px;
}
</style>
