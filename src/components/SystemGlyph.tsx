/** Small visual glyph per system — gives cards a visual identity beyond text. */
export default function SystemGlyph({
  slug,
  className = "h-11 w-11",
}: {
  slug: string;
  className?: string;
}) {
  const line = "var(--color-line)";
  const muted = "var(--color-muted)";
  const accent = "var(--color-accent)";
  const common = { className, viewBox: "0 0 48 48", "aria-hidden": true as const };

  switch (slug) {
    case "emerge-platform": // stacked platform layers
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="8" rx="2.5" fill="none" stroke={accent} strokeWidth="1.6" />
          <rect x="8" y="20" width="32" height="8" rx="2.5" fill="none" stroke={muted} strokeWidth="1.4" />
          <rect x="8" y="32" width="32" height="8" rx="2.5" fill="none" stroke={line} strokeWidth="1.4" />
        </svg>
      );
    case "beamforming": // arcs converging to a focal point
      return (
        <svg {...common}>
          <path d="M8 40 Q24 26 40 40" fill="none" stroke={line} strokeWidth="1.4" />
          <path d="M11 34 Q24 21 37 34" fill="none" stroke={muted} strokeWidth="1.4" />
          <path d="M14 28 Q24 17 34 28" fill="none" stroke={muted} strokeWidth="1.4" />
          <circle cx="24" cy="13" r="4" fill={accent} />
        </svg>
      );
    case "engineering-intelligence": // sources flowing into one node
      return (
        <svg {...common}>
          <rect x="7" y="7" width="9" height="9" rx="2" fill="none" stroke={muted} strokeWidth="1.4" />
          <rect x="7" y="20" width="9" height="9" rx="2" fill="none" stroke={muted} strokeWidth="1.4" />
          <rect x="7" y="33" width="9" height="9" rx="2" fill="none" stroke={line} strokeWidth="1.4" />
          <path d="M17 11.5 30 22M17 24.5 30 24.5M17 37.5 30 27" stroke={line} strokeWidth="1.3" />
          <circle cx="36" cy="24.5" r="6" fill="none" stroke={accent} strokeWidth="1.7" />
        </svg>
      );
    case "tactility-generation": // touch point with ripples
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="4" fill={accent} />
          <circle cx="24" cy="24" r="10" fill="none" stroke={muted} strokeWidth="1.4" />
          <circle cx="24" cy="24" r="17" fill="none" stroke={line} strokeWidth="1.3" strokeDasharray="3 5" />
        </svg>
      );
    case "daqri-sdk": // managed ↔ native bridge
      return (
        <svg {...common}>
          <rect x="6" y="14" width="13" height="20" rx="2.5" fill="none" stroke={muted} strokeWidth="1.5" />
          <rect x="29" y="14" width="13" height="20" rx="2.5" fill="none" stroke={muted} strokeWidth="1.5" />
          <path d="M19 24h10" stroke={accent} strokeWidth="1.7" />
          <circle cx="24" cy="24" r="2.6" fill={accent} />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" fill="none" stroke={muted} strokeWidth="1.5" />
        </svg>
      );
  }
}
