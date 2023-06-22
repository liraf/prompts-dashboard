<template>
  <Transition>
    <Card v-if="completion?.length" title="Completion">
      <p ref="scrollTarget" class="border-[1px] border-gray-100 block rounded-md px-4 py-4">{{ completion }}</p>
    </Card>
  </Transition>
</template>

<script setup>
import { useStateKeys } from '~/helpers/consts';

const completion = useState(useStateKeys.COMPLETION)
const scrollTarget = ref(null)

watchEffect(() => {
  scrollTarget.value?.scrollIntoView({ behavior: 'smooth' })
})
</script>
