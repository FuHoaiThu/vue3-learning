<template>
  <input type="text" placeholder="Enter..." aria-label="input text" v-model="model" />
</template>
<script>
import { defineModel } from 'vue'
const model = defineModel()
</script>
