import { CardAccount } from '@/features/accountManager/account/components/CardAccount'
import { getSession } from '@/utils/CacheSession'
import { UserProps } from '@/lib/types'
import { redirect } from 'next/navigation'

const AccountPage = async () => {
  const session = await getSession()
  const user = session?.user as UserProps

  if(!session) {
    redirect("/")
  }
  
  return (
    <>
        <CardAccount 
          userImage={user.image} 
          userEmail={user.email} 
          userName={user.name} 
        />    
    </>
  )
}

export default AccountPage