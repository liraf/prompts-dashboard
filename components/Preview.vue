<template>
  <Card title="Preview" class="ml-2">
    <div class="whitespace-pre-wrap" v-html="previewPrompt" />
    <Tokens />
  </Card>
</template>

<script setup lang="ts">
import { parsePrompt } from '~/helpers'
import { useStateKeys } from '~/helpers/consts'

const rawPrompt = useState<string>(useStateKeys.RAW_PROMPT)
const previewPrompt = useState<string>(useStateKeys.PREVIEW_PROMPT, () => '')

watchEffect(() => {
  const { newParsedPrompt } = parsePrompt(
    rawPrompt?.value,
    `<span class="text-blue-400">{var}</span>`
  )

  previewPrompt.value = newParsedPrompt
})
</script>
