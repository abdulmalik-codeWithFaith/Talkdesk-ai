import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export function ErrorMessage({ message, className }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <p
      role="alert"
      className={cn(
        "mt-1.5 flex items-center gap-1.5 text-xs text-red-400",
        className
      )}
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{message}</span>
    </p>
  );
}

export interface FormErrorProps {
  message?: string;
  className?: string;
}

/** Display a form-level API or submission error. */
export function FormError({ message, className }: FormErrorProps) {
  if (!message) return null;

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300",
        className
      )}
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>{message}</span>
    </div>
  );
}
