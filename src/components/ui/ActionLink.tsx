import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-terracotta text-white hover:bg-terracotta-hover",
  secondary:
    "border border-hairline text-ink hover:border-terracotta hover:text-terracotta",
  onDark: "bg-white text-forest hover:bg-terracotta-tint",
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-ctl px-5 py-2.5 font-display text-[13px] font-bold ${VARIANTS[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
