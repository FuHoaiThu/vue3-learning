<template>
  <div>
    <button @click="handleUpdateProfile">Update</button>
    <button @click="userStore.$reset">Reset</button>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const handleUpdateProfile = () => {
  userStore.$patch({
    name: 'Anna',
    age: 30,
    isAdmin: true,
  })
}
</script>
