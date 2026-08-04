import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Badge = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium",
      "bg-primary/10 text-primary border border-primary/30",
      className
    )}
    {...props}
  />
);

export default Badge;
