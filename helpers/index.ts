interface ParsePromptReturn {
  newParsedPrompt: string,
  variables: string[]
}
export const parsePrompt = (prompt: string, variableReplace: string, variableValues?: {[key:string]: string}, noCompletion?: boolean): ParsePromptReturn => {
  let newParsedPrompt = prompt

  // TODO: Use the 'Pill' component
  const pillClassName = 'rounded-full px-3 py-1 text-white inline'

  const variables = newParsedPrompt.match(/\{{[a-zA-Z0-9_ ]*}}/g) as string[]
  variables?.forEach((variable) => {
    newParsedPrompt = newParsedPrompt.split(variable).join(variableReplace.replace('{var}', (variableValues ? variableValues[variable] : variable.slice(2,-2).trim()) || ''))
  })

  if (!noCompletion) newParsedPrompt += `<span class="${pillClassName} bg-blue-950">completion</span>`

  return {
    newParsedPrompt,
    variables
  }
}