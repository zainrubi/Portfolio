import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
