"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a GSAP scroll-triggered reveal animation to the target element.
 * The element starts invisible and translated down, then fades in on scroll.
 */
export function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 50 });

    const tween = gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay,
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay]);

  return ref;
}
