export const useResizableTextarea = (element: Ref<HTMLTextAreaElement>) => {
  const resizeElement = () => {
    element.value.style.height = 'auto'
    element.value.style.height = element.value.scrollHeight + 'px'
  }

  watchEffect(onInvalidate => {
    if (!element?.value) return

    resizeElement()
    element.value.addEventListener('input', resizeElement)

    onInvalidate(() => element.value.removeEventListener('input', resizeElement))
  })
}