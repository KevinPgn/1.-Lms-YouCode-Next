"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const ButtonCreateNewCourse = () => {
  const router = useRouter()
  
  return <>
    <Button
    onClick={() => router.push("/admin/courses/new")}
    variant="outline" className="h-9 dark:bg-zinc-800 dark:hover:bg-zinc-800/80 border-none dark:text-zinc-100 text-sm">New Course</Button>
  </>
}