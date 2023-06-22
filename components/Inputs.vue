<template>
  <Card title="Inputs" class="mb-4 md:mb-0 md:mr-2">
    <TransitionGroup>
      <template v-for="(text, index) in promptVariables" :key="index">
        <div :class="index < promptVariables.length - 1 ? 'mb-4' : ''">
          <Pill :text="text.slice(2,-2).trim()" />
          <CustomInput class="mt-4" @input="$event => $emit('update-variable', text, $event.target?.value)" />
        </div>
      </template>
    </TransitionGroup>
  </Card>
</template>

<script setup lang="ts">
import { useStateKeys } from '~/helpers/consts'

const promptVariables = useState<string[]>(useStateKeys.PROMPT_VARIABLES)
</script>
