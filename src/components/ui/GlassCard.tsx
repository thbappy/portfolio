"use client";

import { ReactNode } from "react";
import { useCardTilt } from "@/hooks/useCardTilt";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  enableTilt?: boolean;
  maxTiltDeg?: number;
}

/**
 * Reusable glassmorphism card with optional 3D tilt effect.
 * Preserves the original design: blur backdrop, gradient border,
 * shimmer on hover, green glow shadow.
 */
export default function GlassCard({
  children,
  className = "",
  enableTilt = true,
  maxTiltDeg = 10,
}: GlassCardProps) {
  const { handleMouseMove, handleMouseLeave } = useCardTilt(maxTiltDeg);

  return (
    <div
      className={`glass-card ${className}`}
      onMouseMove={enableTilt ? handleMouseMove : undefined}
      onMouseLeave={enableTilt ? handleMouseLeave : undefined}
    >
      {children}
    </div>
  );
}
