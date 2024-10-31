import React from 'react'
import { getCourseId } from '@/features/adminManager/adminCourseId/server/getCourseId'
import { BreadCrumbAdminCourseId } from '@/components/BreadCrumb'
import { CourseInfo } from '@/features/adminManager/adminCourseId/components/CourseInfo'
import { EnrolledUser } from '@/features/adminManager/adminCourseId/components/EnrolledUser'

interface CourseIdPageProps {
    params: Promise<{
        courseId: string
    }>
}

const CourseIdPage = async ({params}: CourseIdPageProps) => {
  const {courseId} = await params
  const course = await getCourseId({courseId})

  const enrolledUsers = course?.data?.enrolledUsers

  return (
   <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCourseId courseId={courseId} />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Courses</h2>

        <div className='flex items-start gap-3'>
            <EnrolledUser enrolledUsers={enrolledUsers} />
            <CourseInfo />
        </div>
      </section>
    </div>
  )
}

export default CourseIdPage