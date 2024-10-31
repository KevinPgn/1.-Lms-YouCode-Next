import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const EnrolledUser = ({enrolledUsers}: {enrolledUsers: any}) => {
  return <div className="rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-[2]">
    <h3 className="text-lg font-semibold mb-2">Enrolled users</h3>

    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Image</TableHead>
                <TableHead className='w-1/2'>Name</TableHead>
                <TableHead className='w-1/2'>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {enrolledUsers?.map((user: any) => (
                <TableRow key={user.id}>
                    <TableCell>
                        <Image src={user.image} alt={user.name} width={32} height={32} />
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell className='flex items-center gap-2'>
                        <Button variant="outline">View</Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>

    <div className='flex items-center gap-3 mt-5'>
        <Button variant="default" className='text-sm h-9 text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white border dark:border-zinc-800'>Previous</Button>
        <Button variant="default" className='text-sm h-9 text-black hover:bg-gray-100 bg-transparent dark:hover:bg-zinc-800 dark:text-white border dark:border-zinc-800'>Next</Button>
    </div>
  </div>
}