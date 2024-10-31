"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {cache} from "react"

export const getUserCourses = cache(authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
        const courses = await prisma.course.findMany({
            where: {authorId: userId},
            select: {
                id: true,
                title: true,
                image: true,
                slug: true,
            },
            take: 10
        })

        return courses
    }))
