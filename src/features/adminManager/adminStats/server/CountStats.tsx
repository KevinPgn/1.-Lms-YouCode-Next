"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {cache} from "react"

// get total users enrolled to each courses of the user connected, total chapters and total courses
export const getStatsTotal = cache(authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
        const [users, chapters, courses] = await Promise.all([
            prisma.user.count({where:{enrolledCourses:{some:{course:{authorId:userId}}}}}),
            prisma.chapter.count({where:{course:{authorId:userId}}}),
            prisma.course.count({where:{authorId:userId}})
        ])

        return { users, chapters, courses }
    }))
