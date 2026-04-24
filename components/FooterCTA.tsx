interface FooterCTAProps {
  headline: string;
  sub: string;
  btnLabel: string;
  tag?: string;
}

export default function FooterCTA({ headline, sub, btnLabel, tag = "● Join us" }: FooterCTAProps) {
  const lines = headline.split("\n");

  return (
    <footer
      style={{
        padding: "100px 56px 60px",
        background: "var(--primary)",
        color: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 12,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(72px, 8vw, 120px)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.9,
          margin: 0,
        }}
      >
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <p style={{ fontSize: 19, marginTop: 24, maxWidth: 520, lineHeight: 1.5 }}>{sub}</p>

      <div
        id="waitlist"
        style={{
          marginTop: 40,
          display: "flex",
          background: "#fff",
          borderRadius: 999,
          padding: "6px 6px 6px 24px",
          alignItems: "center",
          width: 520,
          maxWidth: "100%",
          boxShadow: "0 6px 0 rgba(26,26,26,0.12)",
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
          }}
        />
        <button
          style={{
            padding: "14px 24px",
            background: "var(--ink)",
            color: "var(--primary)",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {btnLabel}
        </button>
      </div>

      <div
        style={{
          marginTop: 80,
          paddingTop: 28,
          borderTop: "1.5px solid rgba(26,26,26,0.15)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          fontWeight: 500,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span>© 2026 Eatables · Made hungry in Mumbai</span>
        <span style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Press kit</span>
          <span>hi@eatables.app</span>
        </span>
      </div>
    </footer>
  );
}
