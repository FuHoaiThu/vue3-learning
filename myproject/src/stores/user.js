import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Thu',
    age: 25,
    isAdmin: false,
  }),
})
