import { useMemo } from "react";

// Floating flower petals across the page.
export function PetalRain({ count = 22 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 10 + Math.random() * 22,
        rotate: Math.random() * 360,
        opacity: 0.05 + Math.random() * 0.15,
        hue: Math.random() > 0.5 ? 12 : 350,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 32 32"
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
            filter: "drop-shadow(0 2px 6px oklch(0.4 0.15 12 / 0.5))",
          }}
        >
          <path
            d="M16 2 C 22 6, 28 12, 24 20 C 22 26, 18 30, 16 30 C 14 30, 10 26, 8 20 C 4 12, 10 6, 16 2 Z"
            fill={`oklch(0.72 0.2 ${p.hue})`}
          />
          <path
            d="M16 8 C 19 12, 21 16, 19 22 C 17 25, 16 27, 16 27"
            stroke="oklch(0.9 0.05 20 / 0.4)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      ))}
    </div>
  );
}
