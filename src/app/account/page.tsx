import { CardAccount } from '@/features/account/components/CardAccount'
import { getSession } from '@/utils/CacheSession'
import { UserProps } from '@/lib/types'

const AccountPage = async () => {
  const session = await getSession()
  const user = session?.user as UserProps
  
  return (
    <>
        <CardAccount user={user} />    
    </>
  )
}

export default AccountPage