import Image from "next/image";
import { Star } from "lucide-react";

export const Hero = () => {
  return <section className="my-24 flex items-center gap-8 w-full px-2 max-xl:flex-col max-xl:my-8">
    {/* left side */}
    <div className="flex flex-col gap-4 flex-1 max-xl:w-full max-xl:text-center">
        <h1 className="text-6xl max-md:text-4xl font-extrabold bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
            Create courses in seconds
        </h1>
        <p className="text-2xl font-bold max-md:text-xl">YouCode is the YouTube of education. You will create online courses in seconds.</p>
        <div className="flex items-center gap-10 max-xl:flex-col max-xl:gap-3">
            <div className="flex items-center">
                {/* generate random users avatar */}
                {Array.from({ length: 7 }, (_, index) => (  
                    <div key={index} className="w-10 h-10 relative mr-[-10px] border border-zinc-800 rounded-full bg-blue-500"></div> 
                ))}
            </div>
            <div className="flex gap-2 flex-col">
                <p className="text-md text-yellow-300 font-bold">+500 Teachers trust us.</p>
                <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} className="w-8 h-8 fill-yellow-300 text-yellow-300" />
                    ))}
                </div>
            </div>
        </div>
    </div>

    {/* right side */}
    <Image src="/banner.avif" alt="hero-image" priority width={560} height={315} className="rounded-md max-xl:w-[80%] max-md:w-full object-cover cursor-pointer" />
  </section>
}