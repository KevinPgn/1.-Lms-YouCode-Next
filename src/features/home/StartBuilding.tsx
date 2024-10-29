import { Button } from "@/components/ui/button";

interface StartBuildingProps {
  title: string;
  backgroundColor: string;
}

export const StartBuilding = ({title, backgroundColor}: StartBuildingProps) => {
  return <section className={`flex flex-1 items-center flex-col justify-center py-24 ${backgroundColor}`}>
    <h2 className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">{title}</h2>
    <Button className="mt-4 uppercase bg-[#E11D48] text-white font-bold hover:bg-[#E11D48]/80 text-xl py-8 px-5">build your first course</Button>
  </section>
}