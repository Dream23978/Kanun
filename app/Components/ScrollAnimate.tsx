"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/* ================================================
   SCROLL ANIMATE - Wrapper component untuk
   animasi on-scroll menggunakan Motion library.
   
   Directions:
   - "up"    → muncul dari bawah ke atas (default)
   - "left"  → muncul dari kiri ke kanan
   - "right" → muncul dari kanan ke kiri
   - "fade"  → fade-in saja tanpa translate
   ================================================ */

type Direction = "up" | "left" | "right" | "fade";

interface ScrollAnimateProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 48 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  fade: { x: 0, y: 0 },
};

export default function ScrollAnimate({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = false,
}: ScrollAnimateProps) {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
