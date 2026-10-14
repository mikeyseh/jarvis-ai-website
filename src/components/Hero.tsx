"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import HologramEffects from "./HologramEffects";
import PhoneMockup from "./PhoneMockup";
import BenefitsBar from "./BenefitsBar";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <HologramEffects />

      <Navbar />

      <div className="relative z-40 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <div
                className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] tracking-widest font-medium"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.35)",
                  color: "#00E5FF",
                  boxShadow: "0 0 20px rgba(0,229,255,0.2)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00E5FF",
                    boxShadow: "0 0 8px #00E5FF",
                  }}
                />
                AI FOR SMEs · SOUTH AFRICA
              </div>

              <h1 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.06] tracking-tight text-white">
                Never lose a
                <br />
                potential customer
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #00E5FF 0%, #8A2BE2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  again.
                </span>
              </h1>

              <p className="mt-5 text-[15px] text-slate-400 max-w-md leading-relaxed">
                Not every customer gets the response they need. Jarvis changes that. Your AI
                sales employee talks, understands, answers, and follows up — turning more
                conversations into customers.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setDemoOpen(true)}
                  className="btn-ripple inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm hover:scale-[1.04] active:scale-[0.97] transition-transform duration-200"
                  style={{
                    background: "linear-gradient(135deg, #00E5FF 0%, #8A2BE2 100%)",
                    boxShadow:
                      "0 10px 40px rgba(0,229,255,0.4), 0 0 60px rgba(138,43,226,0.3)",
                  }}
                >
                  See How It Works
                  <span className="text-base">↗</span>
                </button>

                <button
                  onClick={() => setDemoOpen(true)}
                  className="text-sm text-slate-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2"
                >
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0,229,255,0.35)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00E5FF",
                      fontSize: "10px",
                    }}
                  >
                    ▶
                  </span>
                  Watch demo
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <PhoneMockup onClick={() => setDemoOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <BenefitsBar />

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
