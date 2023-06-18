<template>
  <Card title="Preview" class="ml-2">
    <div class="whitespace-pre-wrap" v-html="prompt" />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
interface PreviewProps {
  prompt: string
}
const { prompt } = defineProps<PreviewProps>()
</script>
