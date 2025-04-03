import { google } from "@ai-sdk/google"
import { streamText, Message } from "ai"

export const MAX_DURATION = 30;

export async function POST(request: Request) {
  const model = google('gemini-2.0-flash-lite-preview-02-05', {
    safetySettings: [
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "HARM_BLOCK_THRESHOLD_UNSPECIFIED"
      }
    ],
  })

  const { messages }: { messages: Message[] } = await request.json()
  const result = streamText({
    model,
    messages,
    system:  "You're a helpfull asistent oriented to programming and code optimization. The user is gonna to ask you questions about the code that user is writing. Answer giving suggestions, explanations, improvements about the code, analyzing to the Big O Notation of the code and possible problems related to: Memory Usage, Execution Time and Number of Operations. Besides, your responses are going to follow the markdown syntax convention for more readability. And try always to be concise and to the point."
  })

  return result.toDataStreamResponse()
}