import { BreadCrumbAdminEditCourse } from '@/components/BreadCrumb'
import EditCourse from '@/features/adminManager/adminCourseEdit/components/EditCourse'
import { getCourseEdit } from '@/features/adminManager/adminCourseEdit/server/getCourseEdit'

interface EditCoursePageProps {
    params: Promise<{
        courseId: string
    }>
}

const EditCoursePage = async ({params}: EditCoursePageProps) => {
  const {courseId} = await params
  const course = await getCourseEdit({courseId})

  const result = course?.data

  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminEditCourse courseId={courseId} />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Edit Course</h2>

        <EditCourse course={result} />
      </section>
    </div>
  )
}

export default EditCoursePage