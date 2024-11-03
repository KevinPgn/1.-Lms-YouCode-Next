import { ContenuChapter } from "@/features/chapterDetails/components/ContenuChapter"
import { getChapter } from "@/features/chapterDetails/server/getChapter"

interface ChapterIdPageProps {
    params: Promise<{
        chapterId: string
        courseId: string
    }>
}

const ChapterIdPage = async ({params}: ChapterIdPageProps) => {
  const {chapterId, courseId} = await params

  const {course, isEnrolled} = await getChapter({chapterId, courseId})
  
  return (
    <section className='flex-1 dark:bg-[#1C1816] border dark:border-zinc-800 rounded-xl p-5'>
      <ContenuChapter isEnrolled={isEnrolled} chapterContent={course?.chapters[0].content ?? ""} chapterVideoUrl={course?.chapters[0].videoUrl ?? ""} chapterTitle={course?.chapters[0].title ?? ""} />
    </section>
  )
}

export default ChapterIdPage