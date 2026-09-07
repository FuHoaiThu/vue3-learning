import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([
    {
      id: 1,
      name: 'Phone',
      price: 1000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Laptop',
      price: 2000,
      quantity: 1,
    },
  ])

  const totalQuantity = computed(() => {
    return items.value.reduce((acc, data) => {
      return acc + data.quantity
    }, 0)
  })
  const totalPrice = computed(() => {
    return items.value.reduce((acc, data) => {
      return acc + data.quantity * data.price
    }, 0)
  })
  const hasProduct = computed(() => {
    return items.value.some((data) => data.quantity > 0)
  })

  const increaseQuantity = (productId) => {
    const product = items.value.find((i) => i.id === productId)
    if (product) product.quantity++
  }
  const decreaseQuantity = (productId) => {
    const product = items.value.find((i) => i.id === productId)
    if (product && product.quantity > 1) product.quantity--
  }
  const removeProduct = (productId) => {
    items.value = items.value.filter((i) => i.id !== productId)
  }
  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalQuantity,
    totalPrice,
    hasProduct,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    clearCart,
  }
})
