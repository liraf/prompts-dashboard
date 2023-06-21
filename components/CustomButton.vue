<template>
  <button class="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>