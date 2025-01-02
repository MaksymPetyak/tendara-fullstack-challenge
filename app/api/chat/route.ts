import { openai } from '@ai-sdk/openai'
import { Message, streamText } from 'ai';


export async function POST(req: Request) {
  // Destructure here if you are passing additional parameters in the request body
  const { messages } = await req.json() as { messages: Message[] }; 

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages: messages,
  });

  return result.toTextStreamResponse();
} 