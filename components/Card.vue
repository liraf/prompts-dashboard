<template>
  <div class="w-full bg-blue-800 px-4 md:px-8 py-3 md:py-6 rounded-3xl text-white">
    <Headline v-if="title" tag="h2">{{ title }}</Headline>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  title?: string
}

const { title } = defineProps<CardProps>()
</script>