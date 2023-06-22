<template>
  <div
    @click="() => $emit('click')"
    class="min-h-[64px] w-full bg-blue-700 ring ring-blue-500 rounded-md text-white px-4 py-2 whitespace-pre-wrap leading-relaxed"
    v-html="parsedPrompt"
  />
</template>

<script setup lang="ts">
import { parsePrompt } from '~/helpers'
import { useStateKeys } from '~/helpers/consts'

const rawPrompt = useState<string>(useStateKeys.RAW_PROMPT)
const parsedPrompt = useState<string>(useStateKeys.PARSED_PROMPT, () => '')
const promptVariables = useState<string[]>(useStateKeys.PROMPT_VARIABLES, () => [])

watchEffect(() => {
  const { newParsedPrompt, variables } = parsePrompt(
    rawPrompt?.value,
    `<span class="rounded-full px-3 py-1 text-white inline bg-blue-400">{var}</span>`
  )

  parsedPrompt.value = newParsedPrompt
  promptVariables.value = variables
})
</script>
