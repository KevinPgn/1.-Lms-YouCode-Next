export const ContenuChapter = ({chapterContent, chapterVideoUrl, chapterTitle}: {chapterContent: string, chapterVideoUrl: string, chapterTitle: string}) => {
  return <>
    <h2 className="mb-5">{chapterTitle}</h2>
    <div className="max-w-3xl mx-auto">
        {chapterVideoUrl && <div className="w-full h-[500px] bg-zinc-800/10 rounded-md mb-5"></div>}
        <div
        className="prose prose-invert max-w-none [&_h1]:text-3xl"
        dangerouslySetInnerHTML={{__html: chapterContent}}
        />
    </div>
  </>
}