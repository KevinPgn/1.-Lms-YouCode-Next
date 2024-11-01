"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const ButtonCreateLessons = ({courseId}: {courseId: string}) => {
  const router = useRouter()

  return <>
    <Button
      onClick={() => router.push(`/admin/courses/${courseId}/lessons`)}
      variant="outline" className="text-sm text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white border dark:border-zinc-800">Edit Lessons</Button>
  </>
}