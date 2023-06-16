<template>
  <div class="w-full bg-white px-4 py-4 rounded-lg text-blue-950">
    <h3 class="mb-2">Prompt</h3>
    <CustomTextarea />
    <div class="mt-2">Tokens: <b>{{ tokens }}</b></div>
  </div>
</template>

<script setup>
const tokens = ref(22)
</script>
