"use client";

const STATS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp",
    stat: "87%",
    label: "Sales closed",
    color: "#25D366",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: "Email",
    stat: "82%",
    label: "Follow ups sent",
    color: "#FF3366",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Response time",
    stat: "< 3s",
    label: "Average reply",
    color: "#00E5FF",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "POPIA-ready",
    stat: "100%",
    label: "Data isolation",
    color: "#8A2BE2",
  },
];

export default function BenefitsBar() {
  return (
    <div
      className="relative z-40 w-full"
      style={{
        background: "rgba(8, 12, 24, 0.75)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0,229,255,0.15)",
        boxShadow: "0 -20px 60px rgba(0,229,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className="flex items-center gap-3 md:px-6 py-2 md:py-0 relative"
              style={{
                borderLeft:
                  i > 0 ? "1px solid rgba(0,229,255,0.12)" : "none",
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(15, 22, 38, 0.9)",
                  border: "1px solid " + s.color + "40",
                  color: s.color,
                  boxShadow: "0 0 20px " + s.color + "20",
                }}
              >
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] tracking-widest text-slate-500 uppercase">
                  {s.title}
                </p>
                <p
                  className="text-xl font-bold leading-tight"
                  style={{ color: s.color }}
                >
                  {s.stat}
                </p>
                <p className="text-[10px] text-slate-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}