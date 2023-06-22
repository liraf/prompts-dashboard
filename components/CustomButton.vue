<template>
  <button
    class="bg-white text-blue-950 text-sm font-bold py-3 px-5 rounded-2xl hover:opacity-80 transition-all uppercase tracking-wide"
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