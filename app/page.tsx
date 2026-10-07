import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Capabilities />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

