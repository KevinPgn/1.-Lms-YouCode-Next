"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {cache} from "react"

export const getCourseEdit = cache(authenticatedAction
    .schema(z.object({
        courseId: z.string().min(1),
    }))
    .action(async ({ctx:{userId}, parsedInput:{courseId}}) => {
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
                authorId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                image: true,
                level: true,
                category: true,
            }
        })

        if (!course) {
            throw new Error("Course not found")
        }

        return course
    }))