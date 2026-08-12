import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import TrackedLink from "@/components/TrackedLink";
import { education } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The full chronology: Emerge, DAQRI, Capture Interactive, Cognizant, and Design For You — 17+ years of engineering across AI, XR, embedded, and cloud.",
  alternates: { canonical: "/resume/" },
};

export default function ResumePage() {
  return (
    <div className="wrap py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">Resume</p>
          <h1 className="text-4xl font-semibold md:text-5xl">The chronology.</h1>
          <p className="mt-5 max-w-xl text-muted">
            {profile.currentRole} · {profile.location}. The rest of the site
            organizes this by system — this page keeps it chronological.
          </p>
        </div>
        <TrackedLink
          event="resume_click"
          eventProps={{ from: "resume-page" }}
          href={profile.resumePath}
          className="btn btn-solid"
        >
          Download PDF
        </TrackedLink>
      </div>

      <div className="mt-14">
        <Timeline />
      </div>

      <section className="mt-16 border-t border-line-soft pt-10">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-6 grid max-w-3xl gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="panel p-6">
              <h3 className="font-semibold text-ink">{e.school}</h3>
              <p className="mt-1 text-[0.92rem] text-body">{e.degree}</p>
              <p className="mt-2 text-[0.85rem] text-muted">{e.details.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
