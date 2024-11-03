import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export const CourseDetails = ({course}: {course: any}) => {
  return <div className="flex gap-4 mt-5 mb-5 flex-col md:flex-row">
    <div className="flex-[2] shadow-md dark:bg-[#1C1816] border dark:border-zinc-800 p-7 px-8 rounded-xl">
      <div className="flex items-start gap-3">
        {course.image ? <Image src={course.image} alt={course.title} width={55} height={55} className="rounded-full w-[55px] h-[55px] object-cover" /> : <div className="w-[55px] flex items-center justify-center h-[55px] bg-zinc-200 dark:bg-zinc-800 rounded-md">
            {course.title.split(" ").map((word: string) => word[0]).join("")}
        </div>}
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{course.title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <Image src={course.author.image} alt={course.author.name} width={25} height={25} className="rounded-full w-[35px] h-[35px] object-cover" />
            <p className="text-sm text-gray-500 dark:text-gray-400">{course.author.name}</p>
          </div>
        </div>
      </div>

      {/* description */}
      <p className="text-md text-gray-500 dark:text-gray-400 mt-3">{course.description}</p>

      <div className="flex items-center gap-3 mt-3">
        <Badge className={`text-sm px-2 py-1 rounded-md ${
          course.level === "beginner" ? "bg-green-500/10 text-green-500" :
          course.level === "intermediate" ? "bg-orange-500/10 text-orange-500" :
          "bg-red-500/10 text-red-500"
        }`}>
          {course.level}
        </Badge>
        <Badge variant="outline">{course.category}</Badge>
      </div>
    </div>
    <div className="flex-1 shadow-md dark:bg-[#1C1816] border dark:border-zinc-800 p-7 px-8 rounded-xl">
      <h3 className="text-sm font-semibold tracking-tight">Lessons</h3>
    </div>
  </div>
}