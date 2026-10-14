"use client";

const PARTICLES = [
  { left: 52, size: 2.2, delay: 0.5, duration: 6.5, color: "#00E5FF" },
  { left: 58, size: 1.4, delay: 2.1, duration: 7.2, color: "#8A2BE2" },
  { left: 63, size: 2.6, delay: 1.3, duration: 5.8, color: "#00A8FF" },
  { left: 55, size: 1.8, delay: 3.4, duration: 8.1, color: "#00E5FF" },
  { left: 68, size: 2.1, delay: 0.9, duration: 6.7, color: "#8A2BE2" },
  { left: 60, size: 1.2, delay: 4.2, duration: 7.5, color: "#00E5FF" },
  { left: 72, size: 2.8, delay: 1.7, duration: 5.4, color: "#00A8FF" },
  { left: 48, size: 1.6, delay: 3.1, duration: 8.3, color: "#8A2BE2" },
];

export default function HologramEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="ambient-space" aria-hidden="true" />

      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        style={{ opacity: 0.15 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <ellipse
            key={i}
            cx="68%"
            cy="55%"
            rx={(8 + i * 8) + "%"}
            ry={(4 + i * 4) + "%"}
            style={{ fill: "none", stroke: "#00A8FF", strokeWidth: 0.7 }}
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={"b" + i}
            cx="22%"
            cy="35%"
            rx={(5 + i * 7) + "%"}
            ry={(3 + i * 4) + "%"}
            style={{ fill: "none", stroke: "#8A2BE2", strokeWidth: 0.6 }}
          />
        ))}
      </svg>

      <div className="absolute inset-0" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left + "%",
              bottom: "15%",
              width: p.size + "px",
              height: p.size + "px",
              background: p.color,
              boxShadow: "0 0 " + (p.size * 5) + "px " + p.color,
              animation: "particle-rise " + p.duration + "s linear infinite",
              animationDelay: p.delay + "s",
            }}
          />
        ))}
      </div>

      <div className="vignette" aria-hidden="true" />
    </div>
  );
}
