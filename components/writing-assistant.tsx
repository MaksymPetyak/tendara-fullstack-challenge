'use client'

import { useChat } from 'ai/react'

export default function WritingAssistant() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    streamProtocol: 'text',
  })

  return (
    <div className="flex flex-col w-full gap-4 p-4">
      <h2 className="text-md font-bold">Writing copilot</h2>
      <textarea
        rows={2}
        value={input}
        onChange={handleInputChange}
        className="p-2 border rounded resize-none"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <p key={message.id} className="p-2 border rounded">{message.content}</p>
        ))}
      </div>
    </div>
  )
}
