"use client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export const CardAccountButton = () => {
  const router = useRouter()

  return <div className="w-full flex flex-col gap-2 items-end">
    <Button
    onClick={() => router.push("/account/settings")}
    variant="outline" className="w-full dark:hover:bg-zinc-800 bg-transparent dark:border-zinc-800">Settings</Button>
    <Button
    onClick={() => router.push("/admin")}
    variant="outline" className="w-full dark:hover:bg-zinc-800 bg-transparent dark:border-zinc-800">Admin</Button>
    <Button variant="outline" className="w-fit px-2 mt-5 h-9 text-xs flex items-center gap-2 bg-transparent dark:border-zinc-800 dark:hover:bg-zinc-800">
      <LogOut className="w-3 h-3" />
      Logout
    </Button>
  </div>
}