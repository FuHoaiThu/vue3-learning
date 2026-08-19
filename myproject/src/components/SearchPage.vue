<script setup>
import { ref } from 'vue'
import SearchInput from './SearchInput.vue'
const search = ref('')
</script>

<template>
  <SearchInput v-model="search" />
  <p>Keyword: {{ search }}</p>
</template>
