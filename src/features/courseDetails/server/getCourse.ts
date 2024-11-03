"use server"
import prisma from "@/lib/prisma"
import { getSession } from "@/utils/CacheSession"
import {cache} from "react"

export const getCourse = cache(async (courseId: string) => {
    const session = await getSession()
    const userId = session?.user?.id

    const course = await prisma.course.findUnique({
        where: {id: courseId},
        select: {
            id: true,
            title: true,
            image: true,
            description: true,
            level: true,
            category: true,
            author: {
                select: {
                    name: true,
                    image: true
                }
            },
            chapters: {
                select: {
                    id: true,
                    title: true
                }
            },
        }
    })
    return course
})
