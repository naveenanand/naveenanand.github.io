export type Tech = {
  name: string;
  /** Systems / places this was actually used, shown on selection. */
  usedIn?: string[];
};

export type TechCategory = {
  id: string;
  name: string;
  items: Tech[];
};

const EMERGE = "Emerge Spatial Interaction Platform";
const BEAM = "Mid-Air Tactile Beamforming";
const RAG = "Engineering Intelligence Platform";
const TACT = "Tactility Generation Model";
const DAQRI = "DAQRI AR Developer Platform";
const CAPTURE = "Capture Interactive";

export const techCategories: TechCategory[] = [
  {
    id: "ai",
    name: "AI",
    items: [
      { name: "LLMs", usedIn: [RAG, TACT] },
      { name: "RAG", usedIn: [RAG] },
      { name: "Embeddings", usedIn: [RAG] },
      { name: "Vector search", usedIn: [RAG] },
      { name: "Retrieval ranking", usedIn: [RAG] },
      { name: "Agents", usedIn: [RAG, "Agentic development workflows"] },
      { name: "Multi-agent systems", usedIn: [RAG] },
      { name: "MCP", usedIn: [RAG, "Agentic development workflows"] },
      { name: "Tool calling", usedIn: [RAG] },
      { name: "LLM evaluation", usedIn: [RAG] },
      { name: "Multimodal AI", usedIn: [TACT] },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    items: [
      { name: "C", usedIn: [BEAM, "Embedded systems", "Native SDK work"] },
      { name: "C++", usedIn: [BEAM, EMERGE, "Native plugins"] },
      { name: "C#", usedIn: [EMERGE, DAQRI, CAPTURE] },
      { name: "Python", usedIn: [RAG, TACT, "Automation & tooling"] },
      { name: "Rust" },
      { name: "JavaScript", usedIn: ["Web tooling", "This site"] },
      { name: "React", usedIn: ["Web tooling", "This site"] },
      { name: "Kotlin", usedIn: [EMERGE, "Android platform work"] },
      { name: "Java", usedIn: ["Android platform work"] },
      { name: "SQL", usedIn: [RAG, "Backend services"] },
      { name: "Bash", usedIn: ["Build & release automation"] },
    ],
  },
  {
    id: "cloud",
    name: "Cloud / Backend",
    items: [
      { name: "REST APIs", usedIn: [EMERGE, RAG] },
      { name: "Event-driven architecture", usedIn: [EMERGE] },
      { name: "PostgreSQL", usedIn: [RAG] },
      { name: "Vector databases", usedIn: [RAG] },
      { name: "AWS" },
      { name: "GCP", usedIn: [EMERGE] },
      { name: "Azure" },
      { name: "Firebase Authentication", usedIn: [EMERGE] },
      { name: "Docker", usedIn: ["CI/CD infrastructure"] },
      { name: "Kubernetes" },
    ],
  },
  {
    id: "devinfra",
    name: "Developer Infrastructure",
    items: [
      { name: "GitHub Actions" },
      { name: "Jenkins", usedIn: [EMERGE, "AOSP / Unity build automation"] },
      { name: "Azure DevOps", usedIn: [EMERGE, "Release automation"] },
      { name: "Bazel" },
      { name: "CMake", usedIn: ["Native / embedded builds"] },
      { name: "Grafana", usedIn: ["Observability"] },
    ],
  },
  {
    id: "systems",
    name: "Systems",
    items: [
      { name: "TCP/IP", usedIn: [EMERGE, "SDK networking"] },
      { name: "UDP", usedIn: [EMERGE, "Low-latency multiplayer"] },
      { name: "WebSockets" },
      { name: "Protocol design", usedIn: [EMERGE, "OPC UA R&D"] },
      { name: "Distributed systems", usedIn: [EMERGE] },
      { name: "Low-latency systems", usedIn: [EMERGE, BEAM] },
    ],
  },
  {
    id: "embedded",
    name: "Embedded",
    items: [
      { name: "AOSP", usedIn: [EMERGE] },
      { name: "Firmware", usedIn: [EMERGE] },
      { name: "FPGA control", usedIn: [EMERGE, BEAM] },
      { name: "DSP", usedIn: [BEAM, EMERGE] },
      { name: "MEMS", usedIn: [BEAM, EMERGE] },
      { name: "Ultrasonic arrays", usedIn: [BEAM, EMERGE] },
      { name: "OTA", usedIn: [EMERGE] },
      { name: "Hardware bring-up", usedIn: [EMERGE] },
      { name: "Power / thermal", usedIn: [EMERGE] },
      { name: "Device validation", usedIn: [EMERGE] },
    ],
  },
  {
    id: "spatial",
    name: "Spatial",
    items: [
      { name: "Unity", usedIn: [EMERGE, DAQRI, CAPTURE] },
      { name: "Unreal" },
      { name: "Meta Quest", usedIn: [EMERGE] },
      { name: "Apple Vision Pro" },
      { name: "AR", usedIn: [DAQRI, CAPTURE] },
      { name: "VR", usedIn: [EMERGE, CAPTURE] },
      { name: "XR", usedIn: [EMERGE, DAQRI] },
      { name: "Computer vision", usedIn: [TACT, DAQRI] },
    ],
  },
];
