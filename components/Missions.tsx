"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

const DIFFICULTY_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  BEGINNER:     { label: "BEGINNER",     color: "#00F5A0", bg: "rgba(0,245,160,0.1)"  },
  INTERMEDIATE: { label: "INTERMEDIATE", color: "#00D4FF", bg: "rgba(0,212,255,0.1)"  },
  ADVANCED:     { label: "ADVANCED",     color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  EXPERT:       { label: "EXPERT",       color: "#A78BFA", bg: "rgba(167,139,250,0.1)" },
};

const MISSIONS = [
  {
    num: "01",
    title: "Battery Threat Detection",
    desc: "Detect anomalies in battery telemetry using AI pattern recognition before they become attacks.",
    difficulty: "BEGINNER",
    skill: "Threat Analysis",
    time: "2 hrs",
    accent: "#00F5A0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Secure Battery Telemetry",
    desc: "Implement E2E encrypted telemetry pipelines for real-time battery monitoring across EV fleets.",
    difficulty: "INTERMEDIATE",
    skill: "Secure Protocols",
    time: "4 hrs",
    accent: "#00D4FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 6s4-4 11-4 11 4 11 4" strokeLinecap="round"/>
        <path d="M5 10s2-2 7-2 7 2 7 2" strokeLinecap="round"/>
        <path d="M9 14s1-1 3-1 3 1 3 1" strokeLinecap="round"/>
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Protect OTA Systems",
    desc: "Harden over-the-air update systems against firmware injection and replay attacks on EVs.",
    difficulty: "ADVANCED",
    skill: "OTA Security",
    time: "6 hrs",
    accent: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 6v6c0 5.5 4.2 10.7 8 12 3.8-1.3 8-6.5 8-12V6L12 2z" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Build EV Threat Intelligence",
    desc: "Architect a real-time threat intel platform that aggregates and correlates EV battery attack signals.",
    difficulty: "ADVANCED",
    skill: "Threat Intelligence",
    time: "8 hrs",
    accent: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <circle cx="5" cy="7" r="1.5" />
        <circle cx="19" cy="7" r="1.5" />
        <circle cx="5" cy="17" r="1.5" />
        <circle cx="19" cy="17" r="1.5" />
        <path d="M7 8.5l3 2M17 8.5l-3 2M7 15.5l3-2M17 15.5l-3-2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "AI for Battery Defense",
    desc: "Train ML models to predict, classify, and neutralize battery cyberattack vectors before they detonate.",
    difficulty: "EXPERT",
    skill: "AI Defense Systems",
    time: "12 hrs",
    accent: "#A78BFA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M10 7V5M14 7V5M10 19v-2M14 19v-2M7 10H5M7 14H5M19 10h-2M19 14h-2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
] as const;

type Mission = (typeof MISSIONS)[number];

function MissionCard({ mission, index }: { mission: Mission; index: number }) {
  const diff = DIFFICULTY_STYLES[mission.difficulty];

  return (
    <motion.div
      className="group relative glass-card rounded-2xl p-6 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      onClick={() =>
        trackEvent("mission_card_click", {
          mission_num: mission.num,
          mission_title: mission.title,
          difficulty: mission.difficulty,
          section: "missions",
        })
      }
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: `1px solid ${mission.accent}30`,
          boxShadow: `inset 0 0 40px ${mission.accent}0a`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${mission.accent}, transparent)` }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        {/* Diamond badge with mission number */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rotate-45 border flex-shrink-0 flex items-center justify-center"
            style={{ borderColor: `${mission.accent}50` }}
          >
            <span
              className="-rotate-45 text-[11px] font-black tabular-nums"
              style={{ color: mission.accent }}
            >
              {mission.num}
            </span>
          </div>
          <div>
            <div className="text-[9px] font-bold tracking-[0.3em] text-[#CBD5E1]/35 uppercase">
              Mission
            </div>
            <div
              className="flex items-center gap-1.5 mt-0.5"
              style={{ color: diff.color }}
            >
              <span
                className="text-[9px] font-black tracking-[0.2em] px-2 py-0.5 rounded-full"
                style={{ background: diff.bg }}
              >
                {diff.label}
              </span>
            </div>
          </div>
        </div>

        {/* Thematic icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${mission.accent}10`, color: mission.accent }}
        >
          {mission.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-black text-white mb-2 leading-tight tracking-tight">
        {mission.title}
      </h3>

      {/* Description */}
      <p className="text-[#CBD5E1]/50 text-sm leading-relaxed mb-5">
        {mission.desc}
      </p>

      {/* Footer stats */}
      <div className="flex items-center gap-0 pt-4 border-t border-white/5">
        <div className="flex items-center gap-1.5 flex-1">
          <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-[#CBD5E1]/40" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3.5L10 10" strokeLinecap="round" />
          </svg>
          <span className="text-[#CBD5E1]/40 text-[11px] font-medium">{mission.time}</span>
        </div>
        <div className="flex items-center gap-1.5 flex-1 justify-center">
          <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth="1.5" style={{ color: mission.accent }}>
            <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z" />
          </svg>
          <span className="text-[11px] font-bold" style={{ color: mission.accent }}>
            {mission.skill}
          </span>
        </div>
        <div className="flex items-center justify-end flex-1">
          <span className="text-[9px] font-black tracking-[0.2em] text-[#CBD5E1]/25 uppercase">
            Active
          </span>
          <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Missions() {
  const sectionRef = useSectionTracking("missions");

  return (
    <section ref={sectionRef} id="missions" className="py-28 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4FF]/[0.018] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Classification badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#00F5A0]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            <span className="text-[9px] font-black tracking-[0.4em] text-[#00F5A0] uppercase">
              Classification: Active
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            <span className="text-white">LIVE</span>{" "}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent">
              MISSIONS
            </span>
          </h2>
          <p className="text-[#CBD5E1]/50 text-base">
            Pick your next battle.
          </p>
        </motion.div>

        {/* Mission grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {MISSIONS.slice(0, 3).map((mission, i) => (
            <MissionCard key={mission.num} mission={mission} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 xl:max-w-[calc(66.67%-10px)] xl:mx-auto">
          {MISSIONS.slice(3).map((mission, i) => (
            <MissionCard key={mission.num} mission={mission} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
