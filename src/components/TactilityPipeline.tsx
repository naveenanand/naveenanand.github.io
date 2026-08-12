"use client";

import { useState } from "react";

/**
 * Conceptual pipeline for the Tactility Generation Model:
 * object information in → multimodal reasoning → tactile map out.
 * Hover/tap the tactile zones on the object to see what the model generates.
 * This illustrates the pipeline; it is not the production model running here.
 */

const INPUTS = ["Text", "Screenshots / images", "3D geometry", "Material metadata", "User intent"];
const PROCESSING = [
  "Multimodal reasoning",
  "Computer vision",
  "3D geometry analysis",
  "Spatial understanding",
  "Interaction reasoning",
];

type Zone = {
  id: string;
  label: string;
  desc: string;
  cx: number;
  cy: number;
};

const ZONES: Zone[] = [
  { id: "point", label: "Tactile point", desc: "A focused pressure point — a button press, a poke, a contact.", cx: 150, cy: 74 },
  { id: "edge", label: "Edge sensation", desc: "A crisp line the hand can trace along the object's silhouette.", cx: 78, cy: 128 },
  { id: "texture", label: "Texture feedback", desc: "A distributed surface pattern — roughness, grain, ripple.", cx: 150, cy: 152 },
  { id: "dynamic", label: "Dynamic effect", desc: "Motion and force over time — a pulse, a drag, a spring.", cx: 220, cy: 118 },
];

export default function TactilityPipeline() {
  const [zone, setZone] = useState<Zone | null>(null);

  return (
    <figure className="panel overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[1fr_auto_1fr_auto_1.2fr]">
        {/* Inputs */}
        <div className="border-b border-line-soft p-6 md:border-b-0 md:border-r">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">Inputs</p>
          <ul className="mt-4 space-y-2">
            {INPUTS.map((i) => (
              <li key={i} className="rounded-lg border border-line-soft bg-base/50 px-3.5 py-2 text-[0.85rem] text-body">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <Arrow />

        {/* Processing */}
        <div className="border-b border-line-soft p-6 md:border-b-0 md:border-r">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">Processing</p>
          <ul className="mt-4 space-y-2">
            {PROCESSING.map((p) => (
              <li key={p} className="rounded-lg border border-accent-line/40 bg-accent-dim px-3.5 py-2 text-[0.85rem] text-ink" style={{ borderColor: "var(--color-accent-line)" }}>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Arrow />

        {/* Output: interactive tactile map */}
        <div className="p-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">
            Output — tactile map <span className="normal-case text-accent">(hover the zones)</span>
          </p>
          <svg viewBox="0 0 300 210" className="mt-3 h-auto w-full" role="img" aria-label="Generated tactile map on a 3D object with four interactive zones">
            {/* the object — a simple rounded slab in light perspective */}
            <g>
              <path d="M60 60 L200 44 L246 84 L246 158 L106 176 L60 136 Z" fill="rgba(148,166,190,0.06)" stroke="var(--color-line)" strokeWidth="1.2" />
              <path d="M60 60 L200 44 L246 84 L106 100 Z" fill="rgba(148,166,190,0.09)" stroke="var(--color-line)" strokeWidth="1.2" />
              <path d="M106 100 L246 84 L246 158 L106 176 Z" fill="rgba(148,166,190,0.04)" stroke="var(--color-line)" strokeWidth="1.2" />
            </g>
            {/* zones */}
            {ZONES.map((z) => {
              const active = zone?.id === z.id;
              return (
                <g
                  key={z.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`${z.label}: ${z.desc}`}
                  onPointerEnter={() => setZone(z)}
                  onPointerLeave={() => setZone(null)}
                  onFocus={() => setZone(z)}
                  onBlur={() => setZone(null)}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  <circle cx={z.cx} cy={z.cy} r="16" fill={active ? "var(--color-accent-dim)" : "transparent"} style={{ transition: "fill .2s" }} />
                  <circle cx={z.cx} cy={z.cy} r={active ? 7 : 5} fill="var(--color-accent)" opacity={active ? 1 : 0.7} style={{ transition: "all .2s" }} />
                  <circle cx={z.cx} cy={z.cy} r="11" fill="none" stroke="var(--color-accent-line)" strokeWidth="1" opacity={active ? 1 : 0.5} />
                </g>
              );
            })}
          </svg>
          <div className="mt-2 min-h-[4.2rem] rounded-lg border border-line-soft bg-base/50 px-4 py-3">
            {zone ? (
              <>
                <p className="text-[0.85rem] font-medium text-accent-bright">{zone.label}</p>
                <p className="mt-0.5 text-[0.8rem] text-muted">{zone.desc}</p>
              </>
            ) : (
              <p className="text-[0.8rem] text-faint">
                Tactile points · edge sensations · texture feedback · dynamic haptic effects
              </p>
            )}
          </div>
        </div>
      </div>
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line-soft px-5 py-3 text-[0.78rem] text-faint">
        <span className="rounded border border-accent-line px-1.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-accent">
          Ongoing R&amp;D
        </span>
        Conceptual visualization of the pipeline — not the production model running in the browser.
      </figcaption>
    </figure>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center md:flex" aria-hidden="true">
      <svg width="30" height="16" viewBox="0 0 30 16">
        <path d="M2 8h22m-5-5.5L25.5 8 19 13.5" fill="none" stroke="var(--color-accent-line)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
