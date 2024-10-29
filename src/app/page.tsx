import { Banner } from "@/features/home/Banner";
import { Hero } from "@/features/home/Hero";
import { StartBuilding } from "@/features/home/StartBuilding";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <StartBuilding title="Start building your course today" />
    </>
  );
}
