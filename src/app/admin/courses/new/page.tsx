import React from 'react'
import { BreadCrumbAdminCreateNewCourse } from '@/components/BreadCrumb'
import { ButtonCourses } from '@/features/adminManager/adminStats/components/ButtonCourses'

const CreateNewCoursePage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCreateNewCourse />

      <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Create Course</h2>

        
      </section>
    </div>
  )
}

export default CreateNewCoursePage