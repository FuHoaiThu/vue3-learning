<script setup>
import { computed, reactive, ref, toRefs } from 'vue'

const count = ref(0)
const isVisible = ref(true)
const currentYear = ref(new Date().getFullYear())
const user = reactive({
  firstName: 'Thu',
  lastName: 'Hoai',
  age: 20,
})
const { firstName, lastName, age } = toRefs(user)

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
const birthYear = computed(() => {
  return currentYear.value - age.value
})

const sayHello = () => {
  console.log(`Hello ${firstName.value} ${lastName.value}`)
}
const changeName = () => {
  firstName.value = 'Onyra'
}
const handleIncreaseAge = () => {
  age.value++
}
const handleIncreaseCount = () => {
  count.value++
}
const handleToggleInfo = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <h1>Greetings</h1>
  <div class="info" v-show="isVisible">
    <p>Name: {{ fullName }}</p>
    <p>Age: {{ age }}</p>
    <p>Count: {{ count }}</p>
    <p>BirthYear: {{ birthYear }}</p>
  </div>

  <button @click="sayHello">Say Hello</button>

  <button @click="changeName">Change name</button>
  <button @click="handleIncreaseAge">Increase Age</button>
  <button @click="handleIncreaseCount">Increase count</button>
  <button @click="handleToggleInfo">Toggle information</button>
</template>
