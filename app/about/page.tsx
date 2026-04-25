import Navbar from "@/components/Navbar";
import Image from "next/image";
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
            <Image
              src="/food-images/img1.jpg"
              alt="Our team"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
            />
          </div>
          <div className="e-about-img-2">
            <Image
              src="/food-images/img2.jpg"
              alt="Brainstorming session"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
            />
          </div>
          <div className="e-about-img-3">
            <Image
              src="/food-images/img3.jpg"
              alt="Early ideas and concepts"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", borderRadius: "16px", objectFit: "cover" }}
            />
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
      We realized something was broken when finding a good meal in an unfamiliar place became harder than actually cooking one. Instead of helpful advice, hungry travelers were left scrolling through apps filled with generic, bloated reviews and paid placements that pushed average food to the top of the list.
    </p>
    <p style={{ marginBottom: 24 }}>
      It started with a simple, frustrating realization: food discovery should be honest, helpful, and human.
    </p>
    <p style={{ marginBottom: 24 }}>
      We wanted to build something entirely different. We envisioned a platform stripped of the noise and the sponsored rankings—a place where real food lovers could share genuine experiences, unearth hidden culinary gems, and connect with others who share their unapologetic passion for good food.
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
      Today, that vision is Eatables. We are building a food discovery platform designed to act as your personal, trusted guide to authentic cuisine. We firmly believe that great food experiences shouldn&apos;t feel impossible to find—they should be easily discovered, celebrated, and shared with a community that cares.
    </p>
    <p style={{ marginBottom: 0 }}>
      Behind the screen, we&apos;re just a passionate team of food lovers and developers. We get a little too excited about discovering a great local meal, we staunchly believe in the power of honest reviews, and we are completely committed to helping people find the absolute best food, wherever their travels take them.
    </p>
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
        sub="Coming soon. Join the waitlist to be among the first to experience honest food discovery."
        btnLabel="Get early access →"
      />
    </div>
  );
}
