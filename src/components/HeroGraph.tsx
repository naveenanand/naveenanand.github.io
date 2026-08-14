"use client";

import { useState } from "react";

/**
 * Spatial node system: the domains Naveen works across, and how they connect.
 * Hovering (or focusing) a node highlights its connections; nodes with
 * satellite technologies fan them out. Pure SVG — no animation library.
 */

type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  satellites?: string[];
};

const NODES: NodeDef[] = [
  { id: "ai", label: "AI", x: 264, y: 92, r: 34, satellites: ["RAG", "Agents", "Multimodal", "Developer Tools"] },
  { id: "xr", label: "XR", x: 92, y: 208, r: 30, satellites: ["Unity", "Quest", "Vision Pro", "Haptics"] },
  { id: "cloud", label: "Cloud", x: 430, y: 196, r: 31, satellites: ["APIs", "Distributed Systems", "Authentication", "CI/CD"] },
  { id: "sensing", label: "Sensing", x: 256, y: 248, r: 30 },
  { id: "sdk", label: "SDK", x: 148, y: 362, r: 28 },
  { id: "embedded", label: "Embedded", x: 366, y: 356, r: 34, satellites: ["DSP", "FPGA", "AOSP", "MEMS", "Ultrasonic"] },
  { id: "hardware", label: "Hardware", x: 258, y: 458, r: 32 },
];

const EDGES: [string, string][] = [
  ["ai", "xr"],
  ["ai", "cloud"],
  ["ai", "sensing"],
  ["xr", "sdk"],
  ["xr", "sensing"],
  ["cloud", "sdk"],
  ["cloud", "embedded"],
  ["sdk", "embedded"],
  ["sensing", "embedded"],
  ["sensing", "hardware"],
  ["embedded", "hardware"],
];

const CENTER = { x: 260, y: 270 };

function node(id: string): NodeDef {
  return NODES.find((n) => n.id === id)!;
}

function neighbors(id: string): Set<string> {
  const s = new Set<string>();
  for (const [a, b] of EDGES) {
    if (a === id) s.add(b);
    if (b === id) s.add(a);
  }
  return s;
}

function satellitePos(n: NodeDef, i: number, count: number) {
  const dx = n.x - CENTER.x;
  const dy = n.y - CENTER.y;
  const base = Math.atan2(dy, dx);
  const spread = count === 1 ? 0 : 1.5;
  const angle = base - spread / 2 + (spread * i) / (count - 1 || 1);
  const dist = n.r + 58;
  return {
    x: n.x + Math.cos(angle) * dist,
    y: n.y + Math.sin(angle) * dist,
    anchor: Math.cos(angle) > 0.35 ? "start" : Math.cos(angle) < -0.35 ? "end" : "middle",
  } as const;
}

export default function HeroGraph({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const activeNeighbors = active ? neighbors(active) : null;

  return (
    <svg
      viewBox="-70 -34 660 580"
      className={className}
      role="img"
      aria-label="Connected engineering domains: AI, XR, Cloud, SDK, Sensing, Embedded, and Hardware. Interactive — focus a domain to see related technologies."
    >
      {/* edges */}
      <g>
        {EDGES.map(([a, b]) => {
          const na = node(a);
          const nb = node(b);
          const lit = active === a || active === b;
          const dim = active !== null && !lit;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={lit ? "var(--color-ink)" : "rgba(0,0,0,0.32)"}
              strokeWidth={lit ? 1.5 : 1.1}
              strokeDasharray={lit ? "none" : "4 6"}
              opacity={dim ? 0.2 : 1}
              style={{ transition: "opacity .25s, stroke .25s" }}
            />
          );
        })}
      </g>

      {/* satellites of the active node */}
      {NODES.filter((n) => n.id === active && n.satellites).map((n) => (
        <g key={`sat-${n.id}`}>
          {n.satellites!.map((s, i) => {
            const p = satellitePos(n, i, n.satellites!.length);
            return (
              <g key={s} style={{ animation: "satIn .25s ease-out both" }}>
                <line
                  x1={n.x}
                  y1={n.y}
                  x2={p.x}
                  y2={p.y}
                  stroke="var(--color-accent-line)"
                  strokeWidth="1"
                />
                <circle cx={p.x} cy={p.y} r="3" fill="var(--color-accent)" />
                <text
                  x={p.x + (p.anchor === "start" ? 8 : p.anchor === "end" ? -8 : 0)}
                  y={p.y + (p.anchor === "middle" ? -10 : 4)}
                  textAnchor={p.anchor}
                  fill="var(--color-accent-bright)"
                  fontSize="12.5"
                  fontFamily="var(--font-mono)"
                >
                  {s}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* nodes */}
      {NODES.map((n) => {
        const isActive = active === n.id;
        const isNeighbor = activeNeighbors?.has(n.id) ?? false;
        const dim = active !== null && !isActive && !isNeighbor;
        return (
          <g
            key={n.id}
            tabIndex={0}
            role="button"
            aria-label={
              n.satellites
                ? `${n.label}. Related: ${n.satellites.join(", ")}`
                : `${n.label}. Connected to ${[...neighbors(n.id)].map((id) => node(id).label).join(", ")}`
            }
            onPointerEnter={() => setActive(n.id)}
            onPointerLeave={() => setActive(null)}
            onFocus={() => setActive(n.id)}
            onBlur={() => setActive(null)}
            style={{ cursor: "pointer", outline: "none", transition: "opacity .25s" }}
            opacity={dim ? 0.35 : 1}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 7}
              fill={isActive ? "var(--color-accent-dim)" : "transparent"}
              style={{ transition: "fill .25s" }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="var(--color-surface)"
              stroke={isActive || isNeighbor ? "var(--color-accent)" : "var(--color-line)"}
              strokeWidth={isActive ? 1.6 : 1.1}
              style={{ transition: "stroke .25s" }}
            />
            <text
              x={n.x}
              y={n.y + 4.5}
              textAnchor="middle"
              fill={isActive ? "var(--color-accent-bright)" : "var(--color-ink)"}
              fontSize="13.5"
              fontFamily="var(--font-mono)"
              letterSpacing="0.06em"
              style={{ transition: "fill .25s", pointerEvents: "none", textTransform: "uppercase" }}
            >
              {n.label}
            </text>
          </g>
        );
      })}

      <style>{`
        @keyframes satIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </svg>
  );
}
