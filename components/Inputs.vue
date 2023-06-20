<template>
  <Card title="Inputs" class="mr-2">
    <template v-for="(text, index) in promptVariables" :key="index">
      <div :class="index < promptVariables.length - 1 ? 'mb-4' : ''">
        <Pill :text="text.slice(2,-2).trim()" />
        <CustomInput class="mt-2" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useStateKeys } from '~/helpers/consts'

const promptVariables = useState<string[]>(useStateKeys.PROMPT_VARIABLES)
</script>
