<template>
  <div class="rounded-full px-4 py-2 bg-blue-950 text-white inline-block mr-2">
    <span class="mb-2">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface PillProps {
  text: string
}

const { text } = defineProps<PillProps>()
</script>