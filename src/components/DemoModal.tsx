"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
          style={{ background: "rgba(8,10,15,0.85)", backdropFilter: "blur(12px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="max-w-md w-full rounded-3xl p-8 text-center"
            style={{
              background: "#0D1117",
              border: "1px solid rgba(0,229,255,0.25)",
              boxShadow: "0 0 60px rgba(0,229,255,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                 style={{ background: "radial-gradient(circle, #00E5FF 0%, #8A2BE2 100%)" }}>
              <div className="w-6 h-6 rounded-full border-2 border-white/70" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Live Demo Coming Soon</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              The full JARVIS AI experience is launching soon. Request early access and be the first to try it.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full font-semibold text-[#080A0F]"
              style={{ background: "linear-gradient(135deg, #00E5FF 0%, #8A2BE2 100%)" }}
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
