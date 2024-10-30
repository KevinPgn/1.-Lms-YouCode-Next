"use client"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { editProfile } from "../server/EditProfile";
import { startTransition } from "react";
import { useToast } from "@/hooks/use-toast"; 

export const SettingsCard = ({ userImageUrl, userName }: { userImageUrl: string, userName: string }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {toast} = useToast()

  const onSubmit = async (data: any) => {
    startTransition(async () => {
     const test = await editProfile({image: data.imageUrl, name: data.name})
     console.log(test)
     toast({
      variant: "default",
      description: "Your profile has been updated successfully",
     })
    })
  }

  return <form className="w-full flex flex-col gap-4 border dark:border-zinc-800 border-zinc-200 p-6 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
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
    <Button type="submit" className="w-full bg-[#E01C48] text-white hover:bg-[#E01C48]/80 mt-3 h-9">Submit</Button>
  </form>
}