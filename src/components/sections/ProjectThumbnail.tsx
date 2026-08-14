import { THUMBNAIL_GRADIENT } from "@/lib/accents";
import type { Project } from "@/lib/types";

/** Abstract CSS/SVG band standing in for a screenshot — no stock photos. */
export function ProjectThumbnail({ kind }: { kind: Project["thumbnail"] }) {
  return (
    <div
      className="relative h-[104px]"
      style={{ background: THUMBNAIL_GRADIENT[kind] }}
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 300 104"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {kind === "sparkline" ? (
          <>
            <path
              d="M0 76 L45 58 L90 66 L135 40 L180 50 L225 26 L300 36"
              fill="none"
              stroke="#c2603c"
              strokeWidth="2"
            />
            <g stroke="#c2603c" strokeOpacity=".16">
              <path d="M60 0V104M120 0V104M180 0V104M240 0V104" />
            </g>
          </>
        ) : null}

        {kind === "graph" ? (
          <g fill="none" stroke="#2f6b4f" strokeWidth="1.6">
            <circle cx="70" cy="52" r="16" />
            <circle cx="150" cy="34" r="10" />
            <circle cx="150" cy="72" r="10" />
            <circle cx="230" cy="52" r="14" />
            <path d="M86 46 L140 36M86 58 L140 70M160 34 L217 48M160 72 L217 58" />
          </g>
        ) : null}

        {kind === "bars" ? (
          <g fill="#c2603c" fillOpacity=".55">
            <rect x="30" y="60" width="20" height="30" rx="4" />
            <rect x="66" y="46" width="20" height="44" rx="4" />
            <rect x="102" y="54" width="20" height="36" rx="4" />
            <rect x="138" y="30" width="20" height="60" rx="4" />
            <rect x="174" y="42" width="20" height="48" rx="4" />
            <rect x="210" y="22" width="20" height="68" rx="4" />
            <rect x="246" y="36" width="20" height="54" rx="4" />
          </g>
        ) : null}

        {kind === "dual-line" ? (
          <>
            <path
              d="M0 86 L40 70 L80 78 L120 52 L160 60 L200 34 L240 44 L300 22"
              fill="none"
              stroke="#1e3a2f"
              strokeWidth="2"
            />
            <path
              d="M0 96 L40 88 L80 92 L120 74 L160 82 L200 62 L240 70 L300 52"
              fill="none"
              stroke="#c2603c"
              strokeWidth="1.6"
              strokeDasharray="5 4"
            />
          </>
        ) : null}

        {kind === "grid" ? (
          <>
            <g stroke="#8a6a44" strokeOpacity=".45" strokeWidth="1">
              <path d="M0 26H300M0 52H300M0 78H300M50 0V104M100 0V104M150 0V104M200 0V104M250 0V104" />
            </g>
            <rect
              x="100"
              y="26"
              width="100"
              height="26"
              fill="#c2603c"
              fillOpacity=".35"
            />
          </>
        ) : null}

        {kind === "flow" ? (
          <g fill="none" stroke="#1e3a2f" strokeWidth="1.4">
            <path d="M20 20h40v20H20zM20 52h40v20H20zM130 30h40v44h-40zM240 42h40v20h-40z" />
            <path d="M60 30 L130 44M60 62 L130 60M170 52 L240 52" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
