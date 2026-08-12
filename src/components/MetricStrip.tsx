import { metrics } from "@/data/profile";

/** Minimalist credibility strip — quiet, not KPI cards. */
export default function MetricStrip() {
  return (
    <div className="border-y border-line-soft bg-deep">
      <div className="wrap">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => (
            <li key={m.label}>
              <p className="font-mono text-[1.05rem] font-medium tabular-nums text-ink">
                {m.value}
              </p>
              <p className="mt-0.5 text-[0.78rem] text-muted">{m.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
