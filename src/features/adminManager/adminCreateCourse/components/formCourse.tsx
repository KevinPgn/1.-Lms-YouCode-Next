"use client"
import { useForm } from "react-hook-form"
import { createCourse } from "../server/createCourse"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function FormCourse() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [level, setLevel] = useState("beginner")

    const handleSubmitForm = async (data: any) => {
        try{
            await createCourse({...data, level})
        } catch (error) {
            console.log(error)
        }
    }

    return <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full max-md:w-full mb-10 mx-auto gap-5 flex flex-col rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6">
        <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-sm font-medium">Image</label>
            <Input id="image"
                placeholder="https://example.com/image.png"
                {...register("image")} 
                className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200"
            />
            <span className="text-xs px-2 dark:text-gray-400">Host and use an image. You can use Imgur to host your image.</span>
        </div>

        {/* title, description, level, category */}
        <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input id="title"
                placeholder="NextReact course"
                {...register("title")} 
                className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea id="description"
                placeholder="Learn how to build a Next.js course"
                {...register("description")} 
                className="bg-transparent dark:border-zinc-800 border-zinc-200"
            />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="level" className="text-sm font-medium">Level</label>
            <Select
                value={level}
                onValueChange={(value) => setLevel(value)}
            >
                <SelectTrigger className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200">
                    <SelectValue placeholder="Select a level" />
                </SelectTrigger>
                <SelectContent className="dark:bg-[#1D1916]">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <Input id="category"
                placeholder="Web Development"
                {...register("category")} 
                className="bg-transparent h-9 dark:border-zinc-800 border-zinc-200"
            />
        </div>
        <Button type="submit" className="w-full bg-[#E01C48] text-white hover:bg-[#E01C48]/80 h-9">Submit</Button>
    </form>
}