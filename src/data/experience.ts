export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  themes: string[];
  bullets: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Emerge",
    role: "Architect / Senior Director of Engineering",
    period: "2018 — Present",
    location: "Los Angeles, CA",
    current: true,
    themes: [
      "AI",
      "XR",
      "Haptics",
      "Embedded",
      "Cloud",
      "SDKs",
      "Leadership",
    ],
    bullets: [
      "Built and led a 23-person global engineering organization spanning XR, embedded, DSP, hardware, and cloud; coordinated 30+ partners and delivered 20+ experiences supporting $40M+ in funding.",
      "Owned Emerge's end-to-end platform strategy across Unity/XR, SDK networking, Android/AOSP, C/C++ beamforming, FPGA control, and GCP auth, delivering up to 8-player low-latency mid-air tactile experiences.",
      "Shipped Emerge Home, the flagship social product, across Meta Quest, iOS, and Android on custom ultrasonic hardware.",
      "Built an MCP-enabled RAG platform over 3,000+ engineering documents, combining document ingestion, semantic retrieval, vector search, tool calling, and multi-agent coding/debugging workflows — reducing engineering investigation, debugging, and documentation time by up to 3×.",
      "Built a multimodal Tactility Generation Model that turns text, screenshots, 3D geometry, material metadata, and user intent into tactile interaction specs.",
      "Wrote the C beamforming algorithm powering mid-air tactile sensation on Wave-1, Emerge's proprietary ultrasonic hardware.",
      "Cut release cycles 40% by automating AOSP and Unity app/SDK builds (Jenkins, Azure DevOps) across cloud and on-prem servers.",
      "Named inventor on 7+ granted patents.",
    ],
  },
  {
    company: "DAQRI",
    role: "Senior Software Engineer / Engineering Lead",
    period: "2015 — 2018",
    location: "Los Angeles, CA",
    themes: [
      "AR",
      "Unity",
      "SDK architecture",
      "Native integration",
      "Hardware integration",
      "Developer platforms",
    ],
    bullets: [
      "Shipped 8+ AR applications for DAQRI devices, including Software Update, Turbine, Gallery, Onboarding, and WorkSense Tag for attaching contextual data and media to real-world assets.",
      "Architected Unity SDK extensions bridging managed C# and native layers, enabling API communication, hardware integration, and cross-platform deployment across Linux, Android, iOS, and Windows.",
      "Collaborated with OS, VIO, and SLAM teams on system integration, optimization, profiling, and debugging for AR hardware and software platforms.",
      "Led customer and developer engagements by educating partners on SDK capabilities, supporting integrations, and building demos for CES, AWE, Hannover, and client visits.",
    ],
  },
  {
    company: "Capture Interactive",
    role: "Senior Software Developer",
    period: "2013 — 2015",
    location: "Van Nuys, CA",
    themes: [
      "AR",
      "VR",
      "Games",
      "Interactive installations",
      "Oculus Rift DK2",
      "Multi-screen systems",
    ],
    bullets: [
      "Shipped 10 AR/interactive apps and 5 games across Windows, Android, and iOS, spanning sports, casual, party, and trivia genres.",
      "Built VR and large-scale multi-screen interactive experiences, including an Oculus Rift DK2 Comic-Con demo and a 32-screen Crestron-based installation with MySQL/server-side integration.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Software Engineer I",
    period: "2009 — 2011",
    themes: ["R&D", "OPC UA", "Network programming", "Client-server systems"],
    bullets: [
      "Researched OPC UA protocol throughput and reliability as part of an R&D initiative.",
      "Built a test-management web tool with client-server architecture using socket programming.",
    ],
  },
  {
    company: "Design For You",
    role: "Founder",
    period: "2008 — 2009",
    themes: ["Design", "Web development", "Client work", "Creative technology"],
    bullets: [
      "Created logos, animations, posters, business cards, and front- and back-end websites for a range of clients.",
    ],
  },
];

export const education = [
  {
    school: "Full Sail University",
    degree: "B.S. Game Development",
    details: ["GPA 3.56", "Valedictorian", "Advanced Achievement Award", "Course Director Award, 13 courses"],
  },
  {
    school: "PSG College of Technology / Anna University",
    degree: "B.E. Electronics & Communication Engineering",
    details: ["GPA 3.20"],
  },
];
