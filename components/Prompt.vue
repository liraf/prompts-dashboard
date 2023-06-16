<template>
  <Card title="Prompt" class="mb-4">
    <CustomTextarea />
    <Tokens />
  </Card>
  <div class="flex mb-4">
    <Card title="Inputs" class="mr-2">
      <Pill v-for="text in inputs" :key="text" :text="text" />
      <Input class="mt-2" />
    </Card>
    <Card title="Preview" class="ml-2">
      <p>{{ preview }}</p>
      <Tokens />
    </Card>
  </div>
  <Card title="Completion">
  </Card>
</template>

<script setup>
const preview = ref("Given the following fruit Bananaasd, output the closest color hex value that matches the color of the")
const inputs = ref(['fruit', 'vegetable'])
</script>
