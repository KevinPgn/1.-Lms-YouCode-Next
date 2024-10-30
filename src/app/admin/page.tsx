import BreadCrumbAdminStats from "@/components/BreadCrumb"
import { getSession } from "@/utils/CacheSession"
import { redirect } from "next/navigation"

const AdminPage = async () => {
  const session = await getSession()
  if(!session) redirect("/login")
  
  return (
    <div className="w-full min-h-[calc(100vh-250px)]">
      <BreadCrumbAdminStats />
    </div>
  )
}

export default AdminPage