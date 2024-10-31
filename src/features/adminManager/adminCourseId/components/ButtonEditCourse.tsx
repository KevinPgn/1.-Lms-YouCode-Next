"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const ButtonEditCourse = ({courseId}: {courseId: string}) => {
  const router = useRouter()
  return <>
    <Button variant="outline" className="className='text-sm text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white border dark:border-zinc-800'" onClick={() => router.push(`/admin/courses/${courseId}/edit`)}>Edit</Button>
  </>
}