import { BreadCrumbAdminEditCourse } from '@/components/BreadCrumb'
import React from 'react'

interface EditCoursePageProps {
    params: Promise<{
        courseId: string
    }>
}

const EditCoursePage = async ({params}: EditCoursePageProps) => {
  const {courseId} = await params

  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminEditCourse courseId={courseId} />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Edit Course</h2>

       
      </section>
    </div>
  )
}

export default EditCoursePage