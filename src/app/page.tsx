import Link from "next/link";
import HeroGraph from "@/components/HeroGraph";
import MetricStrip from "@/components/MetricStrip";
import OperatingRange from "@/components/OperatingRange";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SystemCard from "@/components/SystemCard";
import TechnologyExplorer from "@/components/TechnologyExplorer";
import Timeline from "@/components/Timeline";
import TrackedLink from "@/components/TrackedLink";
import { capabilities } from "@/data/capabilities";
import { exploring } from "@/data/exploring";
import { heroMeta, profile } from "@/data/profile";
import { projects } from "@/data/projects";

const featured = projects.find((p) => p.slug === "emerge-platform")!;
const rest = projects.filter((p) => p.slug !== "emerge-platform");

function CapabilityIcon({ id }: { id: string }) {
  const p = {
    className: "h-9 w-9",
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "var(--color-accent)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (id) {
    case "ai": // node spark
      return (
        <svg {...p}>
          <circle cx="18" cy="18" r="5" />
          <path d="M18 4v6M18 26v6M4 18h6M26 18h6M8 8l4.5 4.5M23.5 23.5 28 28M28 8l-4.5 4.5M12.5 23.5 8 28" strokeWidth="1.3" stroke="var(--color-muted)" />
        </svg>
      );
    case "spatial": // headset
      return (
        <svg {...p}>
          <path d="M5 13a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5.5l-3-3.5a2 2 0 0 0-3 0l-3 3.5H8a3 3 0 0 1-3-3v-8z" />
        </svg>
      );
    case "platforms": // stacked SDK blocks
      return (
        <svg {...p}>
          <path d="M18 4 31 11 18 18 5 11z" />
          <path d="M5 18l13 7 13-7M5 25l13 7 13-7" stroke="var(--color-muted)" strokeWidth="1.3" />
        </svg>
      );
    case "systems": // chip
      return (
        <svg {...p}>
          <rect x="10" y="10" width="16" height="16" rx="3" />
          <path d="M14 10V5M22 10V5M14 31v-5M22 31v-5M10 14H5M10 22H5M31 14h-5M31 22h-5" stroke="var(--color-muted)" strokeWidth="1.3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="wrap relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow mb-5">
              Engineering Leader · Architect · Builder
            </p>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight md:text-[3.6rem]">
              Naveen Anand Gunalan
            </h1>
            <p className="mt-6 max-w-xl text-[1.35rem] font-medium leading-snug text-ink">
              I build systems where AI, software, hardware, and human
              interaction meet.
            </p>
            <p className="mt-5 max-w-xl text-muted">
              17+ years of AI platforms, developer SDKs, spatial computing, and
              real-time embedded products — leading the organization and
              staying close to the code.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a href="#systems" className="btn btn-solid">
                Explore my work
              </a>
              <Link href="/about/" className="btn btn-ghost">
                About me
              </Link>
              <TrackedLink
                event="resume_click"
                eventProps={{ from: "hero" }}
                href={profile.resumePath}
                className="link-quiet text-[0.85rem] underline decoration-line underline-offset-4"
              >
                Download Resume
              </TrackedLink>
            </div>
            <p className="mt-10 font-mono text-[0.72rem] tracking-wide text-faint">
              {heroMeta.map((m, i) => (
                <span key={m}>
                  {m}
                  {i < heroMeta.length - 1 && (
                    <span className="mx-2.5 text-line">/</span>
                  )}
                </span>
              ))}
            </p>
          </div>
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <img
              src="/naveen.jpg"
              alt="Naveen Anand Gunalan"
              width={640}
              height={960}
              className="aspect-[3/4] w-full rounded-2xl border border-line-soft object-cover grayscale contrast-105"
              style={{ boxShadow: "0 24px 60px -28px rgba(0,0,0,0.35)" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- CREDIBILITY ---------- */}
      <MetricStrip />

      {/* ---------- WHAT I BUILD ---------- */}
      <Section
        id="build"
        eyebrow="What I Build"
        title="Four disciplines, one practice."
        lead="The interesting work is where they overlap — hover the map."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <HeroGraph className="mx-auto h-auto w-full max-w-md" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((c) => (
              <Reveal as="article" key={c.id}>
                <div className="panel panel-hover h-full p-6">
                  <CapabilityIcon id={c.id} />
                  <h3 className="mt-4 text-[1.08rem] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[0.86rem] text-muted">{c.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- SELECTED SYSTEMS ---------- */}
      <Section
        id="systems"
        tone="deep"
        eyebrow="Selected Systems"
        title="Systems, platforms, and products — not projects."
        lead={
          <>
            A few things I&apos;ve built end to end.{" "}
            <Link href="/work/" className="link-accent">
              See all systems →
            </Link>
          </>
        }
      >
        <div className="grid gap-4">
          <SystemCard project={featured} featured />
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((p) => (
              <SystemCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- AI TEASER ---------- */}
      <Section
        id="ai"
        eyebrow="AI"
        title="AI should change how software is built, not just what software can do."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-muted">
              AI in the product — retrieval, agents, multimodal models. And AI
              in the process — agents that plan, implement, and test in
              verifiable vertical slices.
            </p>
            <Link href="/ai/" className="link-accent mt-6 inline-block text-[0.9rem] font-medium">
              How I build with AI →
            </Link>
          </Reveal>
          <Reveal>
            <div className="panel p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
                The loop
              </p>
              <p className="mt-3 font-mono text-[0.82rem] leading-8 text-body">
                <span className="text-ink">Plan</span>
                <span className="text-faint"> → </span>
                <span className="text-ink">vertical slice</span>
                <span className="text-faint"> → </span>
                <span className="text-ink">implement</span>
                <span className="text-faint"> → </span>
                <span className="text-ink">test</span>
                <span className="text-faint"> → </span>
                <span className="text-ink">human validation</span>
                <span className="text-faint"> → </span>
                <span className="text-accent">next slice</span>
              </p>
              <p className="mt-3 text-[0.85rem] text-muted">
                Claude Code, Cursor, Copilot, MCP — the tools matter less than
                the methodology.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- SPATIAL TEASER ---------- */}
      <Section
        id="spatial"
        tone="deep"
        eyebrow="Spatial Computing"
        title="Computing becomes more interesting when the screen disappears."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-muted">
              From AR helmets to mid-air haptics — a decade of interfaces where
              the physical world is the screen.
            </p>
            <Link
              href="/spatial/"
              className="link-accent mt-6 inline-block text-[0.9rem] font-medium"
            >
              The spatial computing work →
            </Link>
          </Reveal>
          <Reveal>
            <ul className="grid grid-cols-2 gap-3">
              {[
                ["Meta Quest", "Emerge Home"],
                ["Mid-air haptics", "Wave-1 hardware"],
                ["AR platforms", "DAQRI SDK"],
                ["VR installations", "Oculus DK2 era"],
              ].map(([a, b]) => (
                <li key={a} className="panel px-4 py-3.5">
                  <p className="text-[0.9rem] font-medium text-ink">{a}</p>
                  <p className="mt-0.5 text-[0.78rem] text-faint">{b}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---------- LEADERSHIP / RANGE ---------- */}
      <Section
        id="range"
        eyebrow="Leadership"
        title="From company priorities to C code — one continuous range."
        lead={
          <>
            The most useful architecture decisions come from operating across
            every level.{" "}
            <Link href="/leadership/" className="link-accent">
              How I lead →
            </Link>
          </>
        }
      >
        <OperatingRange />
      </Section>

      {/* ---------- TECHNOLOGY EXPLORER ---------- */}
      <Section
        id="technology"
        tone="deep"
        eyebrow="Technology"
        title="Technologies, connected to the systems they built."
      >
        <Reveal>
          <TechnologyExplorer />
        </Reveal>
      </Section>

      {/* ---------- CURRENTLY EXPLORING ---------- */}
      <Section
        id="exploring"
        eyebrow="Currently Exploring"
        title="What I'm thinking about right now."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {exploring.map((e) => (
            <Reveal as="article" key={e.title}>
              <div className="panel panel-hover h-full p-6">
                <h3 className="text-[1.05rem] font-semibold text-ink">{e.title}</h3>
                <p className="mt-2.5 text-[0.9rem] text-muted">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- CAREER SNAPSHOT ---------- */}
      <Section
        id="career"
        tone="deep"
        eyebrow="Career"
        title="Seventeen years, five chapters."
        lead={
          <>
            The short version.{" "}
            <Link href="/resume/" className="link-accent">
              Full resume →
            </Link>
          </>
        }
      >
        <Timeline compact />
      </Section>

      {/* ---------- PATENTS ---------- */}
      <Section id="patents" eyebrow="Invention" title="Inventing new interfaces.">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <p className="max-w-xl text-muted">
              Named inventor on 7+ granted patents spanning XR, haptics,
              sensing, and human-computer interaction.
            </p>
          </Reveal>
          <Reveal>
            <svg
              viewBox="0 0 300 120"
              className="h-auto w-full max-w-sm"
              role="img"
              aria-label="Conceptual illustration: ultrasonic waves converging to a focal point"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <circle
                  key={i}
                  cx={30 + i * 40}
                  cy="106"
                  r="4"
                  fill="var(--color-surface)"
                  stroke="var(--color-line)"
                  strokeWidth="1.2"
                />
              ))}
              {[0, 2, 4, 6].map((i) => (
                <path
                  key={`w${i}`}
                  d={`M ${30 + i * 40} 100 Q ${(30 + i * 40 + 150) / 2} ${60 - Math.abs(3 - i) * 6} 150 28`}
                  fill="none"
                  stroke="var(--color-accent-line)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
              ))}
              <circle cx="150" cy="28" r="5" fill="var(--color-accent)" />
              <circle cx="150" cy="28" r="11" fill="none" stroke="var(--color-accent-line)" strokeWidth="1" />
            </svg>
          </Reveal>
        </div>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="border-t border-line-soft bg-deep py-20 md:py-28">
        <div className="wrap max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="text-3xl font-semibold md:text-[2.6rem]">
              Let&apos;s talk.
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              I enjoy conversations about AI platforms, developer systems,
              spatial computing, engineering architecture, and difficult
              multidisciplinary problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <TrackedLink
                event="linkedin_click"
                eventProps={{ from: "contact" }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                LinkedIn
              </TrackedLink>
              <TrackedLink
                event="contact_click"
                eventProps={{ from: "contact" }}
                href={`mailto:${profile.email}`}
                className="btn btn-ghost"
              >
                Email
              </TrackedLink>
              <TrackedLink
                event="resume_click"
                eventProps={{ from: "contact" }}
                href={profile.resumePath}
                className="btn btn-ghost"
              >
                Resume
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
