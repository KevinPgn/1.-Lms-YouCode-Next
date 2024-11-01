"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {redirect} from "next/navigation"

export const createLesson = authenticatedAction
    .schema(z.object({
        courseId: z.string().min(1)
    }))
    .action(async ({ctx:{userId}, parsedInput:{courseId}}) => {
        const lastChapter = await prisma.chapter.findFirst({
            where: { courseId },
            orderBy: { order: 'desc' }
        });

        const newOrder = (lastChapter?.order ?? 0) + 1;
        const title = "Draft Lesson";
        const slug = `${title.toLowerCase().replace(/ /g, "-")}-${newOrder}`;

        const chapter = await prisma.chapter.create({
            data: {
                title,
                content: "Default content",
                slug,
                courseId,
                published: false,
                order: newOrder,
            }
        });

        return chapter;
    })
