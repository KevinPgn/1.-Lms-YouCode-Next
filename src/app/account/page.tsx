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
    <div className='px-2 flex-1 min-h-[calc(100vh-250px)]'>
        <CardAccount 
          userImage={user.image} 
          userEmail={user.email} 
          userName={user.name} 
        />    
    </div>
  )
}

export default AccountPage