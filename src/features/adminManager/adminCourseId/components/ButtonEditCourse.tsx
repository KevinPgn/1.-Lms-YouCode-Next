"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const ButtonEditCourse = ({courseId}: {courseId: string}) => {
  const router = useRouter()
  return <>
    <Button variant="outline" className="text-sm border dark:border-zinc-800 text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white" onClick={() => router.push(`/admin/courses/${courseId}/edit`)}>Edit</Button>
  </>
}