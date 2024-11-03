"use server"
import prisma from "@/lib/prisma";

export const getCourseChapter = async ({courseId}: {courseId: string}) => {
    const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: { 
            id: true,
            title: true,
            chapters: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })

    return course
}

export const getChapter = async ({chapterId}: {chapterId: string}) => {
    const chapter = await prisma.chapter.findUnique({
        where: { id: chapterId },
        select:{content: true, videoUrl: true, title: true}
    })

    return chapter
}
