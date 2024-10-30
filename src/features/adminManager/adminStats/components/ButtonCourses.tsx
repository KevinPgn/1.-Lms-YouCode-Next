"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const ButtonCourses = () => {
  const router = useRouter()
  
  return <>
    <Button
    className="bg-[#E01C48] text-white hover:bg-[#E01C48]/80 hover:text-white h-9 text-sm"
    onClick={() => router.push("/admin/courses")}>Courses</Button>
  </>
}