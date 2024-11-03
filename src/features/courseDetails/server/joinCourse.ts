"use server"
import prisma from "@/lib/prisma"
import { authenticatedAction } from "@/lib/safe-actions"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const joinCourse = authenticatedAction
    .schema(z.object({
        courseId: z.string()
    }))
    .action(async ({parsedInput:{courseId}, ctx:{userId}}) => {
        const enrolledUser = await prisma.enrolledUser.findFirst({
            where: { userId, courseId }
        })

        if(enrolledUser) throw new Error("You are already enrolled in this course")

        const newEnrolledUser = await prisma.enrolledUser.create({
            data: { userId, courseId }
        })

        revalidatePath(`/course/${courseId}`)

        return newEnrolledUser
    })
