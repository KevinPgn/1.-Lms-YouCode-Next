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
    const course = await getCourseChapter({courseId})
    console.log(course)

    return <div className="flex gap-5 px-10 my-5">
        <SidebarChapter course={course}/>
        {children}
    </div>
}