"use client"
import { cn } from "@/lib/utils"
import { CircleDashed, CheckCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SidebarChapter = ({course}: {course: any}) => {
  const pathname = usePathname()

  return <aside className="w-[300px] shadow-md dark:bg-[#1C1816] border dark:border-zinc-800 rounded-xl p-5">
    <h3 className="text-sm font-semibold tracking-tight mb-2">{course.title}</h3>
    <ul>
    {course.chapters.map((chapter: any) => (
      <Link href={`/course/${course.id}/chapter/${chapter.id}`} key={chapter.id} className={cn("w-full h-9 px-5 flex items-center mt-2 border dark:border-zinc-800 rounded-md p-2 hover:bg-zinc-800/10 transition-colors", 
        pathname.includes(`/course/${course.id}/chapter/${chapter.id}`) && "bg-zinc-800",
        chapter.userProgress.some((progress: any) => progress.isCompleted) && "bg-green-500/10 border-green-500"
      )}>
        {chapter.userProgress.some((progress: any) => progress.isCompleted) ? <CheckCircle className="w-4 h-4 mr-2" /> : <CircleDashed className="w-4 h-4 mr-2" />}
        <span className="text-sm font-medium">{chapter.title}</span>
      </Link>
    ))}
    </ul>
  </aside>
}