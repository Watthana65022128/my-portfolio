import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "outline";
  children: React.ReactNode;
}

export default function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary/15 text-primary border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
    warning: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
    outline: "bg-transparent text-primary border border-primary/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
