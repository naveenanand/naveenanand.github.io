import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { productionLoop } from "@/data/philosophy";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Engineering leadership across strategy, roadmaps, architecture, organization, and execution — from business need to production system.",
  alternates: { canonical: "/leadership/" },
};

const sections = [
  {
    title: "Strategy → Roadmap",
    body: [
      "I work with founders, product, design, customers, and partners to understand business goals, customer needs, technical constraints, team capacity, and timelines.",
      "That understanding becomes a product roadmap, a technical roadmap, architecture priorities, staffing plans, and milestones the whole company can see.",
    ],
  },
  {
    title: "Roadmap → Architecture",
    body: ["The questions I keep coming back to:"],
    bullets: [
      "What belongs in the platform, and what should remain application-specific?",
      "Where should we invest — and what technical debt actually matters?",
      "What should be built versus integrated?",
      "What architecture supports the products we haven't committed to yet?",
    ],
  },
  {
    title: "Architecture → Organization",
    body: [
      "Teams form around technical domains with clear ownership. At Emerge that meant XR/application, SDK/platform, embedded, DSP, hardware, cloud, and AI — a 23-person global organization where each domain had an owner and the interfaces between domains were explicit.",
    ],
  },
  {
    title: "Organization → Execution",
    body: ["Operating principles that survive contact with reality:"],
    bullets: [
      "Clear ownership",
      "Vertical delivery",
      "Measurable milestones",
      "Technical reviews",
      "Observability",
      "Continuous integration",
      "Customer feedback",
      "Iterative execution",
    ],
  },
  {
    title: "Developing Engineers",
    body: [
      "Hiring, mentoring, and career development are part of the architecture. I've built teams from scratch, developed engineers into leads, and worked on the engineering culture deliberately — including developing managers, not just ICs.",
    ],
  },
  {
    title: "Executive Partnership",
    body: [
      "The other half of the job: technical strategy with the executive team, investor demonstrations, strategic partnerships, technical due diligence, and the cross-functional decisions where engineering meets the rest of the company. The demos and due-diligence work I led supported $40M+ in funding.",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <>
      <div className="wrap max-w-4xl py-16 md:py-24">
        <p className="eyebrow mb-4">Leadership</p>
        <h1 className="text-4xl font-semibold md:text-[3.2rem] md:leading-[1.08]">
          Engineering leadership starts with deciding what should be built and
          why.
        </h1>
        <p className="mt-7 max-w-2xl text-muted">
          I&apos;ve led multidisciplinary engineering teams across software, XR,
          cloud, embedded systems, DSP, and hardware. My role has often sat at
          the intersection of company strategy, product decisions, architecture,
          and execution.
        </p>
      </div>

      <Section tone="deep" eyebrow="The practice" title="Strategy to execution, without the gaps.">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((s) => (
            <Reveal as="article" key={s.title}>
              <div className="panel panel-hover h-full p-7">
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                {s.body.map((p) => (
                  <p key={p.slice(0, 30)} className="mt-3 text-[0.92rem] text-muted">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="relative pl-5 text-[0.9rem] text-muted">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.62em] h-px w-2.5 bg-accent/70"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Systems thinking"
        title="From business need to production system."
        lead="Responsibility doesn't begin at coding, and it doesn't stop when software ships. Customer feedback flows back into the roadmap — the loop is the point."
      >
        <Reveal>
          <div className="panel mx-auto max-w-3xl p-7 md:p-9">
            <ol className="flex flex-wrap items-center gap-y-3">
              {productionLoop.map((step, i) => (
                <li key={step} className="flex items-center">
                  <span
                    className={`rounded-lg border px-3 py-1.5 text-[0.84rem] ${
                      i === 0
                        ? "border-accent-line bg-accent-dim text-accent-bright"
                        : "border-line-soft text-body"
                    }`}
                  >
                    {step}
                  </span>
                  {i < productionLoop.length - 1 && (
                    <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true" className="mx-1 shrink-0">
                      <path d="M1 5h16m-4-3.5L17.5 5 13 8.5" fill="none" stroke="var(--color-accent-line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </li>
              ))}
              <li className="flex items-center">
                <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true" className="mx-1 shrink-0">
                  <path d="M1 5h16m-4-3.5L17.5 5 13 8.5" fill="none" stroke="var(--color-accent-line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="rounded-lg border border-accent-line bg-accent-dim px-3 py-1.5 text-[0.84rem] text-accent-bright">
                  Roadmap ↺
                </span>
              </li>
            </ol>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
