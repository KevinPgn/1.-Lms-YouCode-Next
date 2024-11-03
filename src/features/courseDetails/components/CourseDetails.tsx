import {Suspense} from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ListLessons } from "./ListLessons"
import { JoinCourseBtn } from "./JoinCourseBtn"
import { getSession } from "@/utils/CacheSession"

export const CourseDetails = async ({course}: {course: any}) => {
  const session = await getSession()
  const courseData = course.course
  const enrolled = course.isEnrolled
  
  return <div className="flex gap-4 mt-5 mb-5 flex-col md:flex-row">
    <div className="flex-[2] h-fit shadow-md dark:bg-[#1C1816] border dark:border-zinc-800 p-7 px-8 rounded-xl">
      <div className="flex items-start gap-3">
        {courseData.image ? <Image src={courseData.image} alt={courseData.title} width={55} height={55} className="rounded-full w-[55px] h-[55px] object-cover" /> : <div className="w-[55px] flex items-center justify-center h-[55px] bg-zinc-200 dark:bg-zinc-800 rounded-md">
            {courseData.title.split(" ").map((word: string) => word[0]).join("")}
        </div>}
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{courseData.title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <Image src={courseData.author.image} alt={courseData.author.name} width={25} height={25} className="rounded-full w-[35px] h-[35px] object-cover" />
            <p className="text-sm text-gray-500 dark:text-gray-400">{courseData.author.name}</p>
          </div>
        </div>
      </div>

      {/* description */}
      <p className="text-md text-gray-500 dark:text-gray-400 mt-3">{courseData.description}</p>

      <div className="flex items-center gap-3 mt-3">
        <Badge className={`text-sm px-2 py-1 rounded-md ${
          courseData.level === "beginner" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" :
          courseData.level === "intermediate" ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" :
          "bg-red-500/10 text-red-500 hover:bg-red-500/20"
        }`}>
          {courseData.level}
        </Badge>
        <Badge variant="outline">{courseData.category}</Badge>
      </div>
      
      {!enrolled ? <JoinCourseBtn courseId={courseData.id} />: null}
    </div>
    <div className="flex-1 h-fit shadow-md dark:bg-[#1C1816] border dark:border-zinc-800 p-7 px-8 rounded-xl">
      <h3 className="text-sm font-semibold tracking-tight mb-2">Lessons</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ListLessons lessons={courseData.chapters} isEnrolled={enrolled} />
      </Suspense>
      {!enrolled ? <span className="text-sm text-red-500 dark:text-red-400 mt-4 text-center">You need to be enrolled in the course to access the lessons</span> : null}
    </div>
  </div>
}