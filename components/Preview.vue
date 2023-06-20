<template>
  <Card title="Preview" class="ml-2">
    <div class="whitespace-pre-wrap" v-html="previewPrompt" />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
import { parsePrompt } from '~/helpers'

const rawPrompt = useState<string>('rawPrompt')
const previewPrompt = useState<string>('previewPrompt', () => '')

watchEffect(() => {
  const { newParsedPrompt } = parsePrompt(
    rawPrompt?.value,
    `<span class="text-blue-400">{var}</span>`
  )

  previewPrompt.value = newParsedPrompt
})
</script>
