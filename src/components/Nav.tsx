"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { track } from "@/lib/analytics";

const links = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
  { href: "/ai/", label: "AI" },
  { href: "/spatial/", label: "Spatial Computing" },
  { href: "/leadership/", label: "Leadership" },
  { href: "/about/", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors ${
        scrolled || open
          ? "border-b border-line-soft bg-base/85"
          : "border-b border-transparent bg-base/50"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-medium text-ink"
          aria-label={`${profile.name} — home`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="5" cy="19" r="2.4" fill="var(--color-accent)" />
            <circle cx="12" cy="6" r="2.4" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />
            <circle cx="19" cy="19" r="2.4" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />
            <path d="M6.2 17 10.8 8M13.2 8l4.6 9M7.4 19h9.2" stroke="var(--color-muted)" strokeWidth="1.2" />
          </svg>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.88rem] transition-colors ${
                isActive(pathname, l.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={profile.resumePath}
            className="btn btn-ghost !px-3 !py-1.5 text-[0.84rem]"
            onClick={() => track("resume_click", { from: "nav" })}
          >
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet text-[0.88rem]"
            onClick={() => track("linkedin_click", { from: "nav" })}
          >
            LinkedIn
          </a>
          <a
            href="/#contact"
            className="btn btn-solid !px-3.5 !py-1.5 text-[0.84rem]"
            onClick={() => track("contact_click", { from: "nav" })}
          >
            Contact
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line-soft bg-base/95 lg:hidden">
          <nav className="wrap flex flex-col py-3" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`border-b border-line-soft py-3.5 text-[0.95rem] last:border-0 ${
                  isActive(pathname, l.href) ? "text-ink" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-2.5 py-4">
              <a
                href={profile.resumePath}
                className="btn btn-ghost text-[0.85rem]"
                onClick={() => track("resume_click", { from: "nav-mobile" })}
              >
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-[0.85rem]"
                onClick={() => track("linkedin_click", { from: "nav-mobile" })}
              >
                LinkedIn
              </a>
              <a
                href="/#contact"
                className="btn btn-solid text-[0.85rem]"
                onClick={() => track("contact_click", { from: "nav-mobile" })}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
