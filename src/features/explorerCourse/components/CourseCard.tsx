import Image from "next/image"
import Link from "next/link"

export const CourseCard = ({course}: {course: any}) => {
  return <Link href={`/course/${course.id}`} className="flex items-start gap-4 border border-zinc-200 dark:border-zinc-800 shadow-md dark:bg-[#1C1816] p-7 px-8 rounded-xl cursor-pointer dark:hover:bg-[#24201D]">
    {course.image ? <Image src={course.image} alt={course.title} width={55} height={55} className="rounded-full w-[55px] h-[55px] object-cover" /> : <div className="w-[55px] flex items-center justify-center h-[55px] bg-zinc-200 dark:bg-zinc-800 rounded-md">
        {course.title.split(" ").map((word: string) => word[0]).join("")}
        </div>}
    <div className="flex flex-col gap-1">
      <h3>{course.title}</h3>
      <div className="flex items-center gap-1">
        <Image src={course.author.image} alt={course.author.name} width={25} height={25} className="rounded-full w-[35px] h-[35px] object-cover" />
        <p className="text-md text-gray-500 ml-2 dark:text-gray-400">{course.author.name}</p>
      </div>
    </div>
  </Link>
}