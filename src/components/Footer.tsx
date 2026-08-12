import { profile } from "@/data/profile";
import TrackedLink from "./TrackedLink";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-deep">
      <div className="wrap flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Los Angeles, CA</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <TrackedLink
            event="linkedin_click"
            eventProps={{ from: "footer" }}
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet"
          >
            LinkedIn
          </TrackedLink>
          <TrackedLink
            event="contact_click"
            eventProps={{ from: "footer" }}
            href={`mailto:${profile.email}`}
            className="link-quiet"
          >
            Email
          </TrackedLink>
          <TrackedLink
            event="resume_click"
            eventProps={{ from: "footer" }}
            href={profile.resumePath}
            className="link-quiet"
          >
            Resume
          </TrackedLink>
        </nav>
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} · <span className="text-muted">Still building.</span>
        </p>
      </div>
    </footer>
  );
}
