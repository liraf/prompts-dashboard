<template>
  <div class="text-white py-12">
    <h2 class="mb-4 text-lg font-medium">Prompts Dashboard</h2>
    <Prompt
      @variables-update="(newVariables) => variables = newVariables"
      @prompt-update="(newPrompt) => prompt = newPrompt"
    />

    <div class="flex mb-4">
      <Inputs :variables="variables" />
      <Preview :prompt="prompt" />
    </div>
    <ActionBar class="mb-4" />

    <Completion />
  </div>
</template>

<script setup>
const variables = ref([])
const prompt = ref('')
</script>