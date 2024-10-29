import { SignInButton } from "@/components/auth/SignInButton";
import { ModeToggle } from "./ModeToggle";

export const NavbarRight = () => {
  return <div className="flex items-center gap-2">
    <SignInButton />
    <ModeToggle />
  </div>
}