import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      component: () => import('@/components/ProductList.vue'),
    },
    {
      path: '/products/:id',
      component: () => import('@/components/ProductDetail.vue')
    }
  ],
})

export default router
