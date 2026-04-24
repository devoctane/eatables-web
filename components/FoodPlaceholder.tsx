import { CSSProperties } from "react";

type Tone = "warm" | "green" | "rose" | "cream" | "char";

interface FoodPlaceholderProps {
  label?: string;
  tone?: Tone;
  style?: CSSProperties;
}

const tones: Record<Tone, { bg: string; stripe: string; text: string }> = {
  warm:  { bg: "#F5E6C8", stripe: "#E8D4A0", text: "#8A6D3B" },
  green: { bg: "#D9E5C8", stripe: "#B9CDA0", text: "#566B3A" },
  rose:  { bg: "#F5D6CC", stripe: "#E8B9A8", text: "#8A4A3A" },
  cream: { bg: "#F2EADD", stripe: "#E0D2BB", text: "#7A6444" },
  char:  { bg: "#2A2A2A", stripe: "#3A3A3A", text: "#8A8A8A" },
};

export default function FoodPlaceholder({ label = "dish", tone = "warm", style }: FoodPlaceholderProps) {
  const t = tones[tone];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `repeating-linear-gradient(135deg, ${t.bg} 0 10px, ${t.stripe} 10px 20px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 10,
        color: t.text,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <span style={{ background: t.bg, padding: "3px 8px", borderRadius: 4 }}>{label}</span>
    </div>
  );
}
