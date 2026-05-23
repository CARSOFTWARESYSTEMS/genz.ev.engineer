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
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[#CBD5E1]/20 text-xs tracking-[0.25em] uppercase">
            © 2026 EV.ENGINEER — Protect the Future
          </p>
          <div className="flex flex-col items-center sm:items-end gap-2">
            <p className="text-[#CBD5E1]/20 text-[10px] tracking-[0.18em]">
              Building the EV future in public ⚡
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/krutarthskarkala/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krutarth S Karkala on LinkedIn"
                className="text-[#CBD5E1]/25 hover:text-[#00D4FF] transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.55)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@krutarth.s.karkala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krutarth S Karkala on YouTube"
                className="text-[#CBD5E1]/25 hover:text-[#00F5A0] transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,245,160,0.55)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.krutarth.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krutarth S Karkala's website"
                className="text-[#CBD5E1]/25 hover:text-[#00D4FF] transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.55)]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round" />
                </svg>
              </a>
              <span className="w-px h-3 bg-white/10" aria-hidden="true" />
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
          </div>
        </div>
      </footer>
    </main>
  );
}
