"use client"

import { Button } from "@/components/ui/button"

export const ButtonCreateLessons = ({courseId}: {courseId: string}) => {
  return <>
    <Button variant="outline" className="text-sm text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white border dark:border-zinc-800">Create Lesson</Button>
  </>
}