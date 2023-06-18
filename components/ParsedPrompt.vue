<template>
  <div @click="() => $emit('click')" class="min-h-[64px] w-full bg-gray-100 rounded-md text-blue-950 px-4 py-2 whitespace-pre-wrap">
    {{ prompt }}
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])

interface ParsedPromptProps {
  prompt: string
}

const { prompt } = defineProps<ParsedPromptProps>()
</script>
