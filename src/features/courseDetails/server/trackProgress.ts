"use server"
import prisma from "@/lib/prisma"
import { authenticatedAction } from "@/lib/safe-actions"
import { z } from "zod"

export const toggleChapterComplete = authenticatedAction
    .schema(z.object({
        chapterId: z.string()
    }))
    .action(async ({parsedInput:{chapterId}, ctx:{userId}}) => {
        const existingProgress = await prisma.userProgress.findUnique({
            where: {
                userId_chapterId: {
                    userId,
                    chapterId
                }
            }
        })

        return await prisma.userProgress.upsert({
            where: {
                userId_chapterId: {
                    userId,
                    chapterId
                }
            },
            create: {
                userId,
                chapterId,
                isCompleted: true,
                completedAt: new Date(),
                progress: 100
            },
            update: {
                isCompleted: !existingProgress?.isCompleted,
                completedAt: !existingProgress?.isCompleted ? new Date() : null,
                progress: !existingProgress?.isCompleted ? 100 : 0
            }
        })
    })