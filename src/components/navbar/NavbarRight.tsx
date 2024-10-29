import { SignInButton } from "@/components/auth/SignInButton";
import { ModeToggle } from "./ModeToggle";
import { UserProps } from "@/lib/types";
import { UserMenu } from "./UserMenu";

export const NavbarRight = ({user}: {user: UserProps}) => {
  return <div className="flex items-center gap-2">
    {!user ? (
        <SignInButton />
    ) : (
        <>
            <UserMenu userImage={user.image} userName={user.name} />
            <ModeToggle />
        </>
    )}
  </div>
}