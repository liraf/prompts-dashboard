<template>
  <Card title="Preview" class="ml-2">
    <div class="whitespace-pre-wrap" v-html="parsedPrompt" />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
const parsedPrompt = useState('parsedPrompt')
</script>
