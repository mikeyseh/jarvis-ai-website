"use client";

const PARTICLES = [
  { left: 55, size: 2, delay: 0.5, duration: 7, color: "#00E5FF" },
  { left: 62, size: 1.5, delay: 2.5, duration: 8, color: "#8A2BE2" },
  { left: 68, size: 2, delay: 4.0, duration: 6, color: "#00E5FF" },
  { left: 58, size: 1.5, delay: 1.5, duration: 7.5, color: "#00A8FF" },
  { left: 72, size: 1.5, delay: 3.5, duration: 6.5, color: "#8A2BE2" },
  { left: 50, size: 1.5, delay: 0.8, duration: 8, color: "#00E5FF" },
  { left: 65, size: 2, delay: 5.0, duration: 7, color: "#00A8FF" },
  { left: 60, size: 1.5, delay: 2.0, duration: 6.5, color: "#8A2BE2" },
];

export default function HologramEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="ambient-space" aria-hidden="true" />

      {/* Contours — much subtler */}
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        style={{ opacity: 0.08 }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={i}
            cx="70%"
            cy="55%"
            rx={(8 + i * 8) + "%"}
            ry={(4 + i * 4) + "%"}
            style={{ fill: "none", stroke: "#00A8FF", strokeWidth: 0.6 }}
          />
        ))}
      </svg>

      {/* Soft beam */}
      <div
        className="hologram-beam absolute pointer-events-none"
        style={{
          left: "68%",
          bottom: "14%",
          transform: "translateX(-50%)",
          width: "clamp(140px, 20vw, 320px)",
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0,229,255,0.22) 0%, rgba(0,168,255,0.14) 30%, rgba(138,43,226,0.08) 65%, transparent 100%)",
          clipPath: "polygon(40% 100%, 60% 100%, 100% 0%, 0% 0%)",
          mixBlendMode: "screen",
          filter: "blur(28px)",
          zIndex: 15,
        }}
        aria-hidden="true"
      />

      {/* Soft platform glow */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: "68%",
          bottom: "12%",
          transform: "translateX(-50%)",
          width: "clamp(180px, 26vw, 420px)",
          height: "clamp(28px, 4vw, 52px)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.55) 0%, rgba(0,168,255,0.3) 35%, transparent 75%)",
          filter: "blur(20px)",
          animation: "platform-pulse 5s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />

      {/* Thin ring */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          left: "68%",
          bottom: "12%",
          transform: "translateX(-50%)",
          width: "clamp(220px, 32vw, 500px)",
          height: "clamp(38px, 5.5vw, 70px)",
          borderRadius: "50%",
          border: "1px solid rgba(0,229,255,0.2)",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />

      {/* Fewer particles */}
      <div className="absolute inset-0 pointer-events-none z-30" aria-hidden="true">
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
              boxShadow: "0 0 " + (p.size * 4) + "px " + p.color,
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