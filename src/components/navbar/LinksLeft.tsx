import Link from "next/link";

export const LinksLeft = () => {
  return <div className="flex items-center gap-3">
    <Link href="/explorer" className="text-md text-zinc-400 hover:text-zinc-100 hover:underline font-semibold">
      Explorer
    </Link>
    <Link href="/courses" className="text-md text-zinc-400 hover:text-zinc-100 hover:underline font-semibold">
      Courses
    </Link>
  </div>
}