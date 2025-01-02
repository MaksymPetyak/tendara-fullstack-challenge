"use client"

import { Editor } from "@/components/editor";
import WritingAssistant from "@/components/writing-assistant";


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-lg font-bold leading-tight tracking-tighter">
          Tendara AI writing copilot
        </h1>
        <div className="mt-8 flex w-full gap-4">
          <div className="w-1/2">
            <Editor />
          </div>
          <div className="w-1/2">
            <WritingAssistant />
          </div>
        </div>
      </div>
    </section>
  )
}
