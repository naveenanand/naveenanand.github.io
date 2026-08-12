export type Principle = { title: string; body: string };

/** "How I Approach Hard Problems" */
export const principles: Principle[] = [
  {
    title: "Start with the system",
    body: "Understand boundaries, dependencies, data flows, failure modes, and constraints before choosing technology.",
  },
  {
    title: "Work backward from the user",
    body: "Architecture exists to support product behavior.",
  },
  {
    title: "Build vertical slices",
    body: "Create something testable end-to-end early rather than completing isolated horizontal layers.",
  },
  {
    title: "Measure before optimizing",
    body: "Use profiling, telemetry, distributed traces, logs, load testing, and system metrics.",
  },
  {
    title: "Design for failure",
    body: "Retries, idempotency, observability, backpressure, degradation strategies, and failure isolation should be deliberate.",
  },
  {
    title: "Stay close to implementation",
    body: "Architecture decisions are better when grounded in how the actual system behaves.",
  },
  {
    title: "Use AI as an engineering multiplier",
    body: "AI agents can help reason, plan, implement, test, debug, and document, but engineering validation remains essential.",
  },
];

/** §53 — the vertical range, business to implementation */
export const operatingRange = [
  {
    level: "Business",
    items: ["Company priorities", "Customer needs", "Product decisions"],
  },
  {
    level: "Strategy",
    items: ["Roadmaps", "Architecture", "Investment decisions"],
  },
  {
    level: "Organization",
    items: ["Teams", "Hiring", "Ownership", "Execution"],
  },
  {
    level: "Systems",
    items: ["Platforms", "SDKs", "Cloud", "Embedded"],
  },
  {
    level: "Implementation",
    items: ["Algorithms", "APIs", "C/C++", "AI pipelines", "Debugging"],
  },
];

/** Leadership page — from business need to production system (loop) */
export const productionLoop = [
  "Business Need",
  "Customer Problem",
  "Product Decision",
  "Roadmap",
  "Architecture",
  "Team / Ownership",
  "Implementation",
  "CI/CD",
  "Production",
  "Observability",
  "Customer Feedback",
];
