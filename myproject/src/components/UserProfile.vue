<template>
  <div>
    <p>{{ user.name }}</p>
    <p>{{ user.role }}</p>
  </div>
</template>
<script setup>
import { inject } from 'vue'

const user = inject('user')
</script>
