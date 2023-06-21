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
import { useStateKeys } from '~/helpers/consts';

const variablesWithValues = reactive<{[key:string]: string}>({})
const previewPrompt = useState<string>(useStateKeys.PREVIEW_PROMPT)

const handleUpdateVariable = (variable: string, value: string) => {
  variablesWithValues[variable] = value
}

const runPrompt = async () => {
  try {
    const result = await axios.post('/api/completion', {
      model: 'text-davinci-003',
      prompt: previewPrompt?.value
    })
    console.log(result)
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}
</script>
