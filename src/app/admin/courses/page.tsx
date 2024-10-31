import React from 'react'
import { Suspense } from 'react'
import { BreadCrumbAdminCourses } from '@/components/BreadCrumb'
import { ButtonCreateNewCourse } from '@/features/adminManager/adminCourse/components/ButtonCreateNewCourse'
import { getUserCourses } from '@/features/adminManager/adminCourse/server/getUserCourse'
import { CourseList } from '@/features/adminManager/adminCourse/components/CourseList'


const AdminCoursesPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminCourses />

      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Courses</h2>
          <ButtonCreateNewCourse />
        </div>

        <Suspense fallback={<div>Loading...</div>}> 
          <CoursesContent />
        </Suspense>
        
      </section>
    </div>
  )
}

export default AdminCoursesPage

async function CoursesContent(){
  const result = await getUserCourses({})
  if (!result?.data) {
    throw new Error("Failed to fetch courses")
  }
  if(result.data.length === 0) return <div className='w-full max-md:w-full mx-auto rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6'>
    <h2 className='text-xl font-semibold text-center'>No courses found try to create one</h2>
  </div>

  return <CourseList courses={result.data} />
}