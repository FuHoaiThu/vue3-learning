<template>
  <div class="todos">
    <form class="todos-add" @submit.prevent="addTodo">
      <input
        v-model.trim="newTodo"
        type="text"
        placeholder="Enter todo..."
        aria-label="enter todo"
      />
      <button>Add</button>
    </form>

    <ul class="todos-list">
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" aria-label="complete todo" v-model="todo.completed" />
        <span>
          {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>

    <div class="todos-infor">
      <p>Total: {{ totalTodos }}</p>
      <p>Completed: {{ completedTodos }}</p>
      <p>Remaining: {{ remainingTodos }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const newTodo = ref('')
const todos = ref([
  {
    id: 1,
    title: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn JavaScript',
    completed: false,
  },
])
const indexTodos = ref(2)

const totalTodos = computed(() => todos.value.length)
const completedTodos = computed(() => todos.value.filter((t) => t.completed).length)
const remainingTodos = computed(() => totalTodos.value - completedTodos.value)

const addTodo = () => {
  if (!newTodo.value) return
  indexTodos.value = indexTodos.value + 1
  todos.value = [
    ...todos.value,
    {
      id: indexTodos.value,
      title: newTodo.value,
      completed: false,
    },
  ]
  newTodo.value = ''
}
const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>
