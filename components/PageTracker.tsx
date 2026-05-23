"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export function PageTracker() {
  useScrollDepthTracking();

  useEffect(() => {
    trackEvent("home_page_view", { page: "home" });
  }, []);

  return null;
}
