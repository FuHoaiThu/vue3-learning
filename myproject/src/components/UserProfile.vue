<template>
  <div>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>IsAdmin: {{ isAdmin }}</p>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { name, age, isAdmin } = storeToRefs(userStore)
</script>
