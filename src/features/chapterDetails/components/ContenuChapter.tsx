export const ContenuChapter = ({chapterContent, chapterVideoUrl, chapterTitle}: {chapterContent: string, chapterVideoUrl: string, chapterTitle: string}) => {
  return <>
    <h2 className="mb-5">{chapterTitle}</h2>
    <div
    className="[&_h1]:text-3xl max-w-3xl mx-auto"
    dangerouslySetInnerHTML={{__html: chapterContent}}
    />
  </>
}