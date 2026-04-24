import FoodPlaceholder from "./FoodPlaceholder";
import PinIcon from "./PinIcon";
import StarIcon from "./StarIcon";

interface PhoneMockupProps {
  accent?: string;
  scale?: number;
}

export default function PhoneMockup({ accent = "#FFC528", scale = 1 }: PhoneMockupProps) {
  const W = 300, H = 610;

  return (
    <div
      style={{
        width: W,
        height: H,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 42,
        background: "#0E0E0E",
        padding: 8,
        boxShadow:
          "0 30px 60px -20px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(0,0,0,0.25), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
        fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 34,
          overflow: "hidden",
          background: "#FDFBF3",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 92,
            height: 26,
            background: "#0E0E0E",
            borderRadius: 14,
            zIndex: 10,
          }}
        />

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 22px 0",
            fontSize: 13,
            fontWeight: 600,
            color: "#111",
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <svg width="14" height="10" viewBox="0 0 14 10">
              <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#111" />
              <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#111" />
              <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#111" />
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#111" />
            </svg>
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
              <rect x="0.5" y="0.5" width="15" height="8" rx="2" stroke="#111" opacity="0.45" />
              <rect x="2" y="2" width="11" height="5" rx="1" fill="#111" />
            </svg>
          </span>
        </div>

        {/* Location + avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "38px 18px 10px",
          }}
        >
          <div>
            <div style={{ fontSize: 10, color: "#8A7F5F", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              Eating in
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 16, fontWeight: 700, color: "#1A1A1A" }}>
              <PinIcon size={13} color={accent} /> Bandra West ▾
            </div>
          </div>
          <div
            style={{
              width: 34, height: 34, borderRadius: 17, background: "#E8D4A0",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "#8A6D3B",
            }}
          >
            RK
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "4px 18px 12px" }}>
          <div
            style={{
              background: "#F1ECDE", borderRadius: 14, padding: "11px 14px",
              display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "#8A7F5F",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#8A7F5F" strokeWidth="1.8" />
              <path d="M11 11L14 14" stroke="#8A7F5F" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span>Butter chicken, biryani, …</span>
          </div>
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", gap: 6, padding: "0 18px 14px", overflow: "hidden" }}>
          {[
            { label: "All", active: true },
            { label: "🍜 Noodles" },
            { label: "🍕 Pizza" },
            { label: "🌮 Tacos" },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                padding: "7px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                background: c.active ? "#1A1A1A" : "#F1ECDE",
                color: c.active ? accent : "#5A4A2A",
                whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              {c.label}
            </div>
          ))}
        </div>

        {/* Section header */}
        <div
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            padding: "2px 18px 10px",
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 800, color: "#1A1A1A", letterSpacing: "-0.01em" }}>Hot right now</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#8A7F5F" }}>See all</div>
        </div>

        {/* Featured card */}
        <div style={{ padding: "0 18px 12px" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff", boxShadow: "0 6px 20px -8px rgba(0,0,0,0.12)" }}>
            <div style={{ height: 108, position: "relative" }}>
              <FoodPlaceholder label="ramen · hero" tone="warm" />
              <div
                style={{
                  position: "absolute", top: 10, left: 10,
                  background: "rgba(26,26,26,0.88)", color: accent,
                  padding: "4px 8px", borderRadius: 999, fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 4,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: 5, background: accent }} /> TRENDING
              </div>
              <div
                style={{
                  position: "absolute", top: 10, right: 10, width: 28, height: 28, borderRadius: 14,
                  background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="13" height="12" viewBox="0 0 14 13" fill="none">
                  <path d="M7 12 C3 9 1 6.5 1 4 C1 2 2.5 1 4 1 C5.3 1 6.3 1.8 7 3 C7.7 1.8 8.7 1 10 1 C11.5 1 13 2 13 4 C13 6.5 11 9 7 12 Z" stroke="#1A1A1A" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ padding: "10px 12px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>Koko Tokyo</div>
                <div style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 12, fontWeight: 700, color: "#1A1A1A" }}>
                  <StarIcon size={11} color={accent} /> 4.8
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#8A7F5F", marginTop: 2 }}>Ramen · $$ · 0.4 mi</div>
              <div style={{ marginTop: 8, fontSize: 11, color: "#5A4A2A", fontStyle: "italic", lineHeight: 1.4 }}>
                &ldquo;Best tonkotsu this side of Tokyo&rdquo; — Priya
              </div>
            </div>
          </div>
        </div>

        {/* Small cards */}
        <div style={{ padding: "0 18px", display: "flex", gap: 10 }}>
          {[
            { name: "Bombay Canteen", tag: "Indian · $$", rating: "4.7", tone: "green" as const },
            { name: "Papi Chulo", tag: "Tacos · $", rating: "4.6", tone: "rose" as const },
          ].map((r, i) => (
            <div key={i} style={{ flex: 1, borderRadius: 12, background: "#fff", overflow: "hidden", boxShadow: "0 3px 10px -4px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 60 }}>
                <FoodPlaceholder label={r.tag.split(" · ")[0]} tone={r.tone} />
              </div>
              <div style={{ padding: "7px 9px 9px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#1A1A1A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2, fontSize: 9.5, color: "#8A7F5F" }}>
                  <span>{r.tag}</span>
                  <span style={{ color: "#1A1A1A", fontWeight: 700, display: "flex", alignItems: "center", gap: 2 }}>
                    <StarIcon size={9} color={accent} /> {r.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div
          style={{
            marginTop: "auto", padding: "10px 18px 22px",
            display: "flex", justifyContent: "space-around",
            borderTop: "1px solid #F1ECDE", background: "#FDFBF3",
          }}
        >
          {[{ icon: "◉", active: true }, { icon: "⊙" }, { icon: "♡" }, { icon: "☰" }].map((n, i) => (
            <div
              key={i}
              style={{
                width: 34, height: 34, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: n.active ? accent : "transparent",
                color: n.active ? "#1A1A1A" : "#8A7F5F",
                fontSize: 16, fontWeight: 700,
              }}
            >
              {n.icon}
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div
          style={{
            position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
            width: 100, height: 4, borderRadius: 4, background: "#1A1A1A", opacity: 0.35,
          }}
        />
      </div>
    </div>
  );
}
