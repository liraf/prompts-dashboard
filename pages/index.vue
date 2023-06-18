<template>
  <div class="text-white pt-12">
    <h2 class="mb-4 text-lg font-medium">Prompts Dashboard</h2>
    <Prompt @variables-update="(newVariables) => variables = newVariables" />

    <div class="flex mb-4">
      <Inputs :variables="variables" />
      <Preview />
    </div>
    <ActionBar class="mb-4" />

    <Completion />
  </div>
</template>

<script setup>
const variables = ref([])
</script>