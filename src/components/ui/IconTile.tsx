import type { LucideIcon } from "lucide-react";

import { ICON_TILE_ACCENT } from "@/lib/accents";
import type { Accent } from "@/lib/types";

interface IconTileProps {
  icon: LucideIcon;
  accent: Accent;
  size?: "sm" | "md";
  className?: string;
}

const SIZES = {
  sm: { box: "size-9 rounded-ctl", icon: 16 },
  md: { box: "size-11 rounded-tile", icon: 18 },
} as const;

/** Pastel tinted square holding a monochrome icon. */
export function IconTile({
  icon: Icon,
  accent,
  size = "sm",
  className = "",
}: IconTileProps) {
  const { box, icon } = SIZES[size];

  return (
    <span
      className={`grid shrink-0 place-items-center ${box} ${ICON_TILE_ACCENT[accent]} ${className}`}
    >
      <Icon size={icon} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
