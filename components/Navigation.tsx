"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { trackNavigation, trackCTA, trackEvent } from "@/lib/analytics";

const navItems = ["Home", "Labs", "Community"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (menuOpen) {
      trackEvent("mobile_menu_open", { page: "home" });
    } else {
      trackEvent("mobile_menu_close", { page: "home" });
    }
  }, [menuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/80 border-b border-white/5"
          : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5A0] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#00F5A0]/20">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="#050816"
                strokeWidth="0"
              />
            </svg>
          </div>
          <span className="font-black text-lg tracking-wider text-white group-hover:text-[#00F5A0] transition-colors duration-200">
            EV<span className="text-[#00F5A0]">.</span>ENGINEER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#CBD5E1] hover:text-[#00F5A0] transition-colors duration-200 tracking-wide"
              onClick={() => trackNavigation(item)}
            >
              {item}
            </a>
          ))}
          <a
            href="#join"
            className="px-5 py-2 rounded-lg border border-[#00F5A0]/50 text-[#00F5A0] text-sm font-bold tracking-wider hover:bg-[#00F5A0]/10 hover:border-[#00F5A0] hover:shadow-lg hover:shadow-[#00F5A0]/10 transition-all duration-200"
            onClick={() => trackCTA("join_header", "header")}
          >
            JOIN
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 p-5 backdrop-blur-xl bg-[#050816]/95 border border-white/10 rounded-2xl"
          >
            {[...navItems, "Join"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex items-center py-3.5 text-[#CBD5E1] hover:text-[#00F5A0] font-medium tracking-wide transition-colors border-b border-white/5 last:border-0"
                onClick={() => {
                  setMenuOpen(false);
                  if (item === "Join") {
                    trackCTA("join_header", "header");
                  } else {
                    trackNavigation(item);
                  }
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-[#00F5A0]/40 text-xs mr-3 font-mono">
                  0{i + 1}
                </span>
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
