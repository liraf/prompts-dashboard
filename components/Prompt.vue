<template>
  <Card title="Prompt" class="mb-4">
    <CustomTextarea
      ref="textareaRef"
      :class="isFocused ? '' : 'hidden'"
      v-model="prompt"
      @focus="() => isFocused = true"
      @blur="() => isFocused = false"
    />
    <ParsedPrompt
      v-if="!isFocused"
      :prompt="prompt"
      @click="() => isFocused = true"
    />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
const prompt = ref('')
const isFocused = ref(false)
const textareaRef = ref()
</script>
