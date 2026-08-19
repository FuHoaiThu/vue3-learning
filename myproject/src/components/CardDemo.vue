<template>
  <div>
    <BaseCard>
      <template #header>
        <h2>Mechanical Keyboard</h2>
      </template>
      <p>Price: 150.000đ</p>
      <template #footer>
        <button>Add to cart</button>
      </template>
    </BaseCard>
  </div>
</template>
<script setup>
import BaseCard from './BaseCard.vue'
</script>
