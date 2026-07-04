"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={cn(
              "peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border bg-background/50",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              "checked:border-primary checked:bg-primary",
              error ? "border-red-500/70" : "border-white/20",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            {...props}
          />
          <Check
            className="pointer-events-none absolute left-0.5 top-0.5 h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
            aria-hidden
          />
        </div>
        {label && (
          <label
            htmlFor={inputId}
            className="cursor-pointer text-sm leading-5 text-muted peer-disabled:cursor-not-allowed"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
