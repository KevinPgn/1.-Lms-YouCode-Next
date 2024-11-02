import { create } from "zustand"
import { Content } from "@tiptap/react"

interface LessonContentState {
    value: Content
    setValue: (value: Content) => void
}

export const useLessonContent = create<LessonContentState>((set) => ({
    value: "",
    setValue: (value) => set({ value })
}))
