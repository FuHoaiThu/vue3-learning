<template>
  <div class="pagination">
    <div class="pagination-info">
      <p>Page: {{ page }} / {{ totalPages }}</p>
      <p>Total: {{ total }}</p>
    </div>
    <div>
      <button :disabled="page === 1" @click="previousPage">Previous</button
      ><button :disabled="page >= totalPages" @click="nextPage">Next</button>
    </div>
    <div class="go-to-page">
      <label for="goto"
        >Go to page: <input v-model.number="pageGoTo" id="goto" type="number"
      /></label>
      <button :disabled="pageGoTo < 1 || pageGoTo > totalPages" @click="gotoPage(pageGoTo)">
        Go
      </button>
    </div>
  </div>
</template>
<script setup>
import { usePagination } from '@/composables/usePagination'
import { ref } from 'vue'

const total = 102
const { page, totalPages, nextPage, previousPage, gotoPage } = usePagination(1, 10, total)

const pageGoTo = ref('')
</script>
<style lang="css" scoped>
.go-to-page {
  margin-top: 16px;
  label {
    display: block;
  }
  button {
    margin-top: 8px;
  }
}
</style>
