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
      className="e-footer"
      style={{ background: "var(--primary)", color: "var(--ink)" }}
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
          fontSize: "clamp(52px, 8vw, 120px)",
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

      <p style={{ fontSize: "clamp(15px, 1.8vw, 19px)", marginTop: 24, maxWidth: 520, lineHeight: 1.5 }}>
        {sub}
      </p>

      <div
        id="waitlist"
        className="e-footer-input"
        style={{ boxShadow: "0 6px 0 rgba(26,26,26,0.12)" }}
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
            minWidth: 0,
          }}
        />
        <button
          style={{
            padding: "14px 20px",
            background: "var(--ink)",
            color: "var(--primary)",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 700,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {btnLabel}
        </button>
      </div>

      <div
        className="e-footer-bottom"
        style={{ borderTop: "1.5px solid rgba(26,26,26,0.15)" }}
      >
        <span>© 2026 Eatables · Made hungry</span>
        <span className="e-footer-links">
          <a target="_blank" href="https://www.eatables.app/docs/privacy-policy">Privacy & Terms</a>
            <a href="mailto:hello@eatables.app">hello@eatables.app</a>
        </span>
      </div>
    </footer>
  );
}
