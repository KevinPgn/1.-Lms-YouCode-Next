import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ButtonEditCourse } from './ButtonEditCourse'
import { ButtonCreateLessons } from './ButtonCreateLessons'
 
export const CourseInfo = ({course}: {course: any}) => {
  return <div className="rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg p-6 flex-1">
    <div className="flex items-center gap-3 flex-wrap mb-5">
      {course.image ? <Image src={course.image} alt={course.title} width={40} height={40} className='w-[40px] h-[40px] object-cover rounded-full' /> : <div className='w-[40px] h-[40px] bg-gray-200 rounded-full' />}
      <h3 className="text-md font-medium">{course.title}</h3>
    </div>

    {course.published ? <Badge className='uppercase'>Published</Badge> : <Badge variant="destructive" className='uppercase'>Draft</Badge>}

    {/* numbers of enrolled users and chapters */}
    <div className="flex flex-col gap-1 mt-5">
      <span className='text-sm'>{course._count.enrolledUsers} Users</span>
      <span className='text-sm'>{course._count.chapters} Lessons</span>
    </div>

    <div className='flex flex-col gap-1 mt-3'>
      <ButtonEditCourse courseId={course.id} />
      <ButtonCreateLessons courseId={course.id} />
    </div>
  </div>
}