import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { education } from "@/data/experience";
import { principles } from "@/data/philosophy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Builder first: the career story of Naveen Anand Gunalan — from interactive systems and games to spatial computing platforms, haptics, engineering leadership, and AI-native platforms.",
  alternates: { canonical: "/about/" },
};

const arc = [
  "Web / interactive systems",
  "Games / AR / VR",
  "Developer SDKs",
  "Spatial-computing platforms",
  "Embedded hardware + haptics",
  "Engineering leadership",
  "AI-native platforms",
];

export default function AboutPage() {
  return (
    <>
      <div className="wrap max-w-4xl py-16 md:py-24">
        <p className="eyebrow mb-4">About</p>
        <h1 className="text-4xl font-semibold md:text-[3.2rem] md:leading-[1.08]">
          Builder first.
        </h1>
        <p className="mt-7 max-w-2xl text-muted">
          I started as a software engineer, and building is still the thing
          that gets me up in the morning. The scope changed over seventeen
          years — the desire to understand and build the system did not.
        </p>
        <Reveal>
          <ol className="mt-10 flex flex-wrap items-center gap-y-2.5">
            {arc.map((step, i) => (
              <li key={step} className="flex items-center">
                <span
                  className={`rounded-lg border px-3 py-1.5 text-[0.84rem] ${
                    i === arc.length - 1
                      ? "border-accent-line bg-accent-dim text-accent-bright"
                      : "border-line-soft text-body"
                  }`}
                >
                  {step}
                </span>
                {i < arc.length - 1 && (
                  <svg width="20" height="10" viewBox="0 0 20 10" aria-hidden="true" className="mx-1 shrink-0">
                    <path d="M1 5h14m-4-3.5L15.5 5 11 8.5" fill="none" stroke="var(--color-accent-line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Section tone="deep" eyebrow="Philosophy" title="Between disciplines.">
        <div className="max-w-3xl space-y-8">
          <Reveal>
            <blockquote className="border-l-2 border-accent pl-6 text-[1.08rem] italic leading-relaxed text-body">
              I&apos;ve always been drawn to problems that sit between
              disciplines. The interesting work is often where application
              software meets operating systems, where an SDK meets custom
              hardware, or where AI has to reason about a physical interaction
              rather than just text.
            </blockquote>
          </Reveal>
          <Reveal>
            <blockquote className="border-l-2 border-line pl-6 text-[1.08rem] italic leading-relaxed text-body">
              As my responsibilities grew into engineering leadership, I
              didn&apos;t want architecture and implementation to become
              abstract concepts. I still enjoy debugging systems, prototyping
              ideas, reading code, and working through technical tradeoffs with
              engineers.
            </blockquote>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="How I think"
        title="How I approach hard problems."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <Reveal as="article" key={p.title}>
              <div className="panel panel-hover h-full p-6">
                <h3 className="text-[1.02rem] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[0.88rem] text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep" eyebrow="Education" title="Where it started.">
        <div className="grid max-w-3xl gap-4 md:grid-cols-2">
          {education.map((e) => (
            <Reveal as="article" key={e.school}>
              <div className="panel h-full p-7">
                <h3 className="text-[1.05rem] font-semibold text-ink">{e.school}</h3>
                <p className="mt-1.5 text-[0.92rem] text-body">{e.degree}</p>
                <ul className="mt-3 space-y-1">
                  {e.details.map((d) => (
                    <li key={d} className="text-[0.85rem] text-muted">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
