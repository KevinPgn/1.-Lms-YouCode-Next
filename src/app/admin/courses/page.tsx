import React from 'react'
import { ButtonCourses } from '@/features/adminManager/adminStats/components/ButtonCourses'
import { Suspense } from 'react'
import { BreadCrumbAdminStats } from '@/components/BreadCrumb'

const AdminCoursesPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminStats />

      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Courses</h2>
          <ButtonCourses />
        </div>

        <Suspense fallback={<div>Loading...</div>}> 
          
        </Suspense>
        
      </section>
    </div>
  )
}

export default AdminCoursesPage