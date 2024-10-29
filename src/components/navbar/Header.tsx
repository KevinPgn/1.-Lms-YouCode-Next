import Link from "next/link";
import Image from "next/image";
import { LinksLeft } from "./LinksLeft";
import { NavbarRight } from "./NavbarRight";
import { getSession } from "@/utils/CacheSession";
import { UserProps } from "@/lib/types";

export const Header = async () => {
  const session = await getSession();
  const user: UserProps = session?.user as UserProps;

  return <header className="h-16 sticky top-0 border-b border-zinc-800 bg-zinc-900 z-40">
    <nav className="container flex items-center justify-between h-full">
      
      {/* left side navbar */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-semibold text-white">YouCode</h2>
        </Link>

        <LinksLeft />
      </div>

      {/* right side navbar */} 
      <NavbarRight user={user} />
      
    </nav>
  </header>
}