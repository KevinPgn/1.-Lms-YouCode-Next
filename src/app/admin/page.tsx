import BreadCrumbAdminStats from "@/components/BreadCrumb"
import { ButtonCourses } from "@/features/adminManager/adminStats/components/ButtonCourses"
import { StatsTotalCourses } from "@/features/adminManager/adminStats/components/StatsTotalCourses"
import { getSession } from "@/utils/CacheSession"
import { redirect } from "next/navigation"
import { getStatsTotal } from "@/features/adminManager/adminStats/server/CountStats"
import { Suspense } from "react"
import { absoluteUrl } from "@/utils/AbsoluteUrl"

export const metadata = {
  title: "Admin Stats",
  description: "Admin Stats",
  openGraph: {
    title: "Admin Stats",
    description: "Admin Stats",
    type: "website",
    url: absoluteUrl("/admin"),
    siteName: "YouCode",
  },
  robots: {
    index: true,
    follow: true
  },
}

const AdminPage = async () => {
  const session = await getSession()
  if(!session) redirect("/login")

  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminStats />

      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Courses</h2>
          <ButtonCourses />
        </div>
        <Suspense fallback={<div>Loading...</div>}> 
          <StatsContent />
        </Suspense>
      </section>
    </div>
  )
}

export default AdminPage

async function StatsContent(){
  const result = await getStatsTotal({})
  if (!result?.data) {
    throw new Error("Failed to fetch stats")
  }
  
  const {users, chapters, courses} = result.data

  return <StatsTotalCourses users={users} chapters={chapters} courses={courses} />
}
