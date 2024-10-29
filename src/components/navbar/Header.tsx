import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return <header className="h-16 sticky top-0 border-b border-zinc-800 z-40">
    <nav className="container flex items-center justify-between h-full">
      
      {/* left side navbar */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-semibold">YouCode</h2>
        </Link>
        <Link href="/explorer" className="text-md text-zinc-400 hover:text-zinc-100 hover:underline font-semibold">
          Explorer
        </Link>
        <Link href="/courses" className="text-md text-zinc-400 hover:text-zinc-100 hover:underline font-semibold">
          Courses
        </Link>
      </div>

      {/* right side navbar */} 
    </nav>
  </header>
}