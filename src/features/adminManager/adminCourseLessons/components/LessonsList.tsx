import { ButtonCreateChapter } from "./ButtonCreateChapter"
import { Menu } from "lucide-react"

export const LessonsList = ({chapters}: {chapters: {id: string, title: string, published: boolean}[]}) => {
  return <div className="w-full max-md:w-full mb-10 mx-auto gap-5 flex flex-col rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6">
    <h2 className="font-semibold">Lessons</h2>
    <div className="flex flex-col gap-2">
        {chapters.length > 0 ? chapters.map((chapter) => (
            <div key={chapter.id} className="p-4 rounded-lg font-semibold border dark:border-zinc-800 dark:bg-[#1D1916] flex items-center justify-between">
                <span>{chapter.title}</span>
                <div className="flex items-center gap-4">
                    <span className={`text-xs ${!chapter.published ? "bg-red-500 text-white uppercase px-3 h-6 flex items-center justify-center rounded-md" : ""}`}>{chapter.published ? "Published" : "Draft"}</span>
                    <Menu size={19} className="cursor-grab"/>
                </div>
            </div>
        )) : <span className="text-sm text-gray-500 text-center">No lessons found</span>}
    </div>

    <ButtonCreateChapter />
  </div>
}