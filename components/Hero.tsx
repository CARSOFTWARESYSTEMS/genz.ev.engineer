"use client";

import { motion } from "framer-motion";
import { trackCTA } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

const PARTICLES = [
  { x: "8%", y: "18%", size: 2, delay: 0, duration: 6, color: "#00F5A0" },
  { x: "18%", y: "72%", size: 1.5, delay: 1.2, duration: 5, color: "#00D4FF" },
  { x: "82%", y: "14%", size: 2.5, delay: 0.5, duration: 7, color: "#00F5A0" },
  { x: "76%", y: "68%", size: 1.5, delay: 2, duration: 4.5, color: "#00D4FF" },
  { x: "92%", y: "42%", size: 2, delay: 1.5, duration: 6, color: "#00F5A0" },
  { x: "4%", y: "52%", size: 1, delay: 0.8, duration: 5.5, color: "#00D4FF" },
  { x: "52%", y: "88%", size: 2, delay: 2.5, duration: 7, color: "#00F5A0" },
  { x: "34%", y: "8%", size: 1.5, delay: 0.3, duration: 4, color: "#00D4FF" },
  { x: "62%", y: "92%", size: 1, delay: 1.8, duration: 6, color: "#00F5A0" },
  { x: "46%", y: "4%", size: 2.5, delay: 0.6, duration: 5, color: "#00D4FF" },
  { x: "88%", y: "82%", size: 1.5, delay: 2.2, duration: 6.5, color: "#00F5A0" },
  { x: "14%", y: "38%", size: 2, delay: 1.1, duration: 4.8, color: "#00D4FF" },
];

export default function Hero() {
  const sectionRef = useSectionTracking("hero");

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="EV Battery Intelligence Security Platform — Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F5A0]/30 to-transparent animate-scan-line" />
      </div>

      {/* Large background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-[#00F5A0]/8 via-[#00D4FF]/4 to-transparent animate-pulse-glow pointer-events-none" aria-hidden="true" />

      {/* Outer rotating ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg
          width="680"
          height="680"
          viewBox="0 0 680 680"
          className="animate-rotate-slow opacity-[0.12]"
          aria-hidden="true"
        >
          <circle
            cx="340"
            cy="340"
            r="320"
            fill="none"
            stroke="#00F5A0"
            strokeWidth="1"
            strokeDasharray="25 12"
          />
          <circle
            cx="340"
            cy="340"
            r="320"
            fill="none"
            stroke="#00F5A0"
            strokeWidth="1.5"
            strokeDasharray="4 50"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Middle rotating ring (reverse) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          className="animate-rotate-reverse opacity-[0.10]"
          aria-hidden="true"
        >
          <circle
            cx="260"
            cy="260"
            r="245"
            fill="none"
            stroke="#00D4FF"
            strokeWidth="1"
            strokeDasharray="35 8"
          />
          {[0, 90, 180, 270].map((angle) => (
            <line
              key={angle}
              x1="260"
              y1="15"
              x2="260"
              y2="38"
              stroke="#00D4FF"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${angle} 260 260)`}
              opacity="0.8"
            />
          ))}
        </svg>
      </div>

      {/* Inner ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg
          width="340"
          height="340"
          viewBox="0 0 340 340"
          className="animate-rotate-slow opacity-[0.08]"
          style={{ animationDuration: "14s" }}
          aria-hidden="true"
        >
          <circle
            cx="170"
            cy="170"
            r="155"
            fill="none"
            stroke="#00F5A0"
            strokeWidth="1"
            strokeDasharray="45 6"
          />
        </svg>
      </div>

      {/* Radar ping — cyber scan rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="w-[160px] h-[160px] rounded-full border border-[#00F5A0]/35 animate-radar-ping" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div
          className="w-[160px] h-[160px] rounded-full border border-[#00D4FF]/25 animate-radar-ping"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Central shield icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="w-24 h-24 rounded-full border border-[#00F5A0]/15 bg-[#050816]/60 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
          <svg viewBox="0 0 44 52" fill="none" className="w-10 h-10">
            <defs>
              <linearGradient id="shieldG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00F5A0" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
            <path
              d="M22 2L4 10v14c0 12 8 22 18 26 10-4 18-14 18-26V10L22 2z"
              fill="url(#shieldG)"
              opacity="0.15"
              stroke="url(#shieldG)"
              strokeWidth="1.5"
            />
            <path
              d="M14 25l5 5 11-11"
              stroke="url(#shieldG)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* System status — atmospheric cyber indicator */}
      <div className="absolute top-28 right-6 lg:right-14 glass-card rounded-xl px-4 py-3 pointer-events-none hidden lg:block z-10" aria-hidden="true">
        <div className="text-[9px] tracking-[0.3em] text-[#CBD5E1]/35 uppercase mb-2">
          System Status
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
          <span className="text-[#00F5A0] text-[11px] font-bold tracking-wider">
            ALL SECURE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <span className="text-[#00D4FF] text-[11px] font-bold tracking-wider">
            MONITORING
          </span>
        </div>
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none animate-float"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: 0.5,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.35em] text-[#00F5A0] border border-[#00F5A0]/25 rounded-full mb-8 uppercase bg-[#00F5A0]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            Gen Z × EV Cybersecurity
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span className="text-white block">PROTECT THE</span>
          <span className="text-white block">FUTURE OF</span>
          <span className="block bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent neon-text">
            EV BATTERIES.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#CBD5E1] mb-12 font-medium max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Future EV cyber builders start here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <motion.a
            href="#labs"
            className="px-9 py-4 bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] text-[#050816] font-black text-sm tracking-[0.18em] rounded-xl shadow-xl shadow-[#00F5A0]/20 w-full sm:w-auto"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 20px 50px rgba(0,245,160,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackCTA("enter_cyber_lab_hero", "hero")}
          >
            ENTER THE CYBER LAB
          </motion.a>
          <motion.a
            href="#community"
            className="px-9 py-4 border border-white/15 text-white font-bold text-sm tracking-[0.12em] rounded-xl w-full sm:w-auto hover:border-[#00F5A0]/40 hover:text-[#00F5A0] hover:bg-[#00F5A0]/5 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackCTA("join_builders_hero", "hero")}
          >
            JOIN THE BUILDERS
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-nowrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-16 pt-8 sm:pt-12 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { num: "10K+", label: "Future Builders" },
            { num: "50+", label: "Live Projects" },
            { num: "200+", label: "Workshops" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="text-[#CBD5E1]/60 text-xs tracking-wider mt-0.5 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] text-[#CBD5E1]/30 tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#00F5A0]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
