export const useResizableTextarea = (element: Ref<HTMLTextAreaElement>) => {
  const hasUpdatedOnce = ref(false)

  const resizeElement = () => {
    element.value.style.height = 'auto'
    element.value.style.height = element.value.scrollHeight + 'px'
  }

  onUpdated(() => {
    if (!element?.value || hasUpdatedOnce.value) return
    resizeElement()
    hasUpdatedOnce.value = true
  })

  watchEffect(onInvalidate => {
    if (!element?.value) return

    resizeElement()
    element.value.addEventListener('input', resizeElement)

    onInvalidate(() => element.value.removeEventListener('input', resizeElement))
  })
}