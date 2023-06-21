<template>
  <div class="text-white py-12">
    <h2 class="mb-4 text-lg font-medium">Prompts Dashboard</h2>
    <Prompt />

    <div class="flex mb-4">
      <Inputs @update-variable="handleUpdateVariable" />
      <Preview :variablesWithValues="variablesWithValues" />
    </div>
    <ActionBar class="mb-4" @run="runPrompt" />

    <Completion />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { toast } from 'vue3-toastify';
import { parsePrompt } from '~/helpers';
import { useStateKeys } from '~/helpers/consts';

const variablesWithValues = reactive<{[key:string]: string}>({})
const rawPrompt = useState<string>(useStateKeys.RAW_PROMPT)
const selectedModel = useState(useStateKeys.SELECTED_MODEL)
const completion = useState(useStateKeys.COMPLETION, () => '')
const isLoadingCompletion = useState(useStateKeys.LOADING_COMPLETION, () => false)

const handleUpdateVariable = (variable: string, value: string) => {
  variablesWithValues[variable] = value
}

const runPrompt = async () => {
  try {
    completion.value = ''
    isLoadingCompletion.value = true
    const { newParsedPrompt } = parsePrompt(
      rawPrompt?.value,
      `{var}`,
      variablesWithValues,
      true
    )
    const result = await axios.post('/api/completion', {
      model: selectedModel?.value,
      prompt: newParsedPrompt
    })
    completion.value = result.data
    isLoadingCompletion.value = false
  } catch (error: unknown) {
    isLoadingCompletion.value = false
    if (axios.isAxiosError(error))  {
      toast.error(error?.response?.data.message)
    } else {
      toast.error('An error has occured while fetching the completion. Try again later.')
    }
  }
}
</script>
