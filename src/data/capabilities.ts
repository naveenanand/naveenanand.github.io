export type Capability = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    id: "ai",
    title: "AI Platforms",
    description: "Production AI — LLMs, retrieval, agents, and multimodal models.",
    tags: ["LLMs", "RAG", "AI Agents", "MCP", "Multimodal AI"],
  },
  {
    id: "spatial",
    title: "Spatial Computing",
    description: "Digital experiences people can see, share, and feel.",
    tags: ["XR", "Unity", "Meta Quest", "Vision Pro", "Haptics"],
  },
  {
    id: "platforms",
    title: "Developer Platforms",
    description: "SDKs, APIs, and tooling other engineers build products on.",
    tags: ["SDK Architecture", "APIs", "Cross-platform", "DevEx", "CI/CD"],
  },
  {
    id: "systems",
    title: "Real-Time & Embedded",
    description: "Below the application layer — sensors, signal processing, low latency.",
    tags: ["C/C++", "DSP", "FPGA", "MEMS", "Firmware"],
  },
];
