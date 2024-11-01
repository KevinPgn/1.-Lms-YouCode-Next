"use server"

import prisma from "@/lib/prisma"
import { authenticatedAction } from "@/lib/safe-actions"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export const updateLessonDetails = authenticatedAction
  .schema(z.object({
    lessonId: z.string(),
    title: z.string().min(1),
    published: z.boolean(),
    content: z.string().min(1)
  }))
  .action(async ({ parsedInput: { lessonId, title, published, content }, ctx: { userId } }) => {
    // First verify that user owns the course
    const chapter = await prisma.chapter.findFirst({
      where: { id: lessonId },
      select: { course: { select: { authorId: true } } }
    })

    if(!chapter || chapter.course.authorId !== userId) throw new Error("Unauthorized")

    try {
      const chapter = await prisma.chapter.update({
        where: { id: lessonId },
        data: {
          title,
          published,
          content
        }
      })

      // Revalidate the path after update
      revalidatePath(`/admin/courses/[courseId]/lessons/${lessonId}`)
      
      return { success: true, data: chapter }
    } catch (error) {
      return { success: false, error: "Failed to update lesson" }
    }
  })