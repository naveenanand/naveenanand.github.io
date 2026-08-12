import type { ArchLayer } from "@/data/projects";
import Reveal from "./Reveal";

/** Stacked platform architecture — top layer is what users touch, bottom is hardware/cloud. */
export default function ArchitectureDiagram({ layers }: { layers: ArchLayer[] }) {
  return (
    <div className="flex flex-col gap-2.5" role="list" aria-label="Platform architecture layers">
      {layers.map((layer, i) => (
        <Reveal as="div" key={layer.name}>
          <div
            role="listitem"
            className="panel panel-hover flex flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between"
            style={{
              background: `linear-gradient(90deg, rgba(85,169,255,${0.055 + i * 0.012}), rgba(148,166,190,0.03))`,
            }}
          >
            <h3 className="shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent md:w-56">
              {layer.name}
            </h3>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {layer.items.map((item) => (
                <li key={item} className="tag !text-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
