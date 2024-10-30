import { BookOpen, Users, Monitor } from 'lucide-react'

export const StatsTotalCourses = ({users, chapters, courses}: {users: number, chapters: number, courses: number}) => {
  return <div className="w-full max-md:w-full mx-auto rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6">
    <h3 className="font-semibold">Quick stats</h3>

    {/* count users, count chapters total and count total course */}
    <div className='flex flex-col gap-1 mt-5'>
      <div className='flex items-center gap-2'>
        <Users size={18} />
        <span className='text-sm'>{users} Users</span>
      </div>
      <div className='flex items-center gap-2'>
        <BookOpen size={18} />
        <span className='text-sm'>{chapters} Chapters</span>
      </div>
      <div className='flex items-center gap-2'>
        <Monitor size={18} />
        <span className='text-sm'>{courses} Courses</span>
      </div>
    </div>
  </div>
}