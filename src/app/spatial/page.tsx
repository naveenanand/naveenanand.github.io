import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Spatial Computing",
  description:
    "A decade of spatial computing: XR applications, real-time interaction and haptics, platform engineering, and hardware-aware software.",
  alternates: { canonical: "/spatial/" },
};

const areas = [
  {
    title: "XR Applications",
    items: ["Meta Quest", "Mobile AR", "VR", "Apple Vision Pro (platform capability)"],
    body: "Shipped experiences across headsets, phones, and industrial AR hardware — including Emerge Home on Quest, iOS, and Android.",
  },
  {
    title: "Interaction",
    items: ["Spatial input", "Real-time interaction", "Haptics", "Tactile feedback", "Computer vision"],
    body: "Interfaces where the input is a hand in space and the output can be something you feel.",
  },
  {
    title: "Platform Engineering",
    items: ["Unity", "Unreal", "SDKs", "Native integrations", "Networking"],
    body: "The SDK and runtime layers other engineers build on — managed/native bridges, multiplayer networking, interaction APIs.",
  },
  {
    title: "Hardware-aware Software",
    items: ["Sensors", "DSP", "MEMS", "Ultrasonic arrays", "FPGA", "Embedded firmware", "AOSP"],
    body: "Software that knows what the hardware is doing — from beamforming in C to custom Android platforms.",
  },
];

const journey = [
  {
    org: "Capture Interactive",
    period: "2013 — 2015",
    note: "AR/interactive apps, games, an Oculus Rift DK2 Comic-Con demo, and a 32-screen installation.",
  },
  {
    org: "DAQRI",
    period: "2015 — 2018",
    note: "Industrial AR: 8+ applications and the Unity SDK extensions bridging C# to native platform layers.",
  },
  {
    org: "Emerge",
    period: "2018 — Present",
    note: "Mid-air haptics: custom ultrasonic hardware, beamforming, and Emerge Home across Quest, iOS, and Android.",
  },
  {
    org: "Current R&D",
    period: "Ongoing",
    note: "AI + spatial interaction — generating tactile experiences from multimodal object understanding.",
  },
];

export default function SpatialPage() {
  return (
    <>
      <div className="wrap max-w-4xl py-16 md:py-24">
        <p className="eyebrow mb-4">Spatial Computing</p>
        <h1 className="text-4xl font-semibold md:text-[3.2rem] md:leading-[1.08]">
          Computing becomes more interesting when the screen disappears.
        </h1>
        <p className="mt-7 max-w-2xl text-muted">
          I&apos;ve spent over a decade building systems where the interface is
          physical space — AR you work inside, VR you share, and haptics you
          feel in open air.
        </p>
      </div>

      <Section tone="deep" eyebrow="The work" title="Four layers of spatial systems.">
        <div className="grid gap-4 md:grid-cols-2">
          {areas.map((a) => (
            <Reveal as="article" key={a.title}>
              <div className="panel panel-hover h-full p-7">
                <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
                <p className="mt-2.5 text-[0.92rem] text-muted">{a.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {a.items.map((i) => (
                    <li key={i} className="tag">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Trajectory"
        title="From installations to sensation."
        lead="Each chapter moved closer to the body: screens, then headsets, then hands."
      >
        <ol className="relative max-w-2xl">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.org} className="relative pl-9 pb-9 last:pb-0 md:pl-12">
              {i < journey.length - 1 && (
                <span aria-hidden="true" className="absolute left-[6px] top-6 h-full w-px bg-line-soft md:left-[7px]" />
              )}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 md:h-[15px] md:w-[15px] ${
                  i === journey.length - 1 ? "border-accent bg-accent/30" : "border-line bg-base"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{j.org}</h3>
                <p className="font-mono text-[0.75rem] text-muted">{j.period}</p>
              </div>
              <p className="mt-1.5 max-w-xl text-[0.93rem] text-muted">{j.note}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="mt-12 text-[0.95rem] text-muted">
            The deepest dive is the{" "}
            <Link href="/work/emerge-platform/" className="link-accent">
              Emerge Spatial Interaction Platform
            </Link>{" "}
            — and the{" "}
            <Link href="/work/beamforming/" className="link-accent">
              beamforming algorithm
            </Link>{" "}
            that makes mid-air touch possible.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
