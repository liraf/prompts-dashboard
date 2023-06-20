<template>
  <div
    @click="() => $emit('click')"
    class="min-h-[64px] w-full bg-gray-100 rounded-md text-blue-950 px-4 py-2 whitespace-pre-wrap"
    v-html="parsedPrompt"
  />
</template>

<script setup lang="ts">
const rawPrompt = useState<string>('rawPrompt')
const parsedPrompt = useState<string>('parsedPrompt', () => '')
const promptVariables = useState<string[]>('promptVariables', () => [])

watchEffect(() => {
  let newParsedPrompt = rawPrompt?.value

  // TODO: Use the 'Pill' component
  const pillClassName = 'rounded-full px-3 py-1 text-white inline'

  const variables = newParsedPrompt.match(/\{{[a-zA-Z0-9_ ]*}}/g) as string[]
  variables?.forEach((variable) => {
    newParsedPrompt = newParsedPrompt.split(variable).join(`<span class="${pillClassName} bg-blue-400">${variable.slice(2,-2).trim()}</span>`)
  })

  newParsedPrompt += `<span class="${pillClassName} bg-blue-950">completion</span>`

  parsedPrompt.value = newParsedPrompt
  promptVariables.value = variables
})
</script>
