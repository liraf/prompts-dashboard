import { Configuration, OpenAIApi } from "openai"

const runtimeConfig = useRuntimeConfig()
const { OPENAI_API_KEY } = runtimeConfig

if (!OPENAI_API_KEY) {
  console.error("No API key found.")
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { prompt, model } = body

  try {
    const completion = await openai.createCompletion({
      model: model,
      prompt: prompt
    })
    return completion.data.choices[0].text
  } catch (error: any) {
    throw createError({
      statusCode: error?.response?.status ?? 500,
      statusMessage: error?.response?.statusText ?? '',
    })
  }
})