<template>
  <div
    @click="() => $emit('click')"
    class="min-h-[64px] w-full bg-gray-100 rounded-md text-blue-950 px-4 py-2 whitespace-pre-wrap"
    v-html="parsedPrompt"
  />
</template>

<script setup lang="ts">
import { parsePrompt } from '~/helpers'

const rawPrompt = useState<string>('rawPrompt')
const parsedPrompt = useState<string>('parsedPrompt', () => '')
const promptVariables = useState<string[]>('promptVariables', () => [])

watchEffect(() => {
  const { newParsedPrompt, variables } = parsePrompt(
    rawPrompt?.value,
    `<span class="rounded-full px-3 py-1 text-white inline bg-blue-400">{var}</span>`
  )

  parsedPrompt.value = newParsedPrompt
  promptVariables.value = variables
})
</script>
