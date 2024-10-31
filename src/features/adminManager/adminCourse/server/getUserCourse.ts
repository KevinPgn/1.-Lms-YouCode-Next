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
                title: true,
                image: true,
                slug: true,
            }
        })

        return courses
    }))
