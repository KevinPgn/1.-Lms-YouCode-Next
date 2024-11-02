"use client"
import { useState } from "react"
import { MinimalTiptapEditor } from "@/components/minimal-tiptap"
import { Content } from "@tiptap/react"

export const LessonInfoRight = ({ chapterContent }: { chapterContent: string }) => {
  const [value, setValue] = useState<Content>(chapterContent)

  return <div className="rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-[3]">
   <MinimalTiptapEditor
      value={value}
      onChange={setValue}
      className="w-full"
      editorContentClassName="p-5"
      output="html"
      placeholder="Type your description here..."
      autofocus={true}
      editable={true}
      editorClassName="focus:outline-none"
    />
  </div>
}