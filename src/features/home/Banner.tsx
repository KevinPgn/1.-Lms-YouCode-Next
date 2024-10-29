import { PencilLine, Receipt, Rocket } from "lucide-react"

export const Banner = () => {
  return <section className="w-full bg-[#E11D48] py-16">
    <div className="max-w-[1150px] mx-auto flex items-start justify-around gap-4 flex-1 flex-wrap px-2">

        <div className="flex items-center flex-col gap-4 w-[300px]">
            <PencilLine className="w-10 h-10 text-white" />
            <h2 className="text-lg font-bold text-white">MDX Based</h2>
            <p className="text-white font-semibold text-center">YouCode is based on MDX. You can write your courses in Markdown and React.</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[300px]">
            <Receipt className="w-10 h-10 text-white" />
            <h2 className="text-lg font-bold text-white">Free to use</h2>
            <p className="text-white font-semibold text-center">You want to publish your courses for free? YouCode is free to use.</p>
        </div>

        <div className="flex items-center flex-col gap-4 w-[300px]">
            <Rocket className="w-10 h-10 text-white" />
            <h2 className="text-lg font-bold text-white">Fast to use</h2>
            <p className="text-white font-semibold text-center">YouCode is fast to use. You can create your courses in seconds !</p>
        </div>

    </div>
  </section>
}