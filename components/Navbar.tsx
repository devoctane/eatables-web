"use client";

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

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 56px",
        position: "relative",
        zIndex: 5,
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: "var(--ink)" }}>
        <Logo size={34} color="var(--primary)" accent="var(--cream)" />
        <span>eatables</span>
      </Link>

      <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500 }}>
        {links.map((l) => {
          const active = l.href === pathname || (l.href !== "/" && pathname.startsWith(l.href));
          return (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "var(--ink)",
                fontWeight: active ? 700 : 500,
                borderBottom: active ? "2px solid var(--primary)" : "none",
                paddingBottom: active ? 2 : 0,
              }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/#waitlist"
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
    </nav>
  );
}
