"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "@/utils/CacheSession"

// edit profile
export const editProfile = authenticatedAction
    .schema(z.object({
        name: z.string(),
        image: z.string().optional(),
    }))
    .action(async ({parsedInput:{name, image}, ctx:{userId}}) => {
        const exisintgUser = await prisma.user.findUnique({where: {id: userId}})
        if(!exisintgUser) throw new Error("User not found")
        
        const user = await prisma.user.update({
            where: {id: userId},
            data: {
                name,
                image
            }
        })
        revalidatePath(`/settings`)
        return user
    })