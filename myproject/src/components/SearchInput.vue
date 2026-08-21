<template>
  <input v-model="model" :type="type" :placeholder="placeholder" />
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const model = defineModel()
</script>
