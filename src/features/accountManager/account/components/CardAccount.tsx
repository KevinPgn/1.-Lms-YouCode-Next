import Image from "next/image";
import { CardAccountButton } from "./CardAccountButton";

export const CardAccount = ({ userImage, userEmail, userName }: { userImage: string, userEmail: string, userName: string }) => {
  return <div className="w-[510px] max-md:w-full mx-auto rounded-lg border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-10 p-5">
    <div className="flex items-center gap-4 mb-5">
      <Image src={userImage} alt="user image" width={40} height={40} className="rounded-full" />
      <div className="flex flex-col gap-1">
        <p className="font-semibold tracking-tight">{userEmail}</p>
        <h1 className="text-sm dark:text-gray-300">{userName}</h1>
      </div>
    </div>

    <CardAccountButton />
  </div>
}