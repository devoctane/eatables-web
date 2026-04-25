"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import StarIcon from "@/components/StarIcon";
import FoodPlaceholder from "@/components/FoodPlaceholder";
import FooterCTA from "@/components/FooterCTA";

const steps = [
  {
    n: "01",
    title: "Eat something.",
    text: "Grab a plate anywhere — a street cart, a hidden gem, the spot your aunt keeps raving about. Eatables works wherever you're hungry.",
    tone: "warm" as const,
  },
  {
    n: "02",
    title: "Drop a review.",
    text: "Ten seconds, one photo, a brutally honest take. No paragraphs, no algorithm games — just the dish, the vibe, the verdict.",
    tone: "green" as const,
  },
  {
    n: "03",
    title: "Earn your stripes.",
    text: "Build a following, unlock foodie badges, and get early tastings from restaurants that want your take before it drops.",
    tone: "rose" as const,
  },
];

const testimonials = [
  {
    quote: "I found my favourite dumpling spot by tapping three buttons. That never happens.",
    name: "Priya K.",
    handle: "@priyaeats · 2.4k followers",
    avatar: "#E8D4A0",
  },
  {
    quote: "Finally, a review app that doesn't read like a Yelp novel. Short, honest, delicious.",
    name: "Arjun M.",
    handle: "@forktofork · 8.1k followers",
    avatar: "#F5D6CC",
  },
  {
    quote: "I got invited to three tasting menus in my first month. On a student budget. Hello?",
    name: "Sana J.",
    handle: "@sanasnacks · 1.2k followers",
    avatar: "#D9E5C8",
  },
];

const faqs = [
  { q: "Do I need a huge following to join?", a: "Nope. We want hungry humans with good taste, not influencer resumés. If you love food and can write one honest sentence, you're in." },
  { q: "How much does it cost?", a: "Free. Forever. We make money from restaurant partnerships — never from your reviews, never from hidden placements." },
  { q: "What do I get for being a foodie?", a: "Early access to the app, a verified foodie badge, invites to tastings with partner restaurants, and a real creator dashboard once you hit 500 followers." },
  { q: "Can I share my reviews on Instagram / TikTok?", a: "Yes, one tap. We generate a nice card for stories and a vertical clip for reels. Bring your people." },
  { q: "When does it launch?", a: "Summer 2026. Waitlist members get in two weeks early, with their city unlocked first." },
];

export default function FoodiesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        background: "var(--cream)",
        color: "var(--ink)",
        fontFamily: "var(--font-inter), -apple-system, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* HERO */}
      <div className="e-foodies-hero">
        {/* Amber blob background */}
        <div
          style={{
            position: "absolute",
            top: -40,
            left: -80,
            width: 520,
            height: 520,
            background: "var(--primary)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <div className="e-foodies-hero-grid">
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 14px",
                background: "#fff",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 28,
                boxShadow: "0 2px 0 rgba(26,26,26,0.08)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 6, background: "var(--primary)", display: "inline-block" }} />
              For the hungry &amp; opinionated
            </div>

            <h1
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(52px, 7vw, 104px)",
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
                margin: 0,
              }}
            >
              You eat well.
              <br />
              <span
                style={{
                  background: "var(--cream)",
                  padding: "0 12px",
                  borderRadius: 10,
                  display: "inline-block",
                  transform: "rotate(-1.5deg)",
                  margin: "4px 0",
                  color: "var(--ink)",
                }}
              >
                The world
              </span>
              <br />
              should know.
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.8vw, 19px)",
                lineHeight: 1.5,
                color: "rgba(26,26,26,0.7)",
                maxWidth: 500,
                marginTop: 28,
                marginBottom: 36,
              }}
            >
              Eatables turns your meals into a feed worth following. Drop honest
              reviews, rack up followers, and get invited to the good stuff —
              all from your phone, between bites.
            </p>

            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <button
                style={{
                  padding: "16px 24px",
                  background: "var(--ink)",
                  color: "var(--primary)",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                Become an Eatables foodie
              </button>
              <button
                style={{
                  padding: "16px 22px",
                  background: "transparent",
                  color: "var(--ink)",
                  borderRadius: 999,
                  fontSize: 15,
                  fontWeight: 600,
                  border: "1.5px solid var(--ink)",
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                See how it works
              </button>
            </div>
          </div>

          {/* Foodie profile card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="e-foodie-card"
              style={{
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(26,26,26,0.06)",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  background: "var(--primary)",
                  color: "var(--ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  textAlign: "center",
                  lineHeight: 1.1,
                  transform: "rotate(12deg)",
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                }}
              >
                VERIFIED<br />FOODIE
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 64, height: 64, borderRadius: 32,
                    background: "#E8D4A0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, fontWeight: 700, color: "#5A4A2A",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    flexShrink: 0,
                  }}
                >
                  S
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>
                    Sarah
                  </div>
                  <div style={{ fontSize: 13, color: "#8A7F5F" }}>@sarah · Mangalore</div>
                </div>
              </div>

              <div style={{ marginTop: 18, fontSize: 14, lineHeight: 1.5, color: "#5A4A2A" }}>
                &ldquo;Ramen hunter. Vada pav evangelist. I eat so you don&apos;t have to guess.&rdquo;
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 14,
                  marginTop: 22,
                  padding: "18px 0",
                  borderTop: "1px solid rgba(26,26,26,0.08)",
                  borderBottom: "1px solid rgba(26,26,26,0.08)",
                }}
              >
                {[{ num: "412", label: "Reviews" }, { num: "2.4k", label: "Followers" }, { num: "18", label: "Badges" }].map((s) => (
                  <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {s.num}
                    </div>
                    <div style={{ fontSize: 11, color: "#8A7F5F", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                {["🏅 Top reviewer", "🌶 Spice queen", "🍜 Ramen scout"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11, fontWeight: 600,
                      padding: "6px 10px",
                      background: "var(--accent-bg)",
                      borderRadius: 999,
                      color: "var(--ink)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div
        className="e-how-section"
        style={{ background: "var(--ink)", color: "var(--cream)", position: "relative", overflow: "hidden" }}
      >
        <div className="e-how-top">
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
              ● How it works
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                margin: 0,
                maxWidth: 720,
              }}
            >
              From hungry
              <br />
              to{" "}
              <em style={{ color: "var(--primary)", fontStyle: "italic", fontFamily: "Georgia, serif", fontWeight: 400 }}>
                well-followed
              </em>
              <br />
              in three bites.
            </h2>
          </div>
          <div style={{ fontSize: 17, color: "rgba(253,251,243,0.65)", maxWidth: 360, lineHeight: 1.5 }}>
            No content calendar, no ring lights, no &ldquo;hey guys welcome back.&rdquo; Just the food you were going to eat anyway — now with an audience.
          </div>
        </div>

        <div className="e-steps-grid">
          {steps.map((s) => (
            <div
              key={s.n}
              style={{
                background: "rgba(253,251,243,0.04)",
                border: "1.5px solid rgba(253,251,243,0.1)",
                borderRadius: 24,
                padding: 32,
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 88,
                  fontWeight: 700,
                  color: "var(--primary)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 24,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 15, color: "rgba(253,251,243,0.65)", lineHeight: 1.55 }}>{s.text}</div>
              <div style={{ marginTop: 24, height: 120, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(253,251,243,0.08)" }}>
                <FoodPlaceholder label={`step ${s.n}`} tone={s.tone} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="e-test-section" style={{ background: "var(--cream)", position: "relative" }}>
        <div
          style={{
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.6)",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          ● Foodies on Eatables
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            textAlign: "center",
            margin: "0 auto 60px",
            maxWidth: 900,
          }}
        >
          The early crew is
          <br />
          <span
            style={{
              background: "var(--primary)",
              padding: "0 12px",
              borderRadius: 10,
              display: "inline-block",
              transform: "rotate(-1.5deg)",
              margin: "4px 0",
            }}
          >
            already eating good.
          </span>
        </h2>

        <div className="e-testimonials-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 2px 0 rgba(26,26,26,0.06)",
                border: "1.5px solid rgba(26,26,26,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[0, 1, 2, 3, 4].map((n) => <StarIcon key={n} size={16} color="#FFC528" />)}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: 20,
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  marginBottom: 24,
                  color: "var(--ink)",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 22,
                    background: t.avatar,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 700, color: "#5A4A2A",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    flexShrink: 0,
                  }}
                >
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#8A7F5F" }}>{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="e-faq-section" style={{ background: "var(--accent-bg)", position: "relative" }}>
        <div className="e-faq-grid">
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
              ● Questions we get
            </div>
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 4.5vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                margin: 0,
              }}
            >
              The stuff<br />you&apos;re about<br />to ask.
            </h2>
            <div style={{ fontSize: 16, color: "rgba(26,26,26,0.65)", lineHeight: 1.55, marginTop: 20 }}>
              Short answers. If something&apos;s still unclear, email <b>hi@eatables.app</b> — a human will reply, promise.
            </div>
          </div>

          <div>
            {faqs.map((f, i) => (
              <div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  background: openFaq === i ? "#fff" : "transparent",
                  borderRadius: 16,
                  padding: "22px 24px",
                  borderBottom: openFaq === i ? "none" : "1.5px solid rgba(26,26,26,0.12)",
                  boxShadow: openFaq === i ? "0 10px 30px -10px rgba(26,26,26,0.1)" : "none",
                  marginBottom: openFaq === i ? 8 : 0,
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    gap: 16,
                  }}
                >
                  <span>{f.q}</span>
                  <span
                    style={{
                      width: 32, height: 32, borderRadius: 16,
                      background: openFaq === i ? "var(--primary)" : "rgba(26,26,26,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, fontWeight: 500, flexShrink: 0,
                    }}
                  >
                    {openFaq === i ? "–" : "+"}
                  </span>
                </div>
                {openFaq === i && (
                  <div style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,26,0.7)" }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterCTA
        tag="● Last call"
        headline={"Come eat\nwith us."}
        sub="Get in early. First 10,000 foodies unlock the OG badge, a free year of pro features, and a spot on the founding wall."
        btnLabel="Count me in →"
      />
    </div>
  );
}
