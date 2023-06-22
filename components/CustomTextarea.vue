<template>
  <textarea
    ref="textareaRef"
    class="min-h-[64px] w-full bg-blue-800 text-white rounded-md px-4 py-2 focus:outline-none ring ring-blue-500 resize-none"
    :value="modelValue"
    @input="$event => $emit('update:modelValue', $event.target?.value)"
    @focus="() => $emit('focus')"
    @blur="() => $emit('blur')"
  />
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue', 'focus', 'blur'])

const textareaRef = ref()
useResizableTextarea(textareaRef)
</script>