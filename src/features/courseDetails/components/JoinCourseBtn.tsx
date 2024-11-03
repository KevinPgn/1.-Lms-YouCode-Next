"use client"
import { Button } from "@/components/ui/button"

export const JoinCourseBtn = ({courseId}: {courseId: string}) => {
  return <Button className="w-fit px-5 mt-7 h-9 bg-[#E11D48] text-white hover:bg-[#E11D48]/80">Join</Button>
}