import React from 'react'

interface ChapterIdPageProps {
    params: Promise<{
        courseId: string
        chapterId: string
    }>
}

const ChapterIdPage = async ({params}: ChapterIdPageProps) => {
  const {courseId, chapterId} = await params
  
  return (
    <section className='px-5 mt-5 mb-5'>

    </section>
  )
}

export default ChapterIdPage