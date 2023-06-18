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
      @variables-update="(newVariables) => $emit('variables-update', newVariables)"
    />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
defineEmits(['variables-update'])

const prompt = ref('Given the following fruit, output the closest color hex value that matches the color of that fruit.\n\nFruit:\n{{ fruit }}\n\nColor hex string:\n')
const isFocused = ref(false)
const textareaRef = ref()
</script>
