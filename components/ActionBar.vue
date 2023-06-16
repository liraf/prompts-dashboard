<template>
  <Card>
    <div class="flex items-center justify-between">
      <div class="flex items-center w-1/2">
        <CustomSelect class="w-1/2 mr-2" label="Family" :options="familyOptions"/>
        <CustomSelect class="w-1/2" label="Model" :options="modelOptions"/>
      </div>
      <div class="flex items-center justify-end w-1/2">
        <CustomButton>
          RUN
        </CustomButton>
        <CustomButton class="ml-2">
          SAVE
        </CustomButton>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
const familyOptions = ref([
  {
    value: 'GPT-3',
    name: 'GPT-3'
  },
  {
    value: 'CODEX',
    name: 'Codex'
  }
])

const modelOptions = ref([
  {
    value: 'text-davinci-003',
    name: 'text-davinci-003'
  },
  {
    value: 'text-davinci-003',
    name: 'text-davinci-003'
  }
])
</script>