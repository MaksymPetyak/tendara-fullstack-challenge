import { openai } from '@ai-sdk/openai'
import { Message, streamText } from 'ai';


export async function POST(req: Request) {
  const { messages } = await req.json() as { messages: Message[] };

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages: messages,
  });

  return result.toTextStreamResponse();
} 