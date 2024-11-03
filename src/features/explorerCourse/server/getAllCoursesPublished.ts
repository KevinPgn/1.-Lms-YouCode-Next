"use server"
import prisma from "@/lib/prisma";
import { cache } from "react";
import { getSession } from "@/utils/CacheSession";

export const getAllCoursesPublished = cache(async () => {
    const session = await getSession()
    
    const courses = await prisma.course.findMany({
        where: {
            published: true,
            authorId: {
                not: session?.user?.id
            },
        },
        select: {
            id: true,
            title: true,
            image: true,
            author: {
                select: {
                    name: true,
                    image: true
                }
            }
        },
        take: 15
    })
    return courses
})