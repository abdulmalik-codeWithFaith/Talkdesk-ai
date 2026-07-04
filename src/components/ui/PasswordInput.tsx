"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/cn";
import { Input, type InputProps } from "./Input";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showToggle?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, showToggle = true, error, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={visible ? "text" : "password"}
          error={error}
          className={cn(showToggle && "pr-11", className)}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 text-muted",
              "hover:text-text transition-colors",
              "focus-visible:outline-none focus-visible:text-accent"
            )}
            aria-label={visible ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {visible ? (
              <EyeOff className="h-4 w-4" aria-hidden />
            ) : (
              <Eye className="h-4 w-4" aria-hidden />
            )}
          </button>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
