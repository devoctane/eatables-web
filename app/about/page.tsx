import Navbar from "@/components/Navbar";
import FoodPlaceholder from "@/components/FoodPlaceholder";
import FooterCTA from "@/components/FooterCTA";

const values = [
  {
    n: "01",
    title: "No paid reviews. Ever.",
    text: "The second money touches a review, trust dies. Restaurants can partner with us on events, menus, and tastings — never on ratings.",
    featured: true,
  },
  {
    n: "02",
    title: "Short, honest, useful.",
    text: "We'd rather have a one-liner that helps you decide than a thousand-word essay nobody reads. Real takes > review theatre.",
    featured: false,
  },
  {
    n: "03",
    title: "Built for the hungry, not the algorithm.",
    text: "We don't push dishes because they pay. We rank by what the people actually eating near you are raving about this week.",
    featured: false,
  },
  {
    n: "04",
    title: "Small, local, loud.",
    text: "A hole-in-the-wall with five seats should get the same spotlight as a chain with five hundred. Often more.",
    featured: true,
  },
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
      <div
        style={{
          position: "relative",
          padding: "80px 56px 120px",
          textAlign: "center",
        }}
      >
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
            fontSize: "clamp(56px, 6.5vw, 92px)",
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
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            wishing existed
          </span>
          <br />
          at 9pm on a Friday.
        </h1>

        {/* Image row */}
        <div
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr 1fr",
            gap: 20,
            alignItems: "end",
          }}
        >
          <div
            style={{
              height: 240,
              borderRadius: 20,
              overflow: "hidden",
              transform: "rotate(-4deg)",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
            }}
          >
            <FoodPlaceholder label="co-founders · 2024" tone="warm" />
          </div>
          <div
            style={{
              height: 320,
              borderRadius: 20,
              overflow: "hidden",
              transform: "rotate(2deg)",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
            }}
          >
            <FoodPlaceholder label="first meetup · bandra" tone="green" />
          </div>
          <div
            style={{
              height: 220,
              borderRadius: 20,
              overflow: "hidden",
              transform: "rotate(-3deg)",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
            }}
          >
            <FoodPlaceholder label="early sketches" tone="rose" />
          </div>
        </div>
      </div>

      {/* ORIGIN STORY */}
      <div
        style={{
          padding: "120px 56px",
          background: "var(--ink)",
          color: "var(--cream)",
          position: "relative",
          overflow: "hidden",
        }}
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

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "0.4fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
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
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              It started
              <br />
              with a bad
              <br />
              biryani.
            </h2>
          </div>

          <div
            style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(253,251,243,0.78)" }}
          >
            <p style={{ marginBottom: 24 }}>
              In the summer of 2024, our co-founder{" "}
              <b style={{ color: "var(--cream)" }}>Rhea</b> was visiting a
              friend in a new city, hungry, a little lost, and staring at four
              open tabs of review sites. The one with the most stars led her to
              a soggy, overpriced biryani in a restaurant that clearly paid for
              its ranking. The one with the honest takes was impossible to
              search.
            </p>
            <p style={{ marginBottom: 24 }}>
              That night, over cold leftovers, she and{" "}
              <b style={{ color: "var(--cream)" }}>Ishaan</b> sketched the
              first version of Eatables on a dosa-stained napkin: a map of
              dishes — not restaurants — rated by people who actually ate there,
              with zero paid placements and reviews short enough to read while
              your food got cold.
            </p>

            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(24px, 2.5vw, 40px)",
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
              &ldquo;If the review doesn&apos;t help you decide in ten seconds,
              it&apos;s not a review. It&apos;s a blog.&rdquo;
            </div>

            <p style={{ marginBottom: 24 }}>
              Two years, a tiny team, and{" "}
              <b style={{ color: "var(--cream)" }}>12,400+ hand-vetted restaurants</b>{" "}
              later, we&apos;re still building the same thing — a pocket-sized
              food scout that treats your hunger like a real problem worth
              solving, and your taste like something worth sharing.
            </p>
            <p style={{ marginBottom: 0 }}>
              We&apos;re a team of eight in Mumbai, previously at Zomato,
              Swiggy and Airbnb. We eat too much. We argue about vada pav a
              lot. And we think the best thing you&apos;re going to eat this
              year is probably three blocks from where you&apos;re sitting —
              you just haven&apos;t found it yet.
            </p>

            <div
              style={{
                marginTop: 48,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  background: "#E8D4A0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#5A4A2A",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  flexShrink: 0,
                }}
              >
                R
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--cream)",
                  }}
                >
                  Rhea Kapoor
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(253,251,243,0.6)",
                    marginTop: 2,
                  }}
                >
                  Co-founder &amp; CEO · Eats everything twice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION + VALUES */}
      <div style={{ padding: "120px 56px", background: "var(--cream)", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 60,
            gap: 40,
          }}
        >
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
                fontSize: "clamp(48px, 5vw, 72px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                margin: 0,
                maxWidth: 700,
              }}
            >
              Four things
              <br />
              we will
              <br />
              die on a hill for.
            </h2>
          </div>
          <div
            style={{
              fontSize: 17,
              color: "rgba(26,26,26,0.6)",
              maxWidth: 360,
              lineHeight: 1.55,
            }}
          >
            Everything we build, ship and say gets stress-tested against these.
            If something on Eatables ever feels off, it probably broke one of
            them — tell us.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
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
              <div
                style={{
                  fontFamily: "ui-monospace, Menlo, monospace",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  color: "rgba(26,26,26,0.55)",
                }}
              >
                {v.n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                {v.title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(26,26,26,0.75)",
                }}
              >
                {v.text}
              </div>
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
