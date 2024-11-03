import { SidebarChapter } from "@/features/chapterDetails/components/SidebarChapter"
import { getCourseChapter } from "@/features/chapterDetails/server/getChapter"

export default async function ChapterLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{
        courseId: string
        chapterId: string
    }>
}) {
    const {courseId} = await params
    const chapter = await getCourseChapter({courseId})
    

    return <div className="flex gap-5 px-5 my-5">
        <SidebarChapter courseTitle={chapter?.title ?? ""} courseChapters={chapter?.chapters ?? []} courseId={courseId} />
        {children}
    </div>
}