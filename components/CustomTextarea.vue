<template>
  <textarea
    ref="textareaRef"
    class="w-full bg-gray-100 rounded-md text-blue-950 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 resize-none"
  />
</template>

<script setup lang="ts">
const textareaRef = ref()
useResizableTextarea(textareaRef)
</script>