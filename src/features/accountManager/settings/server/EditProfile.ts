"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "@/utils/CacheSession"

export const editProfile = authenticatedAction
    .schema(z.object({
        image: z.string().min(1),
        name: z.string().min(1),
    }))
    .action(async ({ctx:{userId}, parsedInput:{image, name}}) => {

        const existingUser = await prisma.user.findUnique({ where: {id: userId} })
        if(!existingUser) throw new Error("User not found")

        const user = await prisma.user.update({
            where: {id: userId},
            data: {
                image,
                name,
            }
        })

        revalidatePath(`/account/settings`)
        return user

    })