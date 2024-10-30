import { BookOpen, Users, Monitor } from 'lucide-react'

export const StatsTotalCourses = () => {
  return <div className="w-full max-md:w-full mx-auto rounded-lg border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-5">
    <h3 className="font-semibold">Quick stats</h3>

    {/* count users, count chapters total and count total course */}
    <div className='flex flex-col gap-1 mt-5'>
      <div className='flex items-center gap-2'>
        <Users size={18} />
        <span className='text-sm'>0 Users</span>
      </div>
      <div className='flex items-center gap-2'>
        <BookOpen size={18} />
        <span className='text-sm'>0 Chapters</span>
      </div>
      <div className='flex items-center gap-2'>
        <Monitor size={18} />
        <span className='text-sm'>0 Courses</span>
      </div>
    </div>
  </div>
}