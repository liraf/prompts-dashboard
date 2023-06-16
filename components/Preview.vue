<template>
  <Card title="Preview" class="ml-2">
    <p>{{ preview }}</p>
    <Tokens />
  </Card>
</template>

<script setup>
const preview = ref("Given the following fruit Banana, output the closest color hex value that matches the color of the")
</script>
