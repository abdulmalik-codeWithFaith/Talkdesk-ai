import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  className,
  padding = "md",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-card shadow-xl shadow-black/20",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-6 space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-heading text-2xl font-bold tracking-tight text-text",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted", className)} {...props}>
      {children}
    </p>
  );
}
