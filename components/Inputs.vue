<template>
  <Card title="Inputs" class="mr-2">
    <template v-for="(text, index) in variables" :key="index">
      <div :class="index < variables.length - 1 ? 'mb-4' : ''">
        <Pill :text="text.slice(2,-2).trim()" />
        <CustomInput class="mt-2" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
interface InputsProps {
  variables: string[]
}
const { variables } = defineProps<InputsProps>()
</script>
