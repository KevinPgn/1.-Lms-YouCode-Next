import { ContenuChapter } from "@/features/chapterDetails/components/ContenuChapter"
import { getChapter } from "@/features/chapterDetails/server/getChapter"

interface ChapterIdPageProps {
    params: Promise<{
        chapterId: string
    }>
}

const ChapterIdPage = async ({params}: ChapterIdPageProps) => {
  const {chapterId} = await params
  const chapter = await getChapter({chapterId})

  return (
    <section className='flex-1 dark:bg-[#1C1816] border dark:border-zinc-800 rounded-xl p-5'>
      <ContenuChapter chapterContent={chapter?.content ?? ""} chapterVideoUrl={chapter?.videoUrl ?? ""} chapterTitle={chapter?.title ?? ""} />
    </section>
  )
}

export default ChapterIdPage