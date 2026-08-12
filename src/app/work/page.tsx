import type { Metadata } from "next";
import SystemCard from "@/components/SystemCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Systems",
  description:
    "Systems, platforms, and products built end to end — spatial interaction platforms, mid-air haptics, engineering AI, and developer SDKs.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <div className="wrap py-16 md:py-24">
      <p className="eyebrow mb-4">Selected Systems</p>
      <h1 className="max-w-3xl text-4xl font-semibold md:text-5xl md:leading-[1.08]">
        Systems, platforms, and products.
      </h1>
      <p className="mt-6 max-w-2xl text-muted">
        Not projects — systems. Each of these was built end to end: architecture,
        organization, implementation, and the unglamorous work of shipping. Most
        cross at least three disciplines.
      </p>
      <div className="mt-14 grid gap-4">
        <SystemCard project={projects[0]} featured />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(1).map((p) => (
            <SystemCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
