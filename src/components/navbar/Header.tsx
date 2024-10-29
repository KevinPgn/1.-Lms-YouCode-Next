import Link from "next/link";
import Image from "next/image";
import { LinksLeft } from "./LinksLeft";

export const Header = () => {
  return <header className="h-16 sticky top-0 border-b border-zinc-800 z-40">
    <nav className="container flex items-center justify-between h-full">
      
      {/* left side navbar */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-semibold">YouCode</h2>
        </Link>
        
        <LinksLeft />
      </div>

      {/* right side navbar */} 
    </nav>
  </header>
}