import { operatingRange } from "@/data/philosophy";
import Reveal from "./Reveal";

/**
 * The vertical range: business context down to implementation.
 * Leadership and coding are not opposites — this shows the span.
 */
export default function OperatingRange() {
  return (
    <ol className="relative mx-auto max-w-2xl">
      {operatingRange.map((level, i) => (
        <Reveal as="li" key={level.level} className="relative pl-10 pb-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-[26px] h-full w-px bg-line-soft"
            style={i === operatingRange.length - 1 ? { display: "none" } : undefined}
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center"
          >
            <span className="h-[9px] w-[9px] rounded-full border border-accent bg-base" />
          </span>
          <div className="panel px-6 py-5">
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent">
              {level.level}
            </h3>
            <p className="mt-2 text-[0.95rem] text-body">
              {level.items.join(" · ")}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
