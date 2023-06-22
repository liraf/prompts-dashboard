<template>
  <div>
    <label v-if="label" class="block mb-2" :for="`select-${label}`" >{{ label }}</label>
    <select :id="`select-${label}`" @change="(value) => $emit('change', value)" class="bg-blue-700 text-white rounded-lg ring ring-blue-500 block w-full p-2.5">
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