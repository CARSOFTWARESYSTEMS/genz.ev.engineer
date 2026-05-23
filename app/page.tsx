import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatYouDo from "@/components/WhatYouDo";
import Missions from "@/components/Missions";
import BuildersWall from "@/components/BuildersWall";
import FinalCTA from "@/components/FinalCTA";
import { PageTracker } from "@/components/PageTracker";

export default function Home() {
  return (
    <main className="bg-[#050816] min-h-screen overflow-x-hidden">
      <PageTracker />
      <Navigation />
      <Hero />
      <WhatYouDo />
      <Missions />
      <BuildersWall />
      <FinalCTA />
      <footer className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#CBD5E1]/20 text-xs tracking-[0.25em] uppercase">
            © 2025 EV.ENGINEER — Protect the Future
          </p>
          <a
            href="https://www.linkedin.com/in/krutarthskarkala/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[#CBD5E1]/25 hover:text-[#00F5A0]/70 transition-colors duration-300 text-xs font-medium"
          >
            <span>Built with</span>
            <span className="text-[#00F5A0]/40 group-hover:text-[#00F5A0] transition-colors">⚡</span>
            <span>by Krutarth S Karkala</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
