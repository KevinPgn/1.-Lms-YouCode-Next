"use client"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SettingsCard = ({ userImageUrl, userName }: { userImageUrl: string, userName: string }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return <div className="w-full flex flex-col gap-4 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg">
    {/* image Url and Name */}
    <div className="flex flex-col gap-1">
      <label htmlFor="imageUrl" className="text-sm font-medium">Image URL</label>
      <Input id="imageUrl"
        placeholder={userImageUrl}
        defaultValue={userImageUrl}
        {...register("imageUrl")} 
        className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-sm font-medium">Name</label>
      <Input id="name"
        placeholder={userName}
        defaultValue={userName}
        {...register("name")} 
        className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200"
      />
    </div>
    <Button className="w-full bg-[#E01C48] text-white hover:bg-[#E01C48]/80 mt-3 h-9">Submit</Button>
  </div>
}