import { BreadCrumbAdminCourseLessons } from "@/components/BreadCrumb"
import { LessonsList } from "@/features/adminManager/adminCourseLessons/components/LessonsList"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"


interface CourseLessonsPageProps {
  params: Promise<{
    courseId: string
  }>
}

const CourseLessonsPage = async ({params}: CourseLessonsPageProps) => {
  const {courseId} = await params
  
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: {
        title: true,
        chapters: { select: { id: true, title: true, published: true, order: true } }
    }
  })

  if(!course) {
    notFound()
  }

  
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCourseLessons courseId={courseId} />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Lessons . {course.title}</h2>

        <LessonsList courseId={courseId} chapters={course.chapters} />
      </section>
    </div>
  )
}

export default CourseLessonsPage