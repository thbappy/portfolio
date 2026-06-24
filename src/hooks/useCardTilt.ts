"use client";

import { useCallback } from "react";

/**
 * Returns mouse-move / mouse-leave handlers that apply a perspective-based
 * 3D tilt transform to a card element.
 */
export function useCardTilt(maxDeg = 10) {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xRot = ((y / rect.height) - 0.5) * -maxDeg;
      const yRot = ((x / rect.width) - 0.5) * maxDeg;

      card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) translateY(-5px)`;
    },
    [maxDeg]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    },
    []
  );

  return { handleMouseMove, handleMouseLeave };
}
