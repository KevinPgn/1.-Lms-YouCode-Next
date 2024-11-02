"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import {revalidatePath} from "next/cache"


export const editCourse = authenticatedAction
  .schema(z.object({
    courseId: z.string(),
    title: z.string().min(1, "Title is required"),
    image: z.string().url("Must be a valid URL").optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    published: z.boolean().optional()
  }))
  .action(async ({parsedInput: {courseId, title, image, level, description, category, published}, ctx: {userId}}) => {
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
        authorId: userId
      }
    })

    if (!course) {
      throw new Error("Course not found or unauthorized")
    }

    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
        authorId: userId
      },
      data: {
        title,
        image,
        level,
        description,
        category,
        published,
        updatedAt: new Date()
      }
    })

    revalidatePath(`/admin/courses/${courseId}`)

    return updatedCourse
  })
