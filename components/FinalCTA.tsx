"use client";

import { motion } from "framer-motion";
import { trackCTA } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

export default function FinalCTA() {
  const sectionRef = useSectionTracking("final_cta");

  return (
    <section ref={sectionRef} id="join" className="relative py-36 px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Central energy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#00F5A0]/10 via-[#00D4FF]/4 to-transparent animate-pulse-glow pointer-events-none" aria-hidden="true" />

      {/* Secondary glow — offset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-20 translate-y-10 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#00D4FF]/8 to-transparent animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

      {/* Section fade edges */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050816] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" aria-hidden="true" />

      {/* Animated ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className="animate-rotate-slow opacity-[0.07]"
          aria-hidden="true"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            fill="none"
            stroke="#00F5A0"
            strokeWidth="1"
            strokeDasharray="20 15"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.35em] text-[#00D4FF] border border-[#00D4FF]/25 rounded-full mb-10 uppercase bg-[#00D4FF]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            Defend the EV Future
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="text-white block">READY TO DEFEND</span>
            <span className="block bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent">
              THE EV FUTURE?
            </span>
          </h2>

          <p className="text-[#CBD5E1]/60 text-lg mb-14 max-w-md mx-auto font-medium">
            Build secure EV battery intelligence systems.
          </p>

          <motion.a
            href="#labs"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] text-[#050816] font-black text-sm tracking-[0.22em] rounded-2xl shadow-2xl shadow-[#00F5A0]/25"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 60px rgba(0,245,160,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackCTA("enter_cyber_lab_final_cta", "final_cta")}
          >
            ENTER THE CYBER LAB
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          <p className="mt-6 text-[#CBD5E1]/30 text-xs tracking-widest uppercase">
            Free to join · No experience required
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <motion.div
            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Age group", value: "13–24" },
              { label: "Focus", value: "EV Security" },
              { label: "Vibe", value: "Detect. Defend. Build." },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-white font-black text-lg">{item.value}</div>
                <div className="text-[#CBD5E1]/30 text-xs tracking-wider uppercase mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
