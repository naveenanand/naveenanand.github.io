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

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(56rem 30rem at 78% -8%, rgba(85,169,255,0.09), transparent 60%)",
          }}
        />
        <div className="wrap relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <div>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight md:text-[3.4rem] md:leading-[1.05]">
              I build systems where AI, software, hardware, and human
              interaction <span className="text-accent">meet</span>.
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] text-body">
              I&apos;m Naveen Anand Gunalan, a hands-on engineering leader and
              software architect with 17+ years building AI platforms,
              developer SDKs, spatial-computing systems, cloud services, and
              real-time embedded products.
            </p>
            <p className="mt-4 max-w-xl text-muted">
              I lead engineering organizations, shape product and technical
              roadmaps, architect platforms, and still like getting close to
              the code when the problem is hard.
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
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroGraph className="h-auto w-full" />
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
        lead="Most of my work sits where these overlap — an SDK above custom hardware, AI reasoning about physical interaction, a cloud service behind a real-time device."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((c) => (
            <Reveal as="article" key={c.id}>
              <div className="panel panel-hover h-full p-7 md:p-8">
                <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] text-muted">{c.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
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
              I build AI as a product capability — retrieval systems, agents,
              and multimodal models like the Tactility Generation Model. But I
              also treat AI agents as participants in the software-development
              process itself: planning, implementing, testing, and documenting
              in vertical slices that stay continuously verifiable.
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
              From AR helmets to mid-air haptics: a decade of building
              interactive systems where the interface is the physical world —
              XR applications, spatial input, tactile feedback, and the custom
              hardware and SDKs underneath them.
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
            Leadership and implementation aren&apos;t opposites. The most useful
            architecture decisions come from operating across every level of
            the stack.{" "}
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
              sensing, and human-computer interaction — the kind of work that
              only exists when hardware, software, and human perception are
              designed together.
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
