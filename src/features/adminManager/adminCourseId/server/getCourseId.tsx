"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {cache} from "react"

// get the course by id, but only the creator can see it
export const getCourseId = cache(authenticatedAction
    .schema(z.object({
        courseId: z.string().min(1, "Course ID is required"),
    }))
    .action(async ({ctx:{userId}, parsedInput:{courseId}}) => {
        const course = await prisma.course.findUnique({
            where: {id: courseId, authorId: userId},
            select: {
                id: true,
                image: true,
                title: true,
                published: true,
                enrolledUsers: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                image: true,
                                name: true,
                            }
                        }
                    },
                    take: 5
                },
                _count: {
                    select: {
                        chapters: true,
                        enrolledUsers: true
                    }
                }
            },
        })
        if (!course) {
            throw new Error("Course not found")
        }
        return course
    })
)
