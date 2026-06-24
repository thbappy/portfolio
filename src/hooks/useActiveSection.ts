"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "expertise",
  "skills",
  "experience",
  "projects",
  "education",
];

/**
 * Uses IntersectionObserver to determine which section is currently
 * most visible in the viewport. Returns the active section ID.
 */
export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return active;
}
