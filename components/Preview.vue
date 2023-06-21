<template>
  <Card title="Preview" class="md:ml-2">
    <div class="whitespace-pre-wrap" v-html="previewPrompt" />
  </Card>
</template>

<script setup lang="ts">
import { parsePrompt } from '~/helpers'
import { useStateKeys } from '~/helpers/consts'

interface PreviewProps {
  variablesWithValues: {[key:string]: string}
}
const { variablesWithValues } = defineProps<PreviewProps>()

const rawPrompt = useState<string>(useStateKeys.RAW_PROMPT)
const previewPrompt = useState<string>(useStateKeys.PREVIEW_PROMPT, () => '')

watchEffect(() => {
  const { newParsedPrompt } = parsePrompt(
    rawPrompt?.value,
    `<span class="text-blue-400">{var}</span>`,
    variablesWithValues
  )

  previewPrompt.value = newParsedPrompt
})
</script>
