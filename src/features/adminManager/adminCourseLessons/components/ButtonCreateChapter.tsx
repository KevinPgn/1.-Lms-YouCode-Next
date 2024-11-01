"use client"
import {Button} from "@/components/ui/button"
import {createLesson} from "../server/createLesson"

export const ButtonCreateChapter = ({courseId}: {courseId: string}) => {
  return <>
    <Button
    onClick={() => createLesson({courseId})}
    variant="outline" className="h-8 text-xs dark:bg-zinc-800 dark:hover:bg-zinc-700 border dark:border-zinc-800">Create chapter</Button>
  </>
}