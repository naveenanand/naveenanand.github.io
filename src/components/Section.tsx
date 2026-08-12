import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "base",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  tone?: "base" | "deep";
}) {
  return (
    <section
      id={id}
      className={
        tone === "deep"
          ? "border-y border-line-soft bg-deep py-20 md:py-28"
          : "py-20 md:py-28"
      }
    >
      <div className="wrap">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl font-semibold md:text-[2.6rem] md:leading-[1.12]">
                {title}
              </h2>
            )}
            {lead && <div className="mt-5 max-w-2xl text-muted">{lead}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
