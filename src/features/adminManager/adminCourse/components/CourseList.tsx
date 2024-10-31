import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

export const CourseList = ({courses}: {courses: any}) => {
  return <div className="w-full max-md:w-full mx-auto rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6">
    <Table>
  <TableCaption>A list of your courses.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] text-md">Image</TableHead>
      <TableHead className="flex-1 text-md">Title</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {courses.map((course: any) => (
        <TableRow key={course.id} className="hover:bg-zinc-200/30 cursor-pointer dark:hover:bg-zinc-800/80"> 
            <TableCell className="w-[100px]">
                {course.image ? <Image src={course.image} alt={course.title} width={100} height={100} /> : (
                    <div className="w-[45px] h-[45px] shadow-md dark:bg-zinc-800 rounded-full flex items-center justify-center text-md">{course.title.charAt(0)}</div>
                )}
            </TableCell>
            <TableCell className="flex-1 text-md">{course.title}</TableCell>
        </TableRow>
    ))}
  </TableBody>
</Table>
  </div>
}