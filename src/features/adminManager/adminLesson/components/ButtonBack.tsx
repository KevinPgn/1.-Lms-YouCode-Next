"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export const ButtonBack = () => {
  const router = useRouter()
  
  return <>
    <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2 text-sm font-medium dark:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white">
      Back
    </Button>
  </>
}