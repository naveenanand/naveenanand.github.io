import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-[0.78rem] text-faint">404 — route not found</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-md text-muted">
        The system you&apos;re looking for may have moved. Try the work index,
        or head home.
      </p>
      <div className="mt-8 flex gap-3.5">
        <Link href="/" className="btn btn-solid">
          Home
        </Link>
        <Link href="/work/" className="btn btn-ghost">
          Selected Systems
        </Link>
      </div>
    </div>
  );
}
