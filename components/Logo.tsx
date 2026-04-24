interface LogoProps {
  size?: number;
  color?: string;
  accent?: string;
}

export default function Logo({ size = 56, color = "#FFC528", accent = "#FDFBF3" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 1.05}
      viewBox="0 0 100 105"
      fill="none"
      style={{ display: "block" }}
    >
      {/* Pin body */}
      <path
        d="M50 5 C73 5 92 22 92 45 C92 70 60 92 50 102 C40 92 8 70 8 45 C8 22 27 5 50 5 Z"
        fill={color}
      />
      {/* Scalloped plate */}
      <g transform="translate(50 43)">
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r = 26;
          return (
            <circle
              key={i}
              cx={Math.cos(a) * r}
              cy={Math.sin(a) * r}
              r="6.2"
              fill={accent}
            />
          );
        })}
        <circle r="24" fill={accent} />
      </g>
      {/* Fork */}
      <g fill={color}>
        <rect x="42" y="32" width="3" height="10" rx="1" />
        <rect x="47" y="32" width="3" height="10" rx="1" />
        <rect x="52" y="32" width="3" height="10" rx="1" />
        <rect x="42" y="40" width="13" height="4" rx="1.5" />
        <rect x="46.5" y="42" width="4" height="20" rx="1.5" />
      </g>
      {/* Knife */}
      <path d="M62 32 Q68 40 66 52 L62 62 L59 62 L59 32 Z" fill={color} />
    </svg>
  );
}
