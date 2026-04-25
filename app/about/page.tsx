import Navbar from "@/components/Navbar";
import FoodPlaceholder from "@/components/FoodPlaceholder";
import FooterCTA from "@/components/FooterCTA";

const values = [
  { n: "01", title: "No paid reviews. Ever.", text: "The second money touches a review, trust dies. Restaurants can partner with us on events, menus, and tastings — never on ratings.", featured: true },
  { n: "02", title: "Short, honest, useful.", text: "We'd rather have a one-liner that helps you decide than a thousand-word essay nobody reads. Real takes > review theatre.", featured: false },
  { n: "03", title: "Built for the hungry, not the algorithm.", text: "We don't push dishes because they pay. We rank by what the people actually eating near you are raving about this week.", featured: false },
  { n: "04", title: "Small, local, loud.", text: "A hole-in-the-wall with five seats should get the same spotlight as a chain with five hundred. Often more.", featured: true },
];

export default function AboutPage() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--cream)",
        color: "var(--ink)",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* HERO MANIFESTO */}
      <div className="e-about-hero">
        <div
          style={{
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.55)",
            marginBottom: 28,
          }}
        >
          ● About Eatables
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(40px, 6.5vw, 92px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          We&apos;re building the
          <br />
          <span
            style={{
              background: "var(--primary)",
              padding: "0 14px",
              borderRadius: 12,
              display: "inline-block",
              transform: "rotate(-1.5deg)",
            }}
          >
            food-finder
          </span>{" "}
          we
          <br />
          kept{" "}
          <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", fontWeight: 400 }}>
            wishing existed
          </span>
          <br />
          at 9pm on a Friday.
        </h1>

        {/* Image row — 2-col on mobile, 3-col on desktop */}
        <div className="e-about-imgs">
          <div className="e-about-img-1">
            <FoodPlaceholder label="co-founders · 2024" tone="warm" />
          </div>
          <div className="e-about-img-2">
            <FoodPlaceholder label="first meetup · bandra" tone="green" />
          </div>
          <div className="e-about-img-3">
            <FoodPlaceholder label="early sketches" tone="rose" />
          </div>
        </div>
      </div>

      {/* ORIGIN STORY */}
      <div
        className="e-origin-section"
        style={{ background: "var(--ink)", color: "var(--cream)", overflow: "hidden", position: "relative" }}
      >
        {/* Ambient blob */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "var(--primary)",
            opacity: 0.15,
          }}
        />

        <div className="e-origin-grid">
          <div>
            <div
              style={{
                fontFamily: "ui-monospace, Menlo, monospace",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: 16,
              }}
            >
              ● The story
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              It started<br />with a hungry<br />traveler.
            </h2>
          </div>

          <div style={{ fontSize: "clamp(15px, 1.6vw, 19px)", lineHeight: 1.65, color: "rgba(253,251,243,0.78)" }}>
            <p style={{ marginBottom: 24 }}>
              In the summer of 2024, our co-founder{" "}
              <b style={{ color: "var(--cream)" }}>Sarah</b> was visiting Mangalore, famished, navigating a language barrier, and desperately swiping through every food app on her phone. She wanted to dive into the city's diverse cuisines, but none of the traditional platforms were actually helpful. Every search just led to more frustration, leaving her feeling completely disconnected from the local food scene.
            </p>
            <p style={{ marginBottom: 24 }}>
              Meanwhile, somewhere in that exact same city, few developers were having a breakthrough. Frustrated by the gap between incredible local food and the people who wanted to eat it, one pitched a simple concept: "I've got an idea for our project. An app that actually helps you discover the best cuisines nearby." The response was an immediate, enthusiastic "Cooooool." That day, Eatables was born.
            </p>

            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(20px, 2.5vw, 40px)",
                fontWeight: 500,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "var(--primary)",
                margin: "48px 0",
                padding: "24px 0",
                borderTop: "1.5px solid var(--primary)",
                borderBottom: "1.5px solid var(--primary)",
              }}
            >
              &ldquo;If the review doesn&apos;t help you decide in ten seconds, it&apos;s not a review. It&apos;s a blog.&rdquo;
            </div>

            <p style={{ marginBottom: 24 }}>
              Today, we are still building that exact concept—a feature-rich food discovery and review platform that acts as your personal travel companion. We treat your search for authentic, diverse food like a real problem worth solving, ensuring you never have to settle for a disappointing meal in an unfamiliar city.
            </p>
            <p style={{ marginBottom: 0 }}>
              We’re a passionate team based right here in Mangalore. We love our local flavors, we get a little too excited during brainstorming sessions, and we firmly believe the best culinary experience of your trip is waiting just down the street—you just need the right app to find it.
            </p>

            <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 72, height: 72, borderRadius: 36,
                  background: "#E8D4A0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, fontWeight: 700, color: "#5A4A2A",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  flexShrink: 0,
                }}
              >
                O
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 20, fontWeight: 700, color: "var(--cream)" }}>
                  Octane Founders
                </div>
                <div style={{ fontSize: 14, color: "rgba(253,251,243,0.6)", marginTop: 2 }}>
                  Co-founder &amp; CEO · Eats everything twice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION + VALUES */}
      <div className="e-values-section" style={{ background: "var(--cream)", position: "relative" }}>
        <div className="e-values-header">
          <div>
            <div
              style={{
                fontFamily: "ui-monospace, Menlo, monospace",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.55)",
                marginBottom: 16,
              }}
            >
              ● What we believe
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                margin: 0,
                maxWidth: 700,
              }}
            >
              Four things<br />we will<br />die on a hill for.
            </h2>
          </div>
          <div style={{ fontSize: 17, color: "rgba(26,26,26,0.6)", maxWidth: 360, lineHeight: 1.55 }}>
            Everything we build, ship and say gets stress-tested against these.
            If something on Eatables ever feels off, it probably broke one of them — tell us.
          </div>
        </div>

        <div className="e-values-grid">
          {values.map((v) => (
            <div
              key={v.n}
              style={{
                background: v.featured ? "var(--primary)" : "#fff",
                color: "var(--ink)",
                borderRadius: 24,
                padding: 36,
                border: v.featured ? "none" : "1.5px solid rgba(26,26,26,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 280,
              }}
            >
              <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, letterSpacing: "0.2em", color: "rgba(26,26,26,0.55)" }}>
                {v.n}
              </div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                {v.title}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,26,0.75)" }}>{v.text}</div>
            </div>
          ))}
        </div>
      </div>

      <FooterCTA
        tag="● Join us"
        headline={"Eat better.\nTogether."}
        sub="Summer 2026. Your city, unlocked. Get on the waitlist — we'll send you exactly one email when it's your turn."
        btnLabel="Get early access →"
      />
    </div>
  );
}
