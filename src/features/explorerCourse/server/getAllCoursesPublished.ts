"use server"
import prisma from "@/lib/prisma";
import { cache } from "react";

export const getAllCoursesPublished = cache(async () => {
    const courses = await prisma.course.findMany({
        where: { published: true },
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