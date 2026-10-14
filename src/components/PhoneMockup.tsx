"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const USER_MSG = "Give me a summary of the new energy matrix.";
const AI_MSG = "The new energy matrix shows a 34% efficiency gain across all sectors.";

export default function PhoneMockup({ onClick }: { onClick: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [userTyped, setUserTyped] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      el.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timers: NodeJS.Timeout[] = [];

    const run = () => {
      if (cancelled) return;
      setUserTyped("");
      setShowTyping(false);
      setShowReply(false);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (cancelled) return;
        i++;
        setUserTyped(USER_MSG.slice(0, i));
        if (i >= USER_MSG.length) {
          clearInterval(typeInterval);
          timers.push(
            setTimeout(() => {
              if (cancelled) return;
              setShowTyping(true);
              timers.push(
                setTimeout(() => {
                  if (cancelled) return;
                  setShowTyping(false);
                  setShowReply(true);
                  timers.push(setTimeout(run, 5000));
                }, 1400)
              );
            }, 400)
          );
        }
      }, 36);
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative"
      style={{
        width: "clamp(400px, 42vw, 620px)",
        height: "clamp(500px, 55vw, 680px)",
        transition: "transform 0.6s cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      {/* Beam */}
      <div
        className="hologram-beam absolute"
        style={{
          left: "50%",
          bottom: "10%",
          transform: "translateX(-50%)",
          width: "45%",
          height: "85%",
          background:
            "linear-gradient(to top, rgba(0,229,255,0.45) 0%, rgba(0,168,255,0.28) 30%, rgba(138,43,226,0.16) 65%, transparent 100%)",
          clipPath: "polygon(38% 100%, 62% 100%, 100% 0%, 0% 0%)",
          mixBlendMode: "screen",
          filter: "blur(24px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Platform glow */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "5%",
          transform: "translateX(-50%)",
          width: "85%",
          height: "16%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.9) 0%, rgba(0,168,255,0.55) 30%, rgba(138,43,226,0.25) 55%, transparent 80%)",
          filter: "blur(18px)",
          animation: "platform-pulse 4s ease-in-out infinite",
          mixBlendMode: "screen",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Platform core */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "7%",
          transform: "translateX(-50%)",
          width: "55%",
          height: "7%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(0,229,255,0.7) 40%, transparent 75%)",
          filter: "blur(10px)",
          mixBlendMode: "screen",
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* Platform ring */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "3.5%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "20%",
          borderRadius: "50%",
          border: "1px solid rgba(0,229,255,0.45)",
          boxShadow:
            "0 0 40px rgba(0,229,255,0.35), inset 0 0 40px rgba(0,229,255,0.2)",
          mixBlendMode: "screen",
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* Phone — wrapper div for centering, button for animation */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "14%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <button
          onClick={onClick}
          className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 focus:outline-none block"
          style={{
            width: "clamp(160px, 16vw, 210px)",
            aspectRatio: "9/18.5",
            animation: "phone-float 5s ease-in-out infinite",
            filter:
              "drop-shadow(0 0 30px rgba(0,229,255,0.55)) drop-shadow(0 0 70px rgba(138,43,226,0.35))",
          }}
          aria-label="Open JARVIS demo"
        >
          <div
            className="absolute inset-0 rounded-[12%] bg-[#0a0a0c]"
            style={{
              boxShadow:
                "inset 0 0 0 1.5px rgba(0,229,255,0.55), inset 0 0 0 3px #1a1a1c, 0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(138,43,226,0.3)",
            }}
          />
          <div
            className="absolute bg-[#03050a] rounded-[10%] overflow-hidden"
            style={{ inset: "2%" }}
          >
            <div className="absolute top-[2.8%] left-1/2 -translate-x-1/2 w-[28%] h-[2.6%] bg-black rounded-full z-10" />

            <div className="absolute inset-0 flex flex-col pt-[12%] px-[7%] pb-[6%]">
              <div className="flex items-center gap-1.5 mb-2">
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: "clamp(18px,3vw,24px)",
                    height: "clamp(18px,3vw,24px)",
                    background:
                      "radial-gradient(circle at 35% 35%, #00E5FF 0%, #0066cc 55%, #003380 100%)",
                    boxShadow: "0 0 10px rgba(0,229,255,0.85)",
                  }}
                />
                <div className="flex-1">
                  <p className="text-white font-bold tracking-widest text-[clamp(7px,1vw,9px)]">
                    J.A.R.V.I.S
                  </p>
                  <p className="text-[#00E5FF] text-[clamp(5px,0.7vw,7px)] tracking-wider">
                    v7.2.1 · ONLINE
                  </p>
                </div>
              </div>

              <div
                className="rounded-md px-2 py-1 mb-2 flex items-center justify-between"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.2)",
                }}
              >
                <p className="text-[#00E5FF] text-[clamp(6px,0.75vw,8px)] font-semibold tracking-wider">
                  JARVIS-GPT 4.5
                </p>
                <span className="text-green-400 text-[clamp(5px,0.6vw,6px)]">● LIVE</span>
              </div>

              <div className="flex-1 flex flex-col gap-1.5 justify-end">
                {userTyped && (
                  <div className="flex justify-end">
                    <div
                      className="rounded-lg rounded-tr-sm px-2 py-1.5 max-w-[88%]"
                      style={{ background: "rgba(0,102,204,0.9)" }}
                    >
                      <p className="text-white text-[clamp(6px,0.85vw,8px)] leading-relaxed">
                        {userTyped}
                        {userTyped.length < USER_MSG.length && (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.7, repeat: Infinity }}
                            className="inline-block ml-0.5"
                            style={{ color: "#00E5FF" }}
                          >
                            ▎
                          </motion.span>
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex"
                  >
                    <div
                      className="rounded-lg rounded-tl-sm px-2 py-1.5"
                      style={{
                        background: "rgba(0,229,255,0.1)",
                        border: "1px solid rgba(0,229,255,0.2)",
                      }}
                    >
                      <div className="flex gap-1 items-center h-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="rounded-full"
                            style={{ width: 4, height: 4, background: "#00E5FF" }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {showReply && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex"
                  >
                    <div
                      className="rounded-lg rounded-tl-sm px-2 py-1.5 max-w-[92%]"
                      style={{
                        background: "rgba(0,229,255,0.1)",
                        border: "1px solid rgba(0,229,255,0.2)",
                      }}
                    >
                      <p className="text-[#cbd5e1] text-[clamp(6px,0.85vw,8px)] leading-relaxed">
                        <span className="text-[#00E5FF] font-semibold">JARVIS: </span>
                        {AI_MSG}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="mt-2">
                <div
                  className="rounded-full px-2.5 py-1.5 flex items-center gap-1.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(0,229,255,0.15)",
                  }}
                >
                  <p className="text-[#666] text-[clamp(6px,0.75vw,7px)] flex-1">
                    Ask anything, Sir…
                  </p>
                  <div
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "linear-gradient(135deg, #00E5FF, #8A2BE2)",
                      boxShadow: "0 0 8px rgba(0,229,255,0.8)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
