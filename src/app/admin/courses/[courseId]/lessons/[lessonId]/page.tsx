import { BreadCrumbAdminCourseLessonsLessonId } from '@/components/BreadCrumb'
import { ButtonBack } from '@/features/adminManager/adminLesson/components/ButtonBack'
import { LessonInfoLeft } from '@/features/adminManager/adminLesson/components/LessonInfoLeft'
import { LessonInfoRight } from '@/features/adminManager/adminLesson/components/LessonInfoRight'
import { notFound } from 'next/navigation'

interface LessonIdPageProps {
  params: Promise<{
    courseId: string
    lessonId: string
  }>
}

const LessonIdPage = async ({params}: LessonIdPageProps) => {
  const {courseId, lessonId} = await params

  if(!courseId || !lessonId) {
    notFound()
  }

  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCourseLessonsLessonId courseId={courseId} lessonId={lessonId} />

      <section className="max-w-5xl mx-auto">
        <div className='flex items-center justify-between'>
          <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Draft Lesson</h2>
          <ButtonBack />
        </div>

        <div className='flex items-start gap-3'>
            <LessonInfoLeft />
            <LessonInfoRight />
        </div>
      </section>
    </div>
  )
}

export default LessonIdPage