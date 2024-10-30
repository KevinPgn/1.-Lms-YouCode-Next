import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return <footer className="w-full mb-2 border-t dark:border-zinc-700 border-gray-300 py-3 px-2">
    <div className="max-w-[980px] mx-auto flex items-start justify-between">
      {/* footer left */}
        <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="YouCode" width={35} height={35} />
            <span className="text-md font-normal">YouCode</span>
        </Link>

      {/* footer right */}
      <div className="flex items-end flex-col gap-2">
        <Link href="/" className="text-sm font-normal dark:text-zinc-400 dark:hover:text-white duration-75">Privacy</Link>
        <Link href="/" className="text-sm font-normal dark:text-zinc-400 dark:hover:text-white duration-75">CGV</Link>
        <Link href="/" className="text-sm font-normal dark:text-zinc-400 dark:hover:text-white duration-75">Courses</Link>
        <Link href="/" className="text-sm font-normal dark:text-zinc-400 dark:hover:text-white duration-75">Admin</Link>
      </div>
    </div>
  </footer>
}