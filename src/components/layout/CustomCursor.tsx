"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor (dot + outline) shown on desktop only.
 * The outline follows with a slight delay for a premium feel.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Make visible
    dot.style.opacity = "1";
    outline.style.opacity = "1";

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      outline.animate(
        { left: `${x}px`, top: `${y}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    const handleMouseEnterInteractive = () => {
      outline.style.width = "60px";
      outline.style.height = "60px";
      outline.style.backgroundColor = "rgba(0, 255, 136, 0.1)";
    };

    const handleMouseLeaveInteractive = () => {
      outline.style.width = "40px";
      outline.style.height = "40px";
      outline.style.backgroundColor = "transparent";
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Attach to all interactive elements
    const interactiveSelector =
      "a, button, .skill-tag, .glass-card, .modal-link-item, .modal-close-btn";

    const attachListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterInteractive);
        el.addEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };

    // Initial attach
    attachListeners();

    // Re-attach on DOM changes (for modal etc.)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
