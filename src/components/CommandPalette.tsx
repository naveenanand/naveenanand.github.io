"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { track } from "@/lib/analytics";

type Command = {
  id: string;
  label: string;
  hint?: string;
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const commands: Command[] = [
    { id: "ai", label: "View AI Work", hint: "/ai", run: () => router.push("/ai/") },
    { id: "spatial", label: "View Spatial Work", hint: "/spatial", run: () => router.push("/spatial/") },
    { id: "arch", label: "View Architecture", hint: "/work/emerge-platform", run: () => router.push("/work/emerge-platform/") },
    { id: "work", label: "Browse Selected Systems", hint: "/work", run: () => router.push("/work/") },
    { id: "leadership", label: "View Leadership", hint: "/leadership", run: () => router.push("/leadership/") },
    { id: "about", label: "About Naveen", hint: "/about", run: () => router.push("/about/") },
    {
      id: "resume",
      label: "View Resume",
      hint: "/resume",
      run: () => {
        track("resume_click", { from: "palette" });
        router.push("/resume/");
      },
    },
    {
      id: "contact",
      label: "Contact Naveen",
      hint: profile.email,
      run: () => {
        track("contact_click", { from: "palette" });
        window.location.href = `mailto:${profile.email}`;
      },
    },
  ];

  const q = query.trim().toLowerCase();
  const isWhoami = q === "whoami";
  const filtered = isWhoami
    ? []
    : commands.filter((c) => c.label.toLowerCase().includes(q));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line-soft px-4">
          <span className="font-mono text-xs text-accent" aria-hidden="true">
            ❯
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIndex((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIndex((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && filtered[index]) {
                filtered[index].run();
                close();
              }
            }}
            placeholder="Type a command… (try whoami)"
            className="h-12 w-full bg-transparent text-[0.95rem] text-ink placeholder:text-faint focus:outline-none"
            aria-label="Command input"
          />
          <kbd className="rounded border border-line-soft px-1.5 py-0.5 font-mono text-[0.65rem] text-faint">
            esc
          </kbd>
        </div>

        {isWhoami ? (
          <div className="px-5 py-6 font-mono text-sm leading-7">
            <p className="text-faint">$ whoami</p>
            <p className="text-ink">{profile.name}</p>
            <p className="text-muted">Engineering Leader · Architect · Builder</p>
          </div>
        ) : (
          <ul className="max-h-72 overflow-y-auto py-2" role="listbox">
            {filtered.length === 0 && (
              <li className="px-5 py-4 text-sm text-faint">No matching command.</li>
            )}
            {filtered.map((c, i) => (
              <li key={c.id} role="option" aria-selected={i === index}>
                <button
                  className={`flex w-full items-center justify-between px-5 py-2.5 text-left text-[0.92rem] ${
                    i === index ? "bg-accent-dim text-ink" : "text-body"
                  }`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => {
                    c.run();
                    close();
                  }}
                >
                  <span>{c.label}</span>
                  {c.hint && (
                    <span className="font-mono text-[0.68rem] text-faint">{c.hint}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
