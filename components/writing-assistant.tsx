'use client'

import { useChat } from 'ai/react'

export default function WritingAssistant() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    streamProtocol: 'text',
    body: { }, // You can add additional payload to the chat endpoint here
  })

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <h2 className="text-md font-bold">Writing copilot</h2>
      <textarea
        rows={2}
        value={input}
        onChange={handleInputChange}
        className="resize-none rounded border p-2"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSubmit}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <p key={message.id} className="rounded border p-2">{message.content}</p>
        ))}
      </div>
    </div>
  )
}
