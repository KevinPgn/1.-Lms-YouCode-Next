"use client"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export const UserMenu = ({userImage, userName}: {userImage: string, userName: string}) => {
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 border dark:border-zinc-800 rounded-md p-1 px-3 dark:hover:bg-zinc-800 dark:hover:border-zinc-800">
        <img src={userImage} alt={userName} width={25} height={25} className="rounded-full" />
        <span className="text-xs">{userName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  </>
}