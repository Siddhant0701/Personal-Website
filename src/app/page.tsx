import { WorkHistory } from "@/components/main/work-history";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Image from "next/image";

export default function Home() {
   return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <WorkHistory />
        <Projects />
        <Skills />
        
      </div>
    </main>
  );
}
