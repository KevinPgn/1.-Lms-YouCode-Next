import { CardAccount } from '@/features/accountManager/account/components/CardAccount'
import { getSession } from '@/utils/CacheSession'
import { UserProps } from '@/lib/types'
import { redirect } from 'next/navigation'
import { Footer } from '@/components/footer/Footer'

const AccountPage = async () => {
  const session = await getSession()
  const user = session?.user as UserProps

  if(!session) {
    redirect("/")
  }
  
  return (
    <div className='px-2'>
        <CardAccount 
          userImage={user.image} 
          userEmail={user.email} 
          userName={user.name} 
        />    
        <Footer />
    </div>
  )
}

export default AccountPage