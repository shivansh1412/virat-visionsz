"use client";
import { motion } from "motion/react";

// Virat Visionsz brand colors
const GOLD = "#c8922a";
const LIGHT_NAVY = "#4a6bcf";

interface FloatingPathsProps {
  position: number;
  color: string;
}

function FloatingPaths({ position, color }: FloatingPathsProps) {
  // Pre-compute durations deterministically (no Math.random → no hydration mismatch)
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    duration: 20 + (i % 8) * 2.5, // 20–37.5s, fully deterministic
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Decorative background paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={color}
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.022}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.55, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * Drop-in animated background — Virat Visionsz colors (deep navy + gold lines).
 * Place as the first child of a `relative overflow-hidden` container.
 */
export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0d1833]">
      {/* Gold layer — flows right */}
      <FloatingPaths position={1} color={GOLD} />
      {/* Light-navy layer — flows left */}
      <FloatingPaths position={-1} color={LIGHT_NAVY} />
    </div>
  );
}
