<template>
  <Card v-if="completion?.length" title="Completion">
    <p class="border-[1px] border-gray-100 block rounded-md px-4 py-4">{{ completion }}</p>
  </Card>
</template>

<script setup>
import { useStateKeys } from '~/helpers/consts';

const completion = useState(useStateKeys.COMPLETION)
</script>
