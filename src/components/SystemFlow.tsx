import type { FlowStep } from "@/data/projects";
import Reveal from "./Reveal";

/** Vertical data/system flow with connecting arrows. */
export default function SystemFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="mx-auto flex max-w-md flex-col items-stretch" aria-label="System flow">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.label} className="flex flex-col items-center">
          <div className="panel w-full px-5 py-3.5 text-center">
            <p className="text-[0.95rem] font-medium text-ink">{step.label}</p>
            {step.detail && (
              <p className="mt-1 text-[0.78rem] text-faint">{step.detail}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <svg width="14" height="26" viewBox="0 0 14 26" aria-hidden="true" className="my-0.5">
              <path
                d="M7 1v18M2.5 15.5 7 21l4.5-5.5"
                fill="none"
                stroke="var(--color-accent-line)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
