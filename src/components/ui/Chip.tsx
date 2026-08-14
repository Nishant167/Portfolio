import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  /** Use the translucent treatment on the forest-green panels. */
  onDark?: boolean;
  className?: string;
}

export function Chip({ children, onDark = false, className = "" }: ChipProps) {
  return (
    <span className={`${onDark ? "chip-on-dark" : "chip"} ${className}`}>
      {children}
    </span>
  );
}

interface NotePillProps {
  children: ReactNode;
  className?: string;
}

/** Delta / context pill that sits under a big numeral. */
export function NotePill({ children, className = "" }: NotePillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] leading-tight ${className}`}
    >
      {children}
    </span>
  );
}
