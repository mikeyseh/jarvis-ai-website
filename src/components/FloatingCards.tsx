"use client";

import { motion } from "framer-motion";

export default function FloatingCards() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex absolute z-40 items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl hover-lift"
        style={{
          left: "8%",
          top: "62%",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          animation: "card-float 5s ease-in-out infinite",
        }}
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
          <p className="text-xs text-gray-500">We are on</p>
        </div>
        <div className="ml-2 pl-3 border-l border-gray-200">
          <p className="text-sm font-bold text-gray-900">87%</p>
          <p className="text-xs text-gray-500">Sales</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex absolute z-40 items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl hover-lift"
        style={{
          right: "8%",
          top: "45%",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          animation: "card-float 6s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-md">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Email</p>
          <p className="text-xs text-gray-500">leads converted</p>
        </div>
        <div className="ml-2 pl-3 border-l border-gray-200">
          <p className="text-sm font-bold text-gray-900">82%</p>
          <p className="text-xs text-gray-500">Follow Ups</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        className="hidden lg:flex absolute z-40 items-start gap-3 px-5 py-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl hover-lift"
        style={{
          right: "12%",
          bottom: "18%",
          maxWidth: "320px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          animation: "card-float 7s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 rounded-full border-2 border-[#00E5FF]" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900 mb-1">JARVIS AI</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Hi, I&apos;m Jarvis, your AI sales employee. I talk to customers, answer questions, and help close sales.
          </p>
        </div>
      </motion.div>
    </>
  );
}
