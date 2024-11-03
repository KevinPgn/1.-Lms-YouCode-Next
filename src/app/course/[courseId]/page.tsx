import { Suspense } from "react"
import { CourseDetails } from "@/features/courseDetails/components/CourseDetails"
import { getCourse } from "@/features/courseDetails/server/getCourse"

interface CourseExplorerIdPageProps {
    params: Promise<{
        courseId: string
    }>
}

const CourseExplorerIdPage = async ({params}: CourseExplorerIdPageProps) => {
  const {courseId} = await params
  const course = await getCourse(courseId)

  return (
    <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Course</h2>

        <Suspense fallback={<div>Loading...</div>}>
            <CourseDetails course={course} />
        </Suspense>
    </section>
  )
}

export default CourseExplorerIdPage