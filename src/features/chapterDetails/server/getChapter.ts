"use server"
import prisma from "@/lib/prisma";
import { getSession } from "@/utils/CacheSession";

export const getCourseChapter = async ({courseId}: {courseId: string}) => {
    const session = await getSession()
    const userId = session?.user?.id

    const course = await prisma.course.findUnique({
        where: { id: courseId },
        select: { 
            id: true,
            title: true,
            chapters: {
                select: {
                    id: true,
                    title: true,
                    userProgress: {
                        where: {
                            userId: userId ?? ''
                        },
                        select: {
                            isCompleted: true,
                        }
                    }
                },
            }
        }
    })

    return course 
}

export const getChapter = async ({chapterId, courseId}: {chapterId: string, courseId: string}) => {    
    const session = await getSession()
    
    const course = await prisma.course.findUnique({
        where: {id: courseId},
        select: {
            chapters: {
                where: {id: chapterId},
                select: {
                    id: true,
                    title: true,
                    content: true,
                    videoUrl: true
                }
            },
            enrolledUsers: {
                select: {
                    userId: true
                }
            }
        },
    })

    return {
        course,
        isEnrolled: course?.enrolledUsers.some(user => user.userId === session?.user?.id)
    }
}
