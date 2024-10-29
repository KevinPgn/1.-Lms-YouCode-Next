"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "@/utils/CacheSession"
/*
model Course {
  id String @id @default(cuid())
  slug String @unique
  title String
  description String?
  image String?
  level String?
  category String?

  published Boolean @default(false)

  authorId String
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  chapters Chapter[]
  enrolledUsers EnrolledUser[]
  courseReviews CourseReview[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([authorId])
}

model Chapter {
  id String @id @default(cuid())
  slug String @unique
  title String
  content String?
  videoUrl String?

  published Boolean @default(false)
  order Int

  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)
  userProgress UserProgress[]
  chapterNotes ChapterNote[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([courseId])
}

model EnrolledUser {
  id String @id @default(cuid())

  userId String
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  courseId String
  course Course @relation(fields: [courseId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([courseId])
  @@unique([userId, courseId])
}

model UserProgress {
  id String @id @default(cuid())

  isCompleted Boolean @default(false)
  completedAt DateTime?
  progress Int @default(0)

  userId String
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  chapterId String
  chapter Chapter @relation(fields: [chapterId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([userId])
  @@index([chapterId])
  @@unique([userId, chapterId])
}unique([userId, chapterId])

*/ 

export const createCourse = authenticatedAction
    .schema(z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        level: z.string().min(1),
        category: z.string().min(1),
    }))
    .action(async ({ctx:{userId}, parsedInput:{title, description, image, level, category}}) => {
        const slug = title.toLowerCase().replace(/ /g, "-")
        const existingCourse = await prisma.course.findUnique({
            where: {slug}
        })

        if (existingCourse) {
            throw new Error("Course with this title already exists")
        }

        const course = await prisma.course.create({
            data: {
                title,
                description,
                image,
                level,
                category,
                authorId: userId,
                slug,
            }
        })

        revalidatePath(`/`)
        return course
    })

export const createChapter = authenticatedAction
    .schema(z.object({
        courseId: z.string().min(1),
        title: z.string().min(1),
        content: z.string().optional(),
        videoUrl: z.string().optional(),
    }))
    .action(async ({ctx:{userId}, parsedInput:{courseId, title, content, videoUrl}}) => {
        const session = await getSession()
        const slug = title.toLowerCase().replace(/ /g, "-")
        
        if(session?.user?.id !== userId) throw new Error("You cant create a chapter for this course because you are not the author")

        const existingChapter = await prisma.chapter.findUnique({ where: {slug} })
        if (existingChapter) throw new Error("Chapter with this title already exists")

        const lastChapter = await prisma.chapter.findFirst({
            where: { courseId },
            orderBy: { order: 'desc' }
        })
        const newOrder = lastChapter ? lastChapter.order + 1 : 1
        

        const chapter = await prisma.chapter.create({
            data: {
                title,
                content,
                videoUrl,
                slug,
                courseId,
                order: newOrder,
            }
        })

        revalidatePath(`/`)
        return chapter
    })
