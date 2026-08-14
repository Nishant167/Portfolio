import type { ReactNode } from "react";

type PanelElement = "div" | "article" | "section" | "aside";

interface PanelProps {
  as?: PanelElement;
  className?: string;
  children: ReactNode;
  id?: string;
  "aria-label"?: string;
}

/**
 * The kit's core card: white surface, warm hairline border, 20px radius
 * and a single soft diffused shadow.
 */
export function Panel({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: PanelProps) {
  return (
    <Tag className={`panel ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
