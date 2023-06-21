<template>
  <div>
    <label v-if="label" class="block mb-2" :for="`select-${label}`" >{{ label }}</label>
    <select :id="`select-${label}`" @change="(value) => $emit('change', value)" lass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <optgroup v-for="family in options" :label="family?.category || ''">
        <option v-for="option in family.options" :key="option.name" :value="option.value">{{ option.name }}</option>
      </optgroup>
    </select>
  </div>
</template>

<script setup lang="ts">
defineEmits(['change'])

interface SelectProps {
  options: {
    category: string,
    options: {
      value: string,
      name: string
    }[]
  }[],
  label?: string
}

const { options, label } = defineProps<SelectProps>()
</script>