"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { useSectionTracking } from "@/hooks/useSectionTracking";

const cards = [
  {
    num: "01",
    title: "DETECT",
    desc: "Identify EV battery threats.",
    detail: "Spot anomalies before they become attacks. Real-time AI-powered battery threat intelligence.",
    color: "#00F5A0",
    shadow: "rgba(0,245,160,0.12)",
    border: "rgba(0,245,160,0.2)",
  },
  {
    num: "02",
    title: "DEFEND",
    desc: "Protect future electric mobility systems.",
    detail: "Zero-trust architectures. Encrypted telemetry. Hardened battery management systems.",
    color: "#00D4FF",
    shadow: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.2)",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Create secure EV battery intelligence systems.",
    detail: "Open-source security tools the EV community actually uses. Ship real defenses.",
    color: "#00F5A0",
    shadow: "rgba(0,245,160,0.12)",
    border: "rgba(0,245,160,0.2)",
  },
];

export default function WhatYouDo() {
  const sectionRef = useSectionTracking("what_we_do");

  return (
    <section ref={sectionRef} id="labs" className="py-28 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5A0]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.35em] text-[#00D4FF] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-white">NOT JUST LEARNING.</span>
            <br />
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D4FF] bg-clip-text text-transparent">
              DEFENDING.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative glass-card rounded-2xl p-8 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() =>
                trackEvent("feature_card_click", {
                  card_name: card.title,
                  section: "what_we_do",
                })
              }
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                style={{
                  border: `1px solid ${card.border}`,
                  boxShadow: `inset 0 0 40px ${card.shadow}`,
                }}
              />

              {/* Top glow line */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                }}
              />

              {/* Card number */}
              <div
                className="text-5xl font-black mb-8 tabular-nums"
                style={{ color: card.color, opacity: 0.9 }}
              >
                {card.num}
              </div>

              <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
                {card.title}
              </h3>

              <p className="text-[#CBD5E1] text-base font-medium mb-4 leading-relaxed">
                {card.desc}
              </p>

              <p className="text-[#CBD5E1]/45 text-sm leading-relaxed">
                {card.detail}
              </p>

              {/* Arrow indicator */}
              <div
                className="absolute bottom-6 right-6 w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                style={{ borderColor: card.color, color: card.color }}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-3.5 h-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
