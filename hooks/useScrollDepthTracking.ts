import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const;

export function useScrollDepthTracking() {
  const tracked = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackEvent("scroll_depth", { percent: threshold, page: "home" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
