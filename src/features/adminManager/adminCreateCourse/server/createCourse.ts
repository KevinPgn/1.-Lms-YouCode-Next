"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {redirect} from "next/navigation"

export const createCourse = authenticatedAction
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
            }
        })

        redirect(`/admin/courses/${course.id}`)
    })
