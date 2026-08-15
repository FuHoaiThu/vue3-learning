<template>
  <div class="profile">
    <img :src="user.avatar" alt="avatar" />
    <p class="user-name">{{ user.name }}</p>
    <p class="user-age">{{ user.age }} tuổi</p>
    <p class="user-position">{{ user.position }}</p>
    <br />
    <div>
      <p>Skills</p>
      <ul>
        <li v-for="s in user.skills" :key="s">{{ s }}</li>
      </ul>
    </div>
    <br />
    <p>Status: <span v-if="user.isActive">Active</span> <span v-else>Inactive</span></p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const user = ref({
  id: 1,
  name: 'Nguyen Van An',
  age: 25,
  position: 'Frontend Developer',
  avatar: 'https://i.pravatar.cc/150?img=3',
  skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  isActive: true,
})
</script>
