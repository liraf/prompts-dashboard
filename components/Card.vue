<template>
  <div class="w-full bg-white px-4 py-4 rounded-lg text-blue-950">
    <h3 class="mb-6">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  title: string
}

const { title } = defineProps<CardProps>()
</script>