import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";
import FooterCTA from "@/components/FooterCTA";

const avatarColors = ["#E8D4A0", "#F5D6CC", "#D9E5C8", "#F1ECDE"];
const avatarNames = ["RK", "AM", "SJ", "+"];

export default function HomePage() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "var(--cream)",
        position: "relative",
        fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif",
        color: "var(--ink)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Amber hero block */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: -120,
          width: "56%",
          background: "var(--primary)",
          borderRadius: "240px 0 0 0",
          zIndex: 0,
        }}
      />

      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 40,
          padding: "0 56px 56px",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* Left column */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              background: "rgba(26,26,26,0.06)",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                background: "var(--primary)",
                display: "inline-block",
              }}
            />
            Coming soon · Launching summer &apos;26
          </div>

          <h1
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(64px, 6vw, 96px)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Find the
            <br />
            <span
              style={{
                background: "var(--primary)",
                padding: "0 14px",
                borderRadius: 12,
                display: "inline-block",
                transform: "rotate(-1.5deg)",
                margin: "6px 0",
              }}
            >
              good stuff.
            </span>
            <br />
            Skip the rest.
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(26,26,26,0.68)",
              maxWidth: 480,
              marginTop: 28,
              marginBottom: 36,
            }}
          >
            Eatables is the pocket-sized food scout that hunts down legit
            restaurants, hidden gems and holy-sh*t-good dishes — wherever you
            happen to be hungry.
          </p>

          <div
            id="waitlist"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: 999,
              padding: "6px 6px 6px 22px",
              boxShadow:
                "0 2px 0 rgba(26,26,26,0.08), 0 0 0 2px rgba(26,26,26,0.06)",
              width: 440,
              maxWidth: "100%",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--ink)",
                fontFamily: "inherit",
              }}
            />
            <button
              style={{
                padding: "14px 24px",
                background: "var(--ink)",
                color: "var(--primary)",
                border: "none",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              Join the waitlist
            </button>
          </div>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 13,
              color: "rgba(26,26,26,0.7)",
            }}
          >
            <div style={{ display: "flex" }}>
              {avatarNames.map((name, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    background: avatarColors[i],
                    border: "2.5px solid var(--cream)",
                    marginLeft: i === 0 ? 0 : -10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#5A4A2A",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
            <span>
              <b style={{ color: "var(--ink)" }}>4,200+</b> hungry humans
              already in line
            </span>
          </div>
        </div>

        {/* Right column — phone */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ transform: "rotate(4deg)" }}>
            <PhoneMockup accent="#FFC528" />
          </div>

          {/* Starburst sticker */}
          <div
            style={{
              position: "absolute",
              top: 40,
              right: -10,
              width: 110,
              height: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(12deg)",
              zIndex: 3,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="110"
              height="110"
              style={{ position: "absolute", inset: 0 }}
            >
              <path
                d={(() => {
                  const pts: string[] = [];
                  const N = 20;
                  for (let i = 0; i < N * 2; i++) {
                    const a = (i / (N * 2)) * Math.PI * 2 - Math.PI / 2;
                    const r = i % 2 === 0 ? 48 : 40;
                    pts.push(
                      `${50 + Math.cos(a) * r},${50 + Math.sin(a) * r}`
                    );
                  }
                  return "M" + pts.join(" L") + " Z";
                })()}
                fill="var(--cream)"
                stroke="var(--ink)"
                strokeWidth="2"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "var(--ink)",
                textAlign: "center",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              NEW
              <br />
              in your
              <br />
              city!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom doodle */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 56px 40px",
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 11,
          color: "rgba(26,26,26,0.45)",
          letterSpacing: "0.08em",
        }}
      >
        ✦ 12,400+ restaurants &nbsp;·&nbsp; 38 cities &nbsp;·&nbsp; 0 paid
        reviews
      </div>

      <FooterCTA
        tag="● Last call"
        headline={"Join the\nwaitlist."}
        sub="Get in early. First 10,000 humans unlock the OG badge, a free year of pro features, and a spot on the founding wall."
        btnLabel="Count me in →"
      />
    </div>
  );
}
