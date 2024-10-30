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
    <SettingsCard userImageUrl={user.image} userName={user.name}/>
  )
}

export default SettingsUserPage