"use client";

import { useEffect, useRef } from "react";

/**
 * Conceptual beamforming animation: a transducer array emits phase-aligned
 * wavefronts that converge at a focal point in mid-air. Deliberately
 * illustrative, not scientifically exact. Static frame under reduced motion.
 */
export default function BeamformingViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;

    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--color-accent").trim() || "#55a9ff";

    type P = { x: number; y: number };
    let W = 0;
    let H = 0;
    let transducers: P[] = [];
    let focal: P = { x: 0, y: 0 };

    function layout() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(rect.width, 280);
      H = Math.max(rect.height, 220);
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = W < 480 ? 9 : 13;
      const margin = W * 0.12;
      transducers = Array.from({ length: n }, (_, i) => ({
        x: margin + ((W - margin * 2) * i) / (n - 1),
        y: H - 26,
      }));
      focal = { x: W / 2, y: H * 0.34 };
    }

    function frame(nowMs: number) {
      const t = nowMs * 0.001;
      ctx!.clearRect(0, 0, W, H);

      // wavefronts: each transducer's arcs scale with its distance to the
      // focal point, so every front arrives at the same moment — convergence.
      const phase = (t * 0.32) % 1;
      const fronts = 3;
      for (const tr of transducers) {
        const d = Math.hypot(focal.x - tr.x, focal.y - tr.y);
        const ang = Math.atan2(focal.y - tr.y, focal.x - tr.x);
        for (let k = 0; k < fronts; k++) {
          const p = (phase + k / fronts) % 1;
          const r = d * p;
          if (r < 4) continue;
          const alpha = 0.05 + 0.3 * p * p;
          ctx!.beginPath();
          ctx!.arc(tr.x, tr.y, r, ang - 0.42, ang + 0.42);
          ctx!.strokeStyle = `rgba(85,169,255,${alpha.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      // transducer array
      for (const tr of transducers) {
        ctx!.beginPath();
        ctx!.arc(tr.x, tr.y, 4, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(232,236,242,0.65)";
        ctx!.fill();
      }
      ctx!.beginPath();
      ctx!.moveTo(transducers[0].x - 16, H - 14);
      ctx!.lineTo(transducers[transducers.length - 1].x + 16, H - 14);
      ctx!.strokeStyle = "rgba(148,166,190,0.3)";
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // focal point: pulses as fronts arrive
      const arrive = 1 - Math.abs(phase - 1) % 1;
      const pulse = Math.pow(arrive, 6);
      ctx!.beginPath();
      ctx!.arc(focal.x, focal.y, 5 + pulse * 5, 0, Math.PI * 2);
      ctx!.fillStyle = accent;
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(focal.x, focal.y, 13 + pulse * 12, 0, Math.PI * 2);
      ctx!.strokeStyle = `rgba(85,169,255,${(0.5 - pulse * 0.3).toFixed(3)})`;
      ctx!.lineWidth = 1;
      ctx!.stroke();

      if (!reduce && running) raf = requestAnimationFrame(frame);
    }

    layout();
    if (reduce) {
      frame(2600); // representative static frame
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      layout();
      if (reduce) frame(2600);
    };
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <figure className="panel overflow-hidden">
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="h-[300px] w-full md:h-[360px]"
          role="img"
          aria-label="Animated concept: an ultrasonic transducer array emits wavefronts that converge at a focal point in mid-air, where pressure can be felt by a hand"
        />
        {/* hand outline hovering above the focal point */}
        <svg
          viewBox="0 0 80 80"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[6%] h-20 w-20 -translate-x-1/2 opacity-70 md:h-24 md:w-24"
        >
          <path
            d="M26 62 V30 a5 5 0 0 1 10 0 V44 M36 44 V22 a5 5 0 0 1 10 0 V44 M46 44 V26 a5 5 0 0 1 10 0 V46 M56 46 V34 a5 5 0 0 1 10 0 V52 a22 22 0 0 1 -22 22 H40 A14 14 0 0 1 26 62"
            fill="none"
            stroke="rgba(232,236,242,0.55)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="pointer-events-none absolute bottom-3 left-4 flex gap-x-5 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
          <span>transducer array</span>
        </div>
        <div className="pointer-events-none absolute right-4 top-3 font-mono text-[0.65rem] uppercase tracking-wider text-faint">
          focal point → perceived pressure
        </div>
      </div>
      <figcaption className="border-t border-line-soft px-5 py-3 text-[0.78rem] text-faint">
        Conceptual animation — phase-aligned wavefronts converging at a point in
        space. Illustrative, not scientifically exact.
      </figcaption>
    </figure>
  );
}
