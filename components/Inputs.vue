<template>
  <Card title="Inputs" class="mr-2">
    <template v-for="(text, index) in inputs" :key="index">
      <div :class="index < inputs.length - 1 ? 'mb-4' : ''">
        <Pill :text="text" />
        <CustomInput class="mt-2" />
      </div>
    </template>
  </Card>
</template>

<script setup>
const inputs = ref(['fruit', 'vegetable'])
</script>
