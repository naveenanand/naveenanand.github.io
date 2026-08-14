import Link from "next/link";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import SystemGlyph from "./SystemGlyph";

export default function SystemCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Reveal as="article">
      <Link
        href={`/work/${project.slug}/`}
        className={`panel panel-hover group block h-full p-7 ${
          featured ? "md:p-10" : "md:p-8"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
              {project.categories.slice(0, 3).join(" · ")}
              {project.status && (
                <span className="ml-2 rounded border border-accent-line px-1.5 py-0.5 text-accent">
                  {project.status}
                </span>
              )}
            </p>
            <h3
              className={`mt-3 font-semibold text-ink transition-colors group-hover:text-accent-bright ${
                featured ? "text-2xl md:text-[1.9rem] md:leading-tight" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
          </div>
          <SystemGlyph slug={project.slug} className={featured ? "h-14 w-14 shrink-0" : "h-11 w-11 shrink-0"} />
        </div>

        <p className="mt-2.5 max-w-2xl text-[0.95rem] text-muted">{project.summary}</p>

        {/* featured: visual architecture strip instead of more words */}
        {featured && project.layers && (
          <ol className="mt-7 flex flex-wrap items-center gap-y-2">
            {project.layers.map((l, i) => (
              <li key={l.name} className="flex items-center">
                <span className="rounded-md border border-line-soft bg-base/50 px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-body">
                  {l.name}
                </span>
                {i < project.layers!.length - 1 && (
                  <span aria-hidden="true" className="mx-1.5 h-px w-3.5 bg-accent/50" />
                )}
              </li>
            ))}
          </ol>
        )}

        {featured && project.metrics && (
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {project.metrics.map((m) => (
              <li key={m.label}>
                <p className="font-mono text-[0.95rem] text-ink">{m.value}</p>
                <p className="text-[0.75rem] text-faint">{m.label}</p>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-[0.85rem] font-medium text-accent">
          Read the system
          <span className="inline-block transition-transform group-hover:translate-x-1"> →</span>
        </p>
      </Link>
    </Reveal>
  );
}
