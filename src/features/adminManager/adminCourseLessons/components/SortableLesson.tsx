import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu } from "lucide-react";

interface Chapter {
  id: string;
  title: string;
  published: boolean;
  order: number;
}

export function SortableLesson({ chapter }: { chapter: Chapter }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: chapter.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div 
      ref={setNodeRef}
      style={style}
      className="p-4 rounded-lg font-semibold border dark:border-zinc-800 dark:bg-[#1D1916] flex items-center justify-between"
    >
      <span>{chapter.title}</span>
      <div className="flex items-center gap-4">
        <span className={`text-xs ${!chapter.published ? "bg-red-500 text-white uppercase px-3 h-6 flex items-center justify-center rounded-md" : ""}`}>
          {chapter.published ? "Published" : "Draft"}
        </span>
        <Menu 
          size={19} 
          className="cursor-grab"
          {...attributes}
          {...listeners}
        />
      </div>
    </div>
  );
}