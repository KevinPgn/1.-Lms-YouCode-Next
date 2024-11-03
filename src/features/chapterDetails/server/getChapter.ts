"use server"
import prisma from "@/lib/prisma";

export const getChapterTitle = async ({chapterId}: {chapterId: string}) => {
    const chapter = await prisma.chapter.findUnique({
        where: { id: chapterId },
        select: {id: true, title: true}
    })
    return chapter
}
