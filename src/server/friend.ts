"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "@/utils/CacheSession"

export const reorderChapters = authenticatedAction
    .schema(z.object({
        items: z.array(z.object({
            id: z.string(),
            order: z.number()
        }))
    }))
    .action(async ({parsedInput: {items}}) => {
        const updates = items.map((item: any) => 
            prisma.chapter.update({
                where: { id: item.id },
                data: { order: item.order }
            })
        );

        const chapters = await prisma.$transaction(updates);
        revalidatePath('/');
        return chapters;
    })

export const createCourseWithDefaultChapter = authenticatedAction
    .schema(z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        level: z.string().min(1),
        category: z.string().min(1),
    }))
    .action(async ({ctx:{userId}, parsedInput:{title, description, image, level, category}}) => {
        const slug = title.toLowerCase().replace(/ /g, "-")
        const existingCourse = await prisma.course.findUnique({
            where: {slug}
        })

        if (existingCourse) {
            throw new Error("Course with this title already exists")
        }

        const course = await prisma.course.create({
            data: {
                title,
                description,
                image,
                level,
                category,
                authorId: userId,
                slug,
                chapters: {
                    create: {
                        title: "Introduction",
                        slug: "introduction",
                        order: 1,
                    }
                }
            },
            include: {
                chapters: true
            }
        })

        revalidatePath(`/`)
        return course
    })