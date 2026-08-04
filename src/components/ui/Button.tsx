import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

const variantClass: Record<string, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "inline-flex items-center gap-2 px-4 py-2 rounded-md text-foreground/80 hover:text-primary transition-colors",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button ref={ref} className={cn(variantClass[variant], className)} {...props} />
  )
);
Button.displayName = "Button";

export default Button;
