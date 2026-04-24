interface StarIconProps {
  size?: number;
  color?: string;
}

export default function StarIcon({ size = 14, color = "#FFC528" }: StarIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M8 1 L10 6 L15.5 6.4 L11.2 10 L12.6 15.3 L8 12.4 L3.4 15.3 L4.8 10 L0.5 6.4 L6 6 Z" />
    </svg>
  );
}
