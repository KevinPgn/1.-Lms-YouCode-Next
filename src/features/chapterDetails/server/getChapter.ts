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
