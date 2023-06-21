<template>
  <Card>
    <div class="flex items-center justify-between">
      <div class="flex items-center w-1/2">
        <CustomSelect class="w-1/2 mr-2" label="Model" :options="families" @change="(event) => selectedModel = event.target?.value"/>
      </div>
      <div class="flex items-center justify-end w-1/2">
        <CustomButton @click="$emit('run')" :loading="isLoadingCompletion">RUN</CustomButton>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { useStateKeys } from '~/helpers/consts';

defineEmits(['run'])

const selectedModel = useState(useStateKeys.SELECTED_MODEL, () => 'text-davinci-003')
const isLoadingCompletion = useState<boolean>(useStateKeys.LOADING_COMPLETION)

const families = reactive([
  {
    category: 'GPT-3',
    options: [
      {
        value: 'text-davinci-003',
        name: 'text-davinci-003'
      },
      {
        value: 'text-curie-001',
        name: 'text-curie-001'
      },
      {
        value: 'text-babbage-001',
        name: 'text-babbage-001'
      },
      {
        value: 'text-ada-001',
        name: 'text-ada-001'
      }
    ]
  },
  {
    category: 'Codex',
    options: [
      {
        value: 'text-davinci-002',
        name: 'text-davinci-002'
      },
      {
        value: 'text-cushman-001',
        name: 'text-cushman-001'
      }
    ]
  }
])
</script>