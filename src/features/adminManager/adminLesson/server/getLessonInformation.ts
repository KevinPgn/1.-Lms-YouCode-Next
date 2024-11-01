"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"

export const getLessonInformation = authenticatedAction
    .schema(z.object({
        lessonId: z.string()
    }))
    .action(async ({ ctx: { userId }, parsedInput: { lessonId } }) => {
        const chapter = await prisma.chapter.findFirst({
            where: { id: lessonId },
            select: { course: { select: { authorId: true } } }
        })

        if(!chapter || chapter.course.authorId !== userId) throw new Error("Unauthorized")

        const chapterLessons = await prisma.chapter.findUnique({
            where: { id: lessonId },
            select: {
                title: true,
                published: true,
                content: true
            }
        })

        return chapterLessons
    })