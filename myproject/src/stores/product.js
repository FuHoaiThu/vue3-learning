import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = false
    try {
      const response = await fetch('https://dummyjson.com/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      products.value = data.products
    } catch (err) {
      error.value = err.message
      products.value = []
    } finally {
      loading.value = false
    }
  }
  return { fetchProducts, loading, error, products }
})
