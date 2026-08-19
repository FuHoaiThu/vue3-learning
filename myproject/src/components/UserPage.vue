<template>
  <div>
    <h1>This is user page</h1>
    <UserLayout />
  </div>
</template>
<script setup>
import { provide } from 'vue'
import UserLayout from './UserLayout.vue'

const user = {
  name: 'Nguyen Van An',
  role: 'Frontend Developer',
}
provide('user', user)
</script>
