"use client"
import { MinimalTiptapEditor } from "@/components/minimal-tiptap"
import { Content } from "@tiptap/react"
import { useLessonContent } from "@/lib/store"

export const LessonInfoRight = ({ chapterContent }: { chapterContent: string }) => {
  const { value, setValue } = useLessonContent()

  // Set default value to chapterContent when component mounts
  if (!value) {
    setValue(chapterContent)
  }

  return <div className="rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-[3] mb-3">
    <h4 className="text-md font-semibold mb-5">Content</h4>
   
   <MinimalTiptapEditor
      value={value || chapterContent} // Fallback to chapterContent if value is empty
      onChange={setValue}
      className="w-full max-h-[500px] overflow-y-auto"
      editorContentClassName="p-5"
      output="html"
      placeholder="Type your description here..."
      autofocus={true}
      editable={true}
      editorClassName="focus:outline-none"
    />
  </div>
}