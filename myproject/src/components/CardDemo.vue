<script setup lang="ts">
import BaseCard from './BaseCard.vue'
</script>

<template>
  <div>
    <h1>Slot</h1>
    <BaseCard>
      <h2>Nguyen Van An</h2>
      <p>Frontend Developer</p>
    </BaseCard>
    <BaseCard>
        <h2>Mechanical Keyboard</h2>
        <p>Price: 150.000đ</p>
        <button>Add to cart</button>
    </BaseCard>
  </div>
</template>
