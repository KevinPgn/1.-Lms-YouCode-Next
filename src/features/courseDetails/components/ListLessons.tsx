import Link from "next/link"
import { CircleDashed } from "lucide-react"

export const ListLessons = ({lessons}: {lessons: any[]}) => {
  return <div className="flex flex-col gap-1">
    {lessons.map((lesson) => (
      <Link href={`/course/${lesson.id}`} key={lesson.id} className="w-full h-9 px-5 flex items-center mt-2 border dark:border-zinc-800 rounded-md p-2 hover:bg-zinc-800/10 transition-colors">
        <CircleDashed className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">{lesson.title}</span>
      </Link>
    ))}
  </div>
}