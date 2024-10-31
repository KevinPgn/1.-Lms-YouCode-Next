import React from 'react'
import { Suspense } from 'react'
import { BreadCrumbAdminStats } from '@/components/BreadCrumb'
import { ButtonCreateNewCourse } from '@/features/adminManager/adminCourse/components/ButtonCreateNewCourse'
import { getUserCourses } from '@/features/adminManager/adminCourse/server/getUserCourse'
import { CourseList } from '@/features/adminManager/adminCourse/components/CourseList'


const AdminCoursesPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminStats />

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
  if(result.data.length === 0) return <div>No courses found</div>

  return <CourseList courses={result.data} />
}