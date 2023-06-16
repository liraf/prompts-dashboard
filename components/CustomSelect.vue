<template>
  <div>
    <label v-if="label" class="block mb-2" :for="`select-${label}`" >{{ label }}</label>
    <select :id="`select-${label}`" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option v-for="option in options" :key="option.name" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface SelectProps {
  options: {
    value: string,
    name: string
  }[],
  label?: string
}

const { options, label } = defineProps<SelectProps>()
</script>