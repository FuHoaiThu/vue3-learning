import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const product = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async (searchQuery = null) => {
    let url = 'https://dummyjson.com/products'
    if (searchQuery === null) {
      loading.value = true
    } else {
      url += `/search?q=${encodeURIComponent(searchQuery)}`
    }
    error.value = null
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await response.json()
      products.value = data.products
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  const fetchProduct = async (id) => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      const data = await response.json()
      product.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  return { products, loading, error, product, fetchProducts, fetchProduct }
})
