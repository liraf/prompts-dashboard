<template>
  <div class="text-white py-12">
    <h2 class="mb-4 text-lg font-medium">Prompts Dashboard</h2>
    <Prompt />

    <div class="flex mb-4">
      <Inputs @update-variable="handleUpdateVariable" />
      <Preview :variablesWithValues="variablesWithValues" />
    </div>
    <ActionBar class="mb-4" />

    <Completion />
  </div>
</template>

<script setup lang="ts">
const variablesWithValues = reactive<{[key:string]: string}>({})

const handleUpdateVariable = (variable: string, value: string) => {
  variablesWithValues[variable] = value
}
</script>
