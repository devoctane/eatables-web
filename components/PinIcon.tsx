interface PinIconProps {
  size?: number;
  color?: string;
}

export default function PinIcon({ size = 16, color = "currentColor" }: PinIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1 C11 1 13.5 3.3 13.5 6.3 C13.5 9.5 9 14 8 15 C7 14 2.5 9.5 2.5 6.3 C2.5 3.3 5 1 8 1 Z"
        fill={color}
      />
      <circle cx="8" cy="6.2" r="2" fill="#fff" />
    </svg>
  );
}
