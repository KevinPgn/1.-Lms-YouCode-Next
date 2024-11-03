"use client"
import { Button } from "@/components/ui/button"

export const ButtonCompletedChapter = ({chapterId}: {chapterId: string}) => {
  return <div className="flex justify-end">
    <Button className="w-fit bg-[#E11D48] hover:bg-[#E11D48]/80 h-9 text-white mt-5">Completed</Button>
  </div>
}