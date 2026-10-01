"use client";

export default function Navbar() {
  const links = ["Collaboration", "About", "Technology", "Business"];

  return (
    <nav className="relative z-50 w-full px-8 md:px-14 lg:px-20 py-5 flex items-center justify-between">
      <span className="text-[16px] font-bold tracking-tight text-white whitespace-nowrap">
        JARVIS <span style={{ color: "#00E5FF", textShadow: "0 0 12px #00E5FF" }}>AI</span>
      </span>

      <ul className="hidden md:flex items-center gap-10 text-[14px] text-slate-400">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="relative hover:text-[#00E5FF] transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[1.5px] after:w-0 after:bg-[#00E5FF] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="text-[13px] px-5 py-2.5 rounded-full font-semibold hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 whitespace-nowrap"
        style={{
          background: "linear-gradient(135deg, #00E5FF 0%, #8A2BE2 100%)",
          color: "#fff",
          boxShadow: "0 0 30px rgba(0,229,255,0.4)",
        }}
      >
        Meet Jarvis
      </button>
    </nav>
  );
}