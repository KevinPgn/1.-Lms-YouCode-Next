"use client"
import { ButtonCreateChapter } from "./ButtonCreateChapter"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableLesson } from './SortableLesson';
import { useState } from 'react';
import { updateChaptersOrder } from '../server/updateChaptersOrder';
import { toast } from 'react-toastify';

interface Chapter {
  id: string;
  title: string;
  published: boolean;
  order: number;
}

export const LessonsList = ({ chapters: initialChapters, courseId }: { chapters: Chapter[], courseId: string }) => {
  const [chapters, setChapters] = useState(
    [...initialChapters].sort((a, b) => a.order - b.order)
  );
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  async function handleDragEnd(event: any) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      let newChapters: Chapter[] = [];
      
      setChapters((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        newChapters = arrayMove(items, oldIndex, newIndex);
        return newChapters;
      });

      // Mettre à jour l'ordre dans la base de données
      try {
        // Important: Attendre que l'état soit mis à jour avant d'envoyer la requête
        const updatedChapters = newChapters.map((chapter, index) => ({
          id: chapter.id,
          order: index + 1
        }));

        await updateChaptersOrder({
          chapters: updatedChapters
        });

        toast.success("Order updated successfully");
      } catch (error) {
        console.error("Error updating order:", error);
        toast.error("Failed to update order");
        setChapters(initialChapters);
      }
    }
  }

  return (
    <div className="w-full max-md:w-full mb-10 mx-auto gap-5 flex flex-col rounded-2xl border dark:border-zinc-800 dark:bg-[#1D1916] bg-gray-50 shadow-lg mt-5 p-6">
      <h2 className="font-semibold">Lessons</h2>
      <div className="flex flex-col gap-2">
        {chapters.length > 0 ? (
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={chapters}
              strategy={verticalListSortingStrategy}
            >
              {chapters.map((chapter) => (
                <SortableLesson key={chapter.id} chapter={chapter} />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          <span className="text-sm text-gray-500 text-center">No lessons found</span>
        )}
      </div>
      <ButtonCreateChapter courseId={courseId} />
    </div>
  )
}