"use client";

import { useState } from "react";
import { techCategories } from "@/data/technologies";

/**
 * Interactive technology explorer. No proficiency bars — selecting a
 * technology shows the actual systems it was used in.
 */
export default function TechnologyExplorer() {
  const [catId, setCatId] = useState(techCategories[0].id);
  const [selected, setSelected] = useState<string | null>(null);

  const category = techCategories.find((c) => c.id === catId)!;
  const tech = selected
    ? category.items.find((t) => t.name === selected)
    : undefined;

  return (
    <div className="panel overflow-hidden">
      {/* category tabs */}
      <div
        className="flex gap-1 overflow-x-auto border-b border-line-soft p-2"
        role="tablist"
        aria-label="Technology categories"
      >
        {techCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === catId}
            onClick={() => {
              setCatId(c.id);
              setSelected(null);
            }}
            className={`shrink-0 rounded-lg px-3.5 py-2 font-mono text-[0.74rem] uppercase tracking-wider transition-colors ${
              c.id === catId
                ? "bg-accent-dim text-accent-bright"
                : "text-muted hover:text-ink"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* technologies */}
      <div className="p-5 md:p-6">
        <ul className="flex flex-wrap gap-2">
          {category.items.map((t) => {
            const active = selected === t.name;
            return (
              <li key={t.name}>
                <button
                  onClick={() => setSelected(active ? null : t.name)}
                  aria-pressed={active}
                  className={`rounded-lg border px-3 py-1.5 text-[0.85rem] transition-colors ${
                    active
                      ? "border-accent bg-accent-dim text-accent-bright"
                      : "border-line-soft text-body hover:border-line hover:text-ink"
                  }`}
                >
                  {t.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* relationship panel */}
        <div className="mt-5 min-h-[3.5rem] rounded-xl border border-line-soft bg-base/60 px-5 py-4">
          {tech ? (
            tech.usedIn ? (
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
                <span className="font-mono text-[0.78rem] text-accent">{tech.name}</span>
                <span className="text-[0.82rem] text-faint">used in</span>
                {tech.usedIn.map((s, i) => (
                  <span key={s} className="text-[0.88rem] text-ink">
                    {s}
                    {i < tech.usedIn!.length - 1 && (
                      <span className="text-faint"> · </span>
                    )}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[0.85rem] text-muted">
                <span className="font-mono text-accent">{tech.name}</span>{" "}
                — part of the working toolkit.
              </p>
            )
          ) : (
            <p className="text-[0.85rem] text-faint">
              Select a technology to see the systems it was used in — relationships, not proficiency bars.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
