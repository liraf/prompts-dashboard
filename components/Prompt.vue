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
      @click="() => isFocused = true"
    />
  </Card>
</template>

<script setup lang="ts">
import { useStateKeys } from '~/helpers/consts'

const prompt = useState(useStateKeys.RAW_PROMPT, () => 'Given the following code, output the closest programming language that matches the code.\n\nCode:\n{{ code }}\n\nProgramming language:\n')
const isFocused = ref(false)
const textareaRef = ref()
</script>
