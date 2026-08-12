import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import BeamformingViz from "@/components/BeamformingViz";
import ProjectViewTracker from "@/components/ProjectViewTracker";
import Reveal from "@/components/Reveal";
import SystemFlow from "@/components/SystemFlow";
import TactilityPipeline from "@/components/TactilityPipeline";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: { title: project.title, description: project.subtitle },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="wrap py-16 md:py-24">
      <ProjectViewTracker slug={project.slug} />

      {/* header */}
      <header className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[0.72rem] text-faint">
          <Link href="/work/" className="link-quiet">
            Work
          </Link>
          <span className="mx-2">/</span>
          <span className="text-muted">{project.title}</span>
        </nav>
        <p className="eyebrow">
          {project.categories.join(" · ")}
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-[2.8rem] md:leading-[1.1]">
          {project.title}
        </h1>
        <p className="mt-5 text-lg text-body">{project.subtitle}</p>
        <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-y border-line-soft py-4 font-mono text-[0.78rem]">
          <div>
            <dt className="text-faint">Timeframe</dt>
            <dd className="mt-0.5 text-body">{project.years}</dd>
          </div>
          <div>
            <dt className="text-faint">Role</dt>
            <dd className="mt-0.5 text-body">{project.role}</dd>
          </div>
          {project.status && (
            <div>
              <dt className="text-faint">Status</dt>
              <dd className="mt-0.5 text-accent">{project.status}</dd>
            </div>
          )}
        </dl>
      </header>

      {/* metrics */}
      {project.metrics && (
        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
            {project.metrics.map((m) => (
              <li key={m.label}>
                <p className="font-mono text-xl text-ink">{m.value}</p>
                <p className="mt-1 text-[0.82rem] text-muted">{m.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {/* visualization */}
      <div className="mt-14" id="architecture">
        {project.layers && (
          <>
            <h2 className="mb-6 text-2xl font-semibold">Architecture</h2>
            <ArchitectureDiagram layers={project.layers} />
          </>
        )}
        {project.flow && (
          <>
            <h2 className="mb-6 text-2xl font-semibold">System Flow</h2>
            <SystemFlow steps={project.flow} />
          </>
        )}
        {project.viz === "beamforming" && <BeamformingViz />}
        {project.viz === "tactility" && <TactilityPipeline />}
      </div>

      {/* leadership context */}
      {project.leadershipNote && (
        <Reveal>
          <blockquote className="mt-12 max-w-3xl border-l-2 border-accent pl-6 text-[1.05rem] italic text-body">
            {project.leadershipNote}
          </blockquote>
        </Reveal>
      )}

      {/* capabilities */}
      {project.capabilities && (
        <Reveal>
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold">
              {project.viz === "beamforming" ? "Domains" : "Capabilities"}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {project.capabilities.map((c) => (
                <li
                  key={c}
                  className="rounded-lg border border-line-soft bg-panel px-3.5 py-2 text-[0.88rem] text-body"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {/* case study sections */}
      <div className="mt-14 max-w-3xl space-y-12">
        {project.sections.map((s) => (
          <Reveal as="section" key={s.heading}>
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-muted">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-4 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b.slice(0, 40)} className="relative pl-5 text-muted">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.65em] h-px w-2.5 bg-accent/70"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      {/* technologies */}
      <Reveal>
        <div className="mt-14 max-w-3xl border-t border-line-soft pt-8">
          <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-faint">
            Technologies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* prev / next */}
      <nav
        className="mt-16 grid gap-3 border-t border-line-soft pt-8 sm:grid-cols-2"
        aria-label="More systems"
      >
        <Link href={`/work/${prev.slug}/`} className="panel panel-hover group p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">
            ← Previous system
          </p>
          <p className="mt-1.5 font-medium text-ink group-hover:text-accent-bright">
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/work/${next.slug}/`}
          className="panel panel-hover group p-5 text-right"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">
            Next system →
          </p>
          <p className="mt-1.5 font-medium text-ink group-hover:text-accent-bright">
            {next.title}
          </p>
        </Link>
      </nav>
    </article>
  );
}
