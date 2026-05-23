"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

const BUILDER_CARDS = [
  {
    type: "PROJECT",
    title: "EV Threat Monitor",
    student: "Arjun K.",
    location: "IIT Bombay",
    desc: "Real-time ML anomaly detection across Li-Ion battery telemetry streams.",
    color: "#00F5A0",
  },
  {
    type: "LAB",
    title: "Battery Anomaly Detector",
    student: "Team Cipher",
    location: "Bangalore",
    desc: "Open-source battery data anomaly pipeline — 98.2% detection accuracy.",
    color: "#00D4FF",
  },
  {
    type: "DEMO",
    title: "Secure Telemetry Stack",
    student: "Priya M.",
    location: "BITS Pilani",
    desc: "End-to-end encrypted battery telemetry with zero-trust architecture.",
    color: "#00F5A0",
  },
  {
    type: "RESEARCH",
    title: "OTA Security Simulator",
    student: "Rishi D.",
    location: "NIT Trichy",
    desc: "Firmware injection attack simulator for automotive OTA update systems.",
    color: "#00D4FF",
  },
  {
    type: "PROJECT",
    title: "AI Battery Shield",
    student: "Aisha N.",
    location: "VIT Vellore",
    desc: "Deep learning model predicting EV battery cyberattack vectors in real-time.",
    color: "#00F5A0",
  },
  {
    type: "CREATOR",
    title: "EV Threat Intel Platform",
    student: "Dev S.",
    location: "YouTube",
    desc: "Open-source EV threat intelligence platform. 150K+ builders watching.",
    color: "#00D4FF",
  },
  {
    type: "DEMO",
    title: "CAN Bus Security Probe",
    student: "Kiran T.",
    location: "Anna Univ.",
    desc: "Security analysis tool for electric vehicle CAN bus communication layers.",
    color: "#00F5A0",
  },
  {
    type: "LAB",
    title: "Quantum-Safe Battery Keys",
    student: "Spark Club",
    location: "Delhi",
    desc: "Post-quantum cryptography for battery management system authentication.",
    color: "#00D4FF",
  },
];

type CardData = (typeof BUILDER_CARDS)[number];

const TILTS = [-2.5, 1.5, -1, 2, -1.5, 1, -2, 1.5];

function BuilderCard({
  card,
  tilt,
}: {
  card: CardData;
  tilt: number;
}) {
  return (
    <div
      className="flex-shrink-0 w-[270px] glass-card rounded-2xl p-5 mx-3 cursor-pointer group relative overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{ transform: `rotate(${tilt}deg)` }}
      onClick={() =>
        trackEvent("builder_card_click", {
          card_title: card.title,
          card_type: card.type,
          section: "builders_wall",
        })
      }
    >
      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: `1px solid ${card.color}35`,
          boxShadow: `0 0 25px ${card.color}18, inset 0 0 25px ${card.color}08`,
        }}
      />

      {/* Type badge + location */}
      <div className="flex justify-between items-center mb-4">
        <span
          className="text-[9px] font-black tracking-[0.22em] px-2.5 py-1 rounded-full uppercase"
          style={{
            color: card.color,
            background: `${card.color}12`,
            border: `1px solid ${card.color}30`,
          }}
        >
          {card.type}
        </span>
        <span className="text-[#CBD5E1]/35 text-[10px] font-medium">
          {card.location}
        </span>
      </div>

      <h4 className="text-white font-black text-base mb-1.5 leading-tight">
        {card.title}
      </h4>
      <p className="text-[#CBD5E1]/60 text-xs leading-relaxed mb-4">
        {card.desc}
      </p>

      {/* Student avatar + name */}
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
          style={{ background: `${card.color}20`, color: card.color }}
        >
          {card.student[0]}
        </div>
        <span className="text-[11px] text-[#CBD5E1]/50 font-medium">
          {card.student}
        </span>
      </div>
    </div>
  );
}

export default function BuildersWall() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true });
  const sectionRef = useSectionTracking("builders_wall");

  const row1 = [...BUILDER_CARDS, ...BUILDER_CARDS];
  const row2 = [
    ...[...BUILDER_CARDS].reverse(),
    ...[...BUILDER_CARDS].reverse(),
  ];

  return (
    <section ref={sectionRef} id="community" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4FF]/[0.015] to-transparent pointer-events-none" />

      <div ref={headingRef} className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.35em] text-[#00F5A0] uppercase mb-4">
            The Community
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-white">FUTURE EV DEFENDERS</span>
            <br />
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent">
              ARE HERE.
            </span>
          </h2>
          <p className="text-[#CBD5E1]/50 mt-4 text-base max-w-md">
            Real security. Real builders. Real impact.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="overflow-hidden mb-5 marquee-pause">
        <div className="flex animate-marquee-left">
          {row1.map((card, i) => (
            <BuilderCard key={`r1-${i}`} card={card} tilt={TILTS[i % TILTS.length]} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="overflow-hidden marquee-pause">
        <div className="flex animate-marquee-right">
          {row2.map((card, i) => (
            <BuilderCard
              key={`r2-${i}`}
              card={card}
              tilt={-TILTS[i % TILTS.length]}
            />
          ))}
        </div>
      </div>

      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#050816] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#050816] to-transparent pointer-events-none z-10" />
    </section>
  );
}
