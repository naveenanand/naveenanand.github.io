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
    description:
      "Building production AI systems around LLMs, retrieval, agents, multimodal inputs, tools, evaluation, and developer workflows.",
    tags: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "AI Agents",
      "MCP",
      "Tool Calling",
      "Multimodal AI",
    ],
  },
  {
    id: "spatial",
    title: "Spatial Computing",
    description:
      "Building interactive systems that connect digital experiences with people, physical environments, sensing, and tactile feedback.",
    tags: [
      "XR",
      "Unity",
      "Meta Quest",
      "Vision Pro",
      "Haptics",
      "Computer Vision",
      "Multiplayer",
    ],
  },
  {
    id: "platforms",
    title: "Developer Platforms",
    description:
      "Designing SDKs, APIs, tooling, build systems, and platform abstractions that other engineers build products on top of.",
    tags: [
      "SDK Architecture",
      "APIs",
      "Cross-platform",
      "Developer Experience",
      "CI/CD",
      "Cloud",
    ],
  },
  {
    id: "systems",
    title: "Real-Time & Embedded Systems",
    description:
      "Working below the application layer when the problem requires hardware awareness, deterministic behavior, sensors, signal processing, or low latency.",
    tags: [
      "C/C++",
      "DSP",
      "AOSP",
      "FPGA",
      "MEMS",
      "Ultrasonic Arrays",
      "Networking",
      "Firmware",
    ],
  },
];
