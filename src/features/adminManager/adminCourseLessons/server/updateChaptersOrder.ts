"use server"

import prisma from "@/lib/prisma"
import { authenticatedAction } from "@/lib/safe-actions"
import { z } from "zod"

export const updateChaptersOrder = authenticatedAction
  .schema(z.object({
    chapters: z.array(z.object({
      id: z.string(),
      order: z.number()
    }))
  }))
  .action(async ({ ctx: { userId }, parsedInput: { chapters } }) => {
    try {
      // First verify that user owns the course
      const firstChapter = await prisma.chapter.findFirst({
        where: { id: chapters[0].id },
        include: {
          course: true
        }
      });

      if (!firstChapter || firstChapter.course.authorId !== userId) {
        throw new Error("Unauthorized: Only course creator can update chapter order");
      }

      // Use transaction to ensure all updates are performed
      await prisma.$transaction(
        chapters.map(({ id, order }: { id: string, order: number }) =>
          prisma.chapter.update({
            where: { id },
            data: { order }
          })
        )
      );

      // Verify updates were successful
      const updatedChapters = await prisma.chapter.findMany({
        where: {
          id: {
            in: chapters.map((c: { id: string }) => c.id)
          }
        },
        orderBy: {
          order: 'asc'
        }
      });

      return { success: true, chapters: updatedChapters };
    } catch (error) {
      console.error("Error in updateChaptersOrder:", error);
      throw new Error("Failed to update chapters order");
    }
  });