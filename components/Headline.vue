<template>
  <component :is="tag" :class="`mb-6 uppercase tracking-widest text-sm font-medium ${tagClass}`">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface HeadlineProps {
  tag?: string
}
const { tag = 'h1' } = defineProps<HeadlineProps>()

const tagClass = ref('')
if (tag === 'h1') tagClass.value = 'text-xl'
else if (tag === 'h2') tagClass.value = 'text-md'

</script>