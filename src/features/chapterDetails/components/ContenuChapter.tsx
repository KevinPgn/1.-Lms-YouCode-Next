export const ContenuChapter = ({chapterContent, chapterVideoUrl, chapterTitle, isEnrolled}: {chapterContent: string, chapterVideoUrl: string, chapterTitle: string, isEnrolled: boolean}) => {
  return <>
    <h2 className="mb-5">{chapterTitle}</h2>
    <div className="max-w-3xl mx-auto">
        {chapterVideoUrl && <div className="w-full h-[500px] bg-zinc-800/10 rounded-md mb-5"></div>}
        {isEnrolled ? <div
        className="prose prose-invert max-w-none [&_h1]:text-3xl"
        dangerouslySetInnerHTML={{__html: chapterContent}}
        /> : <div className="prose prose-invert max-w-none [&_h1]:text-3xl">
          <p>Vous devez être inscrit à ce cours pour accéder à ce contenu</p>
        </div>}
    </div>
  </>
}