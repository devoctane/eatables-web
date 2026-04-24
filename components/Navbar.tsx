"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "For foodies", href: "/foodies" },
  { label: "For restaurants", href: "/#restaurants" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === pathname || (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href));

  const linkStyle = (href: string) => ({
    color: "var(--ink)",
    fontWeight: isActive(href) ? 700 : 500,
    borderBottom: isActive(href) ? "2px solid var(--primary)" : "none",
    paddingBottom: isActive(href) ? 2 : 0,
    fontSize: 14,
  });

  return (
    <nav className="e-nav" style={{ position: "relative", zIndex: 10 }}>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
        }}
      >
        <Logo size={34} color="var(--primary)" accent="var(--cream)" />
        <span>eatables</span>
      </Link>

      {/* Desktop nav links */}
      <div className="e-nav-links" style={{ fontWeight: 500 }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={linkStyle(l.href)}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <Link
        href="/#waitlist"
        className="e-nav-cta"
        style={{
          padding: "10px 20px",
          background: "var(--ink)",
          color: "var(--primary)",
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        Join waitlist →
      </Link>

      {/* Mobile hamburger */}
      <button
        className="e-hamburger"
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "transparent",
          border: "1.5px solid rgba(26,26,26,0.15)",
          borderRadius: 8,
          cursor: "pointer",
          color: "var(--ink)",
        }}
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      <div className={`e-mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              ...linkStyle(l.href),
              padding: "12px 4px",
              borderBottom: isActive(l.href)
                ? "2px solid var(--primary)"
                : "1px solid rgba(26,26,26,0.07)",
              fontSize: 15,
              display: "block",
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#waitlist"
          onClick={() => setOpen(false)}
          style={{
            marginTop: 8,
            display: "block",
            padding: "14px 20px",
            background: "var(--ink)",
            color: "var(--primary)",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Join waitlist →
        </Link>
      </div>
    </nav>
  );
}
