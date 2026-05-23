import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";

export function useSectionTracking(sectionName: string) {
  const ref = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          trackSectionView(sectionName);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
