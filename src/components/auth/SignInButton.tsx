"use client"
import { Button } from "@/components/ui/button"
import {signIn} from "next-auth/react"
import { LogIn } from "lucide-react"

export const SignInButton = () => {
  return <>
    <Button variant="outline" className="bg-transparent h-8 dark:hover:bg-zinc-800 dark:hover:border-zinc-800 text-xs flex items-center gap-2 px-3" onClick={() => signIn()}>
      <LogIn className="w-3 h-3" />
      Login
    </Button>
  </>
}