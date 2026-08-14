export type ArchLayer = { name: string; items: string[] };
export type FlowStep = { label: string; detail?: string };
export type Metric = { value: string; label: string };
export type CaseSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  categories: string[];
  years: string;
  role: string;
  summary: string;
  status?: string;
  layers?: ArchLayer[];
  flow?: FlowStep[];
  viz?: "beamforming" | "tactility";
  capabilities?: string[];
  metrics?: Metric[];
  technologies: string[];
  leadershipNote?: string;
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "emerge-platform",
    title: "Emerge Spatial Interaction Platform",
    subtitle:
      "An end-to-end spatial interaction platform combining custom ultrasonic hardware, real-time beamforming, XR applications, SDK networking, embedded systems, FPGA control, and cloud services.",
    categories: ["XR", "Haptics", "Embedded", "Cloud", "SDK"],
    years: "2018 — Present",
    role: "Architect / Senior Director of Engineering",
    summary:
      "Custom ultrasonic hardware to XR apps — one platform, delivered end to end.",
    layers: [
      {
        name: "Experience Layer",
        items: ["Meta Quest", "iOS", "Android", "Unity"],
      },
      {
        name: "SDK / Runtime",
        items: ["Unity SDK", "Networking", "Multiplayer", "Interaction APIs"],
      },
      {
        name: "Device Platform",
        items: ["Android / AOSP", "Firmware", "FPGA control"],
      },
      {
        name: "Real-Time Sensing / Haptics",
        items: ["C/C++", "Beamforming", "Ultrasonic arrays", "DSP"],
      },
      {
        name: "Cloud",
        items: ["Authentication", "Backend services", "Platform infrastructure"],
      },
    ],
    metrics: [
      { value: "8-player", label: "multiplayer interaction" },
      { value: "Low-latency", label: "tactile experiences" },
      { value: "3 platforms", label: "Quest · iOS · Android" },
      { value: "Custom", label: "hardware/software stack" },
    ],
    technologies: [
      "Unity",
      "C#",
      "C/C++",
      "Kotlin",
      "Android / AOSP",
      "FPGA control",
      "DSP",
      "Ultrasonic arrays",
      "GCP",
      "Jenkins",
      "Azure DevOps",
    ],
    leadershipNote:
      "Led the engineering organization responsible for delivering the platform while remaining hands-on in architecture, system debugging, prototyping, and core algorithms.",
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Spatial computing is mostly something you look at. Making it something you can feel — without gloves or wearables — requires solving problems across the entire stack at once: custom ultrasonic hardware, real-time signal processing, device software, SDKs, applications, networking, and cloud services.",
          "No single discipline covers that. The platform had to be built as one coherent system by a team spanning all of them.",
        ],
      },
      {
        heading: "Context",
        paragraphs: [
          "Emerge builds mid-air tactile technology: ultrasonic transducer arrays that focus acoustic energy so people feel virtual objects and interactions in open air. Wave-1 is the proprietary hardware; Emerge Home is the flagship social product built on it, shipped across Meta Quest, iOS, and Android.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I owned Emerge's end-to-end platform strategy across Unity/XR, SDK networking, Android/AOSP, C/C++ beamforming, FPGA control, and GCP authentication — while building and leading the 23-person global engineering organization spanning XR, embedded, DSP, hardware, and cloud.",
          "I stayed hands-on throughout: I wrote the C beamforming algorithm that powers tactile sensation on Wave-1, and worked directly in architecture, prototyping, and system debugging.",
        ],
      },
      {
        heading: "Key Decisions",
        bullets: [
          "Treat the SDK as a product: applications — internal and partner-built — sit on stable interaction APIs, not on device internals.",
          "Partition real-time work deliberately between embedded firmware, FPGA control, and host software so the tactile loop stays low-latency.",
          "Automate AOSP and Unity app/SDK builds across cloud and on-prem servers (Jenkins, Azure DevOps) — this cut release cycles by 40%.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Emerge Home shipped on Meta Quest, iOS, and Android on custom ultrasonic hardware.",
          "Up to 8-player low-latency multiplayer tactile experiences.",
          "20+ experiences delivered with 30+ partners, supporting $40M+ in funding.",
          "Named inventor on 7+ granted patents from this work.",
        ],
      },
    ],
  },
  {
    slug: "beamforming",
    title: "Mid-Air Tactile Beamforming",
    subtitle:
      "Designed and implemented the C beamforming algorithm powering tactile sensation on Emerge Wave-1's ultrasonic hardware.",
    categories: ["Real-Time Systems", "DSP", "C"],
    years: "Emerge · Wave-1",
    role: "Algorithm design & implementation",
    summary:
      "The C algorithm that focuses ultrasound into pressure you can feel in mid-air.",
    viz: "beamforming",
    technologies: ["C", "C++"],
    capabilities: [
      "DSP",
      "MEMS",
      "Ultrasonic sensing",
      "Real-time systems",
      "Hardware/software integration",
    ],
    sections: [
      {
        heading: "How It Works",
        paragraphs: [
          "An array of ultrasonic transducers is controlled so acoustic energy converges at precise points in space. Each transducer fires with a carefully computed phase offset; where the wavefronts arrive in phase, they interfere constructively.",
          "The resulting pressure at the focal point can be perceived through the hand without physically touching a surface. Move the focal point fast enough, in the right patterns, and you get edges, textures, and dynamic effects.",
        ],
      },
      {
        heading: "Engineering Challenges",
        bullets: [
          "The phase computation runs in a hard real-time loop — the tactile illusion breaks if latency wanders.",
          "The algorithm has to respect the physical array geometry and transducer behavior, not an idealized model.",
          "It sits at the hardware/software boundary: C code, FPGA control, and MEMS hardware all have to agree.",
        ],
      },
    ],
  },
  {
    slug: "engineering-intelligence",
    title: "Engineering Intelligence Platform",
    subtitle:
      "Built an MCP-enabled RAG platform over 3,000+ internal engineering documents to help engineers investigate systems, retrieve technical context, debug issues, and work with large codebases.",
    categories: ["AI", "RAG", "Agents", "Developer Productivity"],
    years: "Emerge",
    role: "Architecture & implementation",
    summary:
      "MCP-enabled RAG over 3,000+ engineering docs — up to 3× faster investigation.",
    flow: [
      { label: "Documents", detail: "3,000+ engineering docs, SDK references, design notes" },
      { label: "Ingestion / chunking" },
      { label: "Embeddings" },
      { label: "Vector index" },
      { label: "Retrieval + ranking" },
      { label: "LLM" },
      { label: "MCP tools / agents" },
      { label: "Engineering workflows", detail: "investigation · debugging · documentation" },
    ],
    capabilities: [
      "Semantic technical search",
      "Engineering Q&A",
      "Codebase context",
      "Debugging assistance",
      "Documentation discovery",
      "Tool invocation",
      "Multi-agent workflows",
    ],
    metrics: [
      {
        value: "Up to 3×",
        label: "reduction in investigation and documentation time",
      },
    ],
    technologies: [
      "RAG",
      "Embeddings",
      "Vector search",
      "MCP",
      "Tool calling",
      "Multi-agent workflows",
      "PostgreSQL",
      "Python",
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Years of engineering knowledge — architecture decisions, SDK references, debugging history, hardware behavior — lived across thousands of documents. Finding the right context meant knowing who to ask or where to dig. That doesn't scale, and it quietly taxes every investigation.",
        ],
      },
      {
        heading: "System",
        paragraphs: [
          "Documents flow through ingestion and chunking into an embedding pipeline and vector index. Retrieval and ranking assemble grounded context for the LLM, and MCP tools let agents act on it — searching, cross-referencing, and participating in coding and debugging workflows rather than just answering questions.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Up to 3× reduction in engineering investigation, debugging, and documentation time. The qualifier matters: the gains depend on the task — the biggest wins are on questions whose answers exist but used to be expensive to find.",
        ],
      },
    ],
  },
  {
    slug: "tactility-generation",
    title: "Tactility Generation Model",
    subtitle: "Multimodal AI for generating tactile interactions.",
    categories: ["AI", "Multimodal", "Haptics", "R&D"],
    years: "Emerge · Ongoing",
    role: "R&D lead",
    status: "Ongoing R&D",
    summary:
      "Multimodal AI that turns object understanding into tactile interaction specs.",
    viz: "tactility",
    technologies: [
      "Multimodal AI",
      "Computer vision",
      "3D geometry analysis",
      "Generative modeling",
      "Python",
    ],
    sections: [
      {
        heading: "What It Does",
        paragraphs: [
          "Authoring tactile feedback by hand is slow, specialized work. This system explores whether a model can do the first pass: given what an object is — its appearance, geometry, material, and how a person intends to interact with it — generate the tactile interaction specification directly.",
        ],
      },
      {
        heading: "Pipeline",
        bullets: [
          "Inputs: text, screenshots / images, 3D geometry, material metadata, user intent",
          "Processing: multimodal reasoning, computer vision, 3D geometry analysis, spatial understanding, interaction reasoning",
          "Output: tactile points, edge sensations, texture feedback, dynamic haptic effects",
        ],
      },
      {
        heading: "Status",
        paragraphs: [
          "Ongoing R&D. The visualization on this page is conceptual — it illustrates the pipeline, not a live model running in the browser.",
        ],
      },
    ],
  },
  {
    slug: "daqri-sdk",
    title: "AR Developer Platform & SDK",
    subtitle:
      "Architected Unity SDK extensions bridging managed C# applications with native platform layers across Linux, Android, iOS, and Windows.",
    categories: ["SDK", "AR", "Cross-platform", "Developer Experience"],
    years: "2015 — 2018",
    role: "Senior Software Engineer / Engineering Lead · DAQRI",
    summary:
      "Unity SDK bridging C# to native layers across four operating systems.",
    flow: [
      { label: "Unity / C#", detail: "applications and managed SDK surface" },
      { label: "Native bridge", detail: "managed ↔ native interop" },
      { label: "Platform APIs" },
      { label: "Operating system / device capabilities", detail: "Linux · Android · iOS · Windows" },
    ],
    capabilities: [
      "Cross-platform SDK design",
      "Native interoperability",
      "Hardware integration",
      "Platform APIs",
      "Developer experience",
    ],
    technologies: ["Unity", "C#", "Native plugins", "Linux", "Android", "iOS", "Windows"],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "DAQRI built AR hardware for industrial work — smart helmets and smart glasses. Applications needed access to device capabilities that lived far below Unity's managed runtime: cameras, sensors, tracking systems, and platform services.",
        ],
      },
      {
        heading: "What I Built",
        paragraphs: [
          "Unity SDK extensions bridging managed C# and native layers, enabling API communication, hardware integration, and cross-platform deployment across Linux, Android, iOS, and Windows. I collaborated with the OS, VIO, and SLAM teams on system integration, optimization, profiling, and debugging.",
        ],
        bullets: [
          "Applications shipped on the platform: Software Update, Turbine, Gallery, Onboarding, WorkSense Tag",
        ],
      },
      {
        heading: "Developer & Partner Work",
        paragraphs: [
          "Worked directly with developers and partners to support integrations and demonstrate capabilities at industry events including CES and AWE.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
