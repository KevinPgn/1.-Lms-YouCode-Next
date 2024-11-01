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
  .action(async ({ parsedInput: { chapters } }) => {
    try {
      // Utiliser une transaction pour s'assurer que toutes les mises à jour sont effectuées
      await prisma.$transaction(
        chapters.map(({ id, order }: { id: string, order: number }) =>
          prisma.chapter.update({
            where: { id },
            data: { order }
          })
        )
      );

      // Vérifier que les mises à jour ont bien été effectuées
      const updatedChapters = await prisma.chapter.findMany({
        where: {
          id: {
            in: chapters.map((c: any) => c.id)
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