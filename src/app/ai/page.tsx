import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SystemFlow from "@/components/SystemFlow";

export const metadata: Metadata = {
  title: "AI",
  description:
    "AI as a product capability and as an engineering capability — RAG platforms, multimodal models, and agentic development workflows built on vertical slices.",
  alternates: { canonical: "/ai/" },
};

const devLoop = [
  { label: "Problem" },
  { label: "Requirements" },
  { label: "Architecture / planning" },
  { label: "Markdown implementation plan" },
  { label: "Kanban-style tasks" },
  { label: "Vertical feature slices" },
  { label: "Implementation" },
  { label: "Automated tests" },
  { label: "Human validation" },
  { label: "Feedback to agent" },
  { label: "Next slice" },
];

export default function AIPage() {
  return (
    <>
      <div className="wrap max-w-4xl py-16 md:py-24">
        <p className="eyebrow mb-4">AI</p>
        <h1 className="text-4xl font-semibold md:text-[3.2rem] md:leading-[1.08]">
          AI should change how software is built, not just what software can
          do.
        </h1>
        <p className="mt-7 max-w-2xl text-muted">
          I work with AI in two distinct ways: as a capability inside products,
          and as a participant in the engineering process itself. They demand
          different disciplines — and they reinforce each other.
        </p>
      </div>

      <Section
        tone="deep"
        eyebrow="AI as a product capability"
        title="Models that reason about more than text."
        lead="Production AI systems I've built — retrieval, agents, and multimodal models that reason about physical interaction."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Tactility Generation Model",
              body: "A multimodal system that converts text, images, 3D geometry, material metadata, and user intent into tactile interaction specifications.",
              href: "/work/tactility-generation/",
            },
            {
              title: "Engineering Intelligence Platform",
              body: "An MCP-enabled RAG platform over 3,000+ engineering documents — semantic retrieval, tool calling, and multi-agent workflows.",
              href: "/work/engineering-intelligence/",
            },
            {
              title: "Semantic retrieval",
              body: "Ingestion, chunking, embeddings, vector search, and retrieval ranking tuned for engineering content rather than generic documents.",
              href: "/work/engineering-intelligence/",
            },
            {
              title: "Agent systems",
              body: "Agents that invoke tools over MCP, cross-reference sources, and participate in coding and debugging workflows with humans in the loop.",
              href: "/work/engineering-intelligence/",
            },
          ].map((c) => (
            <Reveal as="article" key={c.title}>
              <Link href={c.href} className="panel panel-hover block h-full p-7">
                <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2.5 text-[0.92rem] text-muted">{c.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="AI as an engineering capability"
        title="Agents as participants, not autocomplete."
        lead={
          <>
            I increasingly treat AI agents as participants in the
            software-development process rather than autocomplete tools. That
            only works with a methodology built for it.
          </>
        }
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SystemFlow steps={devLoop} />
          </div>
          <div className="space-y-8">
            <Reveal>
              <div className="panel p-7">
                <h3 className="text-lg font-semibold text-ink">
                  The vertical-slice philosophy
                </h3>
                <p className="mt-3 text-[0.93rem] text-muted">
                  The traditional sequence — backend complete, then frontend
                  complete, then integration — hides risk until the end. With
                  agents doing a meaningful share of the implementation, that
                  risk compounds silently.
                </p>
                <p className="mt-3 text-[0.93rem] text-muted">
                  So I work in vertical slices instead: each feature slice gets
                  a working implementation, tests, and review before the next
                  begins. Every slice is something you can run, exercise, and
                  judge.
                </p>
                <div className="mt-5 rounded-xl border border-line-soft bg-base/60 p-5 font-mono text-[0.8rem] leading-7">
                  <p className="text-faint"># instead of horizontal layers…</p>
                  <p className="text-muted">backend → frontend → integration</p>
                  <p className="mt-3 text-faint"># …ship verifiable slices</p>
                  <p className="text-ink">
                    slice 1 <span className="text-faint">→</span> implement{" "}
                    <span className="text-faint">→</span> test{" "}
                    <span className="text-faint">→</span> review
                  </p>
                  <p className="text-ink">
                    slice 2 <span className="text-faint">→</span> implement{" "}
                    <span className="text-faint">→</span> test{" "}
                    <span className="text-faint">→</span> review
                  </p>
                </div>
                <p className="mt-4 text-[0.93rem] text-muted">
                  This allows continuous validation of agent-generated work —
                  the agent gets feedback while context is fresh, and I never
                  review a mountain of unverified code.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="panel p-7">
                <h3 className="text-lg font-semibold text-ink">Tools, briefly</h3>
                <p className="mt-3 text-[0.93rem] text-muted">
                  Day to day this runs on Claude Code, Cursor, GitHub Copilot,
                  and MCP servers that expose our engineering knowledge and
                  tooling to agents. But the tools matter less than the
                  methodology — plans in Markdown, tasks on a board, tests as
                  the gate, and a human validating every slice.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
