import { SettingsCard } from '@/features/accountManager/settings/components/SettingsCard'
import { getSession } from '@/utils/CacheSession'
import { redirect } from 'next/navigation'
import { UserProps } from '@/lib/types'

const SettingsUserPage = async () => {
  const session = await getSession()
  const user = session?.user as UserProps
  
  if(!session) {
    redirect("/")
  }

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-5 border-b dark:border-zinc-800 border-zinc-200 w-fit pb-2">Account settings</h2>
      <SettingsCard userImageUrl={user.image} userName={user.name}/>
    </section>
  )
}

export default SettingsUserPage