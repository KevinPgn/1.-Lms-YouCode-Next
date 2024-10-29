import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return <footer className="w-full border-t border-zinc-700 py-3">
    <div className="max-w-[1150px] mx-auto flex items-center justify-between">
      {/* footer left */}
        <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="YouCode" width={35} height={35} />
            <span className="text-md font-normal">YouCode</span>
        </Link>

      {/* footer right */}
    </div>
  </footer>
}