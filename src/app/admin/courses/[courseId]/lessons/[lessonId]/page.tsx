import { BreadCrumbAdminCourseLessonsLessonId } from '@/components/BreadCrumb'
import { notFound } from 'next/navigation'

interface LessonIdPageProps {
  params: Promise<{
    courseId: string
    lessonId: string
  }>
}

const LessonIdPage = async ({params}: LessonIdPageProps) => {
  const {courseId, lessonId} = await params


  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCourseLessonsLessonId courseId={courseId} lessonId={lessonId} />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Draft Lesson</h2>

        
      </section>
    </div>
  )
}

export default LessonIdPage