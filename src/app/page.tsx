import { Footer } from "@/components/footer/Footer";
import { Banner } from "@/features/home/Banner";
import { Faq } from "@/features/home/Faq";
import { Hero } from "@/features/home/Hero";
import { StartBuilding } from "@/features/home/StartBuilding";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <StartBuilding title="Start building your course today" backgroundColor="bg-black" />
      <Faq />
      <StartBuilding title="Try it ! It's free" />
      <Footer />
      <span className="flex items-center pb-2 justify-center dark:text-zinc-400 text-sm">© 2024 YouCode</span>
    </>
  );
}
