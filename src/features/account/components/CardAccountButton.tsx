"use client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export const CardAccountButton = () => {
  return <div className="w-full flex flex-col gap-2 items-end">
    <Button variant="outline" className="w-full hover:bg-zinc-800 bg-transparent dark:border-zinc-800">Settings</Button>
    <Button variant="outline" className="w-full hover:bg-zinc-800 bg-transparent dark:border-zinc-800">Admin</Button>
    <Button variant="outline" className="w-fit px-2 mt-5 h-9 text-xs flex items-center gap-2 bg-transparent dark:border-zinc-800 dark:hover:bg-zinc-800">
      <LogOut className="w-3 h-3" />
      Logout
    </Button>
  </div>
}