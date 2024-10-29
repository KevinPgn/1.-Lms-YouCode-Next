"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { LogOut } from "lucide-react";

export const UserMenu = ({userImage, userName}: {userImage: string, userName: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      setIsOpen(false);
      setIsDropdownOpen(false);
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className="flex items-center gap-2 border dark:border-zinc-800 rounded-md p-1 px-3 dark:hover:bg-zinc-800 dark:hover:border-zinc-800">
          <img 
            src={userImage} 
            alt={userName} 
            width={25} 
            height={25} 
            className="rounded-full"
          />
          <span className="text-xs text-white">{userName}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => {
            setIsOpen(true);
            setIsDropdownOpen(false);
          }}>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog 
        open={isOpen} 
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) setIsDropdownOpen(false);
        }}
      >
        <DialogContent className="bg-[#0d0a08] text-white border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-white">Are you sure you want to logout?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex gap-2 mt-4">
            <Button 
              variant="ghost"
              className="border border-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}