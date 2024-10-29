"use client"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export const UserMenu = ({userImage, userName}: {userImage: string, userName: string}) => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  return <>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 border dark:border-zinc-800 rounded-md p-1 px-3 dark:hover:bg-zinc-800 dark:hover:border-zinc-800">
        <img src={userImage} alt={userName} width={25} height={25} className="rounded-full" />
        <span className="text-xs">{userName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => setIsLogoutDialogOpen(true)}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Dialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
        <DialogContent className="bg-[#0d0a08] border-zinc-800">
          <DialogHeader>
            <DialogTitle>Are you sure you want to logout?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex gap-2 mt-4">
            <Button variant="ghost" className="border border-zinc-800" onClick={() => setIsLogoutDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => signOut()} className="flex items-center">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  </>
}