<!-- <script>
export default {
  data() {
    return {
      firstName: 'Hoai',
      lastName: 'Thu',
    }
  },

  methods: {
    sayHello() {
      console.log(
        `Hello ${this.firstName} ${this.lastName}`
      )
    },

    changeName() {
      this.firstName = 'Anna'
    }
  }
}
</script> -->

<script setup>
import { ref } from 'vue'

const firstName = ref('Thu')
const lastName = ref('Hoai')

const sayHello = () => {
  console.log(`Hello ${firstName.value} ${lastName.value}`)
}
const changeName = () => {
  firstName.value = 'Onyra'
}
</script>

<template>
  <h1>{{ firstName }} {{ lastName }}</h1>

  <button @click="sayHello">Say Hello</button>

  <button @click="changeName">Change name</button>
</template>
