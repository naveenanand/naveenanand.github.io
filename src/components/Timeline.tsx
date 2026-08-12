import { experience } from "@/data/experience";
import Reveal from "./Reveal";

/** Career timeline. compact = themes only (homepage); full = bullets (resume). */
export default function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.company} className="relative pl-9 pb-10 last:pb-0 md:pl-12">
          {i < experience.length - 1 && (
            <span aria-hidden="true" className="absolute left-[6px] top-6 h-full w-px bg-line-soft md:left-[7px]" />
          )}
          <span
            aria-hidden="true"
            className={`absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 md:h-[15px] md:w-[15px] ${
              job.current ? "border-accent bg-accent/30" : "border-line bg-base"
            }`}
          />
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
            <p className="font-mono text-[0.75rem] text-muted">{job.period}</p>
          </div>
          <p className="mt-1 text-[0.95rem] text-body">
            {job.role}
            {job.location ? <span className="text-faint"> · {job.location}</span> : null}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {job.themes.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
          {!compact && (
            <ul className="mt-4 max-w-3xl space-y-2.5">
              {job.bullets.map((b) => (
                <li key={b} className="relative pl-5 text-[0.94rem] text-muted">
                  <span aria-hidden="true" className="absolute left-0 top-[0.65em] h-px w-2.5 bg-accent/70" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
