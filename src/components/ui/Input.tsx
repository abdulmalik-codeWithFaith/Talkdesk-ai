import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border bg-background/50 px-4 py-2 text-sm text-text",
          "placeholder:text-muted/60 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-red-500/70 focus-visible:ring-red-500/30"
            : "border-white/10 hover:border-white/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
