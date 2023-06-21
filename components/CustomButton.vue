<template>
  <button
    class="bg-blue-950 hover:bg-blue-700 text-sm text-white font-bold py-3 px-5 rounded hover:opacity-80 transition-all"
    @click="$emit('click')"
    :disabled="loading"
  >
    <Loading v-if="loading" class="w-5 h-5" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  loading?: boolean
}

const { loading } = defineProps<ButtonProps>()
defineEmits(['click'])
</script>