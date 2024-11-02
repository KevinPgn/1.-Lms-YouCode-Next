"use client"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useLessonContent } from "@/lib/store"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { updateLessonDetails } from "../server/updateLesson"
import { startTransition } from "react"
import { toast } from "sonner"

export const LessonInfoLeft = ({ lessonId, chapterTitle, chapterPublished }: { lessonId: string, chapterTitle: string, chapterPublished: boolean }) => {
  const value = useLessonContent((state) => state.value)
  const [published, setPublished] = useState<boolean>(chapterPublished)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    startTransition(async () => {
      const res = await updateLessonDetails({...data, lessonId, published, content: value})
      console.log(res)
      if(res){
        toast.success("Lesson updated successfully")
      } else {
        toast.error("Failed to update lesson")
      }
    })
  }

  return <div className="rounded-2xl border max-lg:w-full dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-1">
    <h4 className="text-md font-semibold mb-5">Details</h4>
    
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Title</label>
        <Input defaultValue={chapterTitle} className="w-full bg-transparent border dark:border-zinc-800 dark:bg-[#1D1916]" {...register("title")} />
    </div>

    <div className="flex flex-col gap-2 mt-5">
        <label className="text-sm font-semibold">Published</label>
        <Select defaultValue={published ? "published" : "draft"} onValueChange={(value) => setPublished(value === "published")}>
            <SelectTrigger className="w-full bg-transparent border dark:border-zinc-800 dark:bg-[#1D1916]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
        </Select>
    </div>

      <Button type="submit" className="w-full mt-5 bg-[#E11D48] hover:bg-[#E11D48]/80 text-white">Submit</Button>
    </form>
  </div>
}