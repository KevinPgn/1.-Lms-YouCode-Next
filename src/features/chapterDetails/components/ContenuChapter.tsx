import { ButtonCompletedChapter } from "./ButtonCompletedChapter"

export const ContenuChapter = ({chapterContent, chapterVideoUrl, chapterTitle, isEnrolled, chapterId}: {chapterContent: string, chapterVideoUrl: string, chapterTitle: string, isEnrolled: boolean, chapterId: string}) => {
  return <>
    <h2 className="mb-5">{chapterTitle}</h2>
    <div className="max-w-3xl mx-auto w-full">
        {chapterVideoUrl && <div className="w-full h-[500px] bg-zinc-800/10 rounded-md mb-5"></div>}
        {isEnrolled ? <div
        className="prose prose-invert max-w-none [&_h1]:text-3xl dark:text-white"
        dangerouslySetInnerHTML={{__html: chapterContent}}
        /> : <div className="prose prose-invert max-w-none [&_h1]:text-3xl dark:text-white">
          <p>Vous devez être inscrit à ce cours pour accéder à ce contenu</p>
        </div>}
        {isEnrolled && <ButtonCompletedChapter chapterId={chapterId} />}
    </div>
  </>
}