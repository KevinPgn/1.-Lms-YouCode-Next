"use client"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export const LessonInfoLeft = ({ chapterTitle, chapterPublished }: { chapterTitle: string, chapterPublished: boolean }) => {
  return <div className="rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-1">
    <h4 className="text-md font-semibold mb-5">Details</h4>
    
    <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Title</label>
        <Input defaultValue={chapterTitle} className="w-full bg-transparent border dark:border-zinc-800 dark:bg-[#1D1916]" />
    </div>

    <div className="flex flex-col gap-2 mt-5">
        <label className="text-sm font-semibold">Published</label>
        <Select defaultValue={chapterPublished ? "published" : "draft"}>
            <SelectTrigger className="w-full bg-transparent border dark:border-zinc-800 dark:bg-[#1D1916]">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
        </Select>
    </div>

    <Button className="w-full mt-5 bg-[#E11D48] hover:bg-[#E11D48]/80 text-white">Submit</Button>
  </div>
}