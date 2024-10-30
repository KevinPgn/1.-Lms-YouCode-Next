"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "@/utils/CacheSession"

export const getStatsTotal = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId}}) => {
        
    })