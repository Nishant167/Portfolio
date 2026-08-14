import type { Accent } from "@/lib/types";

/** Tinted square icon tiles, as used on every Nestio stat card. */
export const ICON_TILE_ACCENT: Record<Accent, string> = {
  terracotta: "bg-terracotta-tint text-terracotta",
  forest: "bg-forest-tint text-forest-accent",
  sand: "bg-sand text-sand-ink",
};

/** Small context pills sitting under the big numerals. */
export const NOTE_PILL_ACCENT: Record<Accent, string> = {
  terracotta: "bg-terracotta-tint text-terracotta",
  forest: "bg-forest-tint text-forest-accent",
  sand: "bg-sand text-sand-ink",
};

/** Gradient bands behind the abstract project thumbnails. */
export const THUMBNAIL_GRADIENT: Record<string, string> = {
  sparkline: "linear-gradient(120deg, #f6e7df, #efe2d2)",
  graph: "linear-gradient(120deg, #e4eee7, #f1e9dc)",
  bars: "linear-gradient(120deg, #e8d9c3, #f6e7df)",
  "dual-line": "linear-gradient(120deg, #f1e9dc, #e4eee7)",
  grid: "linear-gradient(120deg, #efe2d2, #fbf8f3)",
  flow: "linear-gradient(120deg, #e4eee7, #e8d9c3)",
};
