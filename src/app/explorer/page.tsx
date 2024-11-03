import { Suspense } from "react"
import { ListCoursePublished } from "@/features/explorerCourse/components/ListCoursePublished"
import { getAllCoursesPublished } from "@/features/explorerCourse/server/getAllCoursesPublished"

const ExplorerPage = async () => {
  const courses = await getAllCoursesPublished()

  return (
    <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Explorer</h2>

        <Suspense fallback={<div>Loading...</div>}>
            <ListCoursePublished courses={courses} />
        </Suspense>
    </section>  
  )
}

export default ExplorerPage