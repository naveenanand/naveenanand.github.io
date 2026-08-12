import Link from "next/link";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";

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
        className={`panel panel-hover group block h-full p-7 md:p-8 ${
          featured ? "md:p-10" : ""
        }`}
      >
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          {project.categories.join(" · ")}
          {project.status && (
            <span className="ml-2 rounded border border-accent-line px-1.5 py-0.5 text-accent">
              {project.status}
            </span>
          )}
        </p>
        <h3
          className={`mt-3.5 font-semibold text-ink transition-colors group-hover:text-accent-bright ${
            featured ? "text-2xl md:text-[1.9rem] md:leading-tight" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-2xl text-[0.95rem] text-muted">{project.summary}</p>
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
