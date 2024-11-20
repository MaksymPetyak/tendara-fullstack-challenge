'use client'

import { useChat } from 'ai/react'

export default function WritingAssistant() {
  const { messages, input, handleInputChange, handleSubmit, reload } = useChat({
    streamProtocol: 'text',
  })

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (messages.length > 0) {
      reload()
    }
    handleInputChange(e)
  }

  return (
    <div className="flex flex-col w-full gap-4 p-4">
      <h2 className="text-md font-bold">Writing copilot</h2>
      <textarea
        rows={2}
        value={input}
        onChange={handleInput}
        className="border rounded p-2 resize-none"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
      <p>
        {messages.map((message) => (
          <div key={message.id}>{message.content}</div>
        ))}
      </p>
    </div>
  )
}
