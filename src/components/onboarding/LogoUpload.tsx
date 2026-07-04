"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/cn";

interface LogoUploadProps {
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: boolean;
}

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
const MAX_SIZE_MB = 5;

export function LogoUpload({ value, onChange, error }: LogoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleFile = (file: File | null) => {
    setLocalError(null);
    if (!file) {
      onChange(null);
      setPreview(null);
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setLocalError("Please upload a PNG, JPG, WEBP, or SVG file");
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setLocalError(`File must be smaller than ${MAX_SIZE_MB}MB`);
      return;
    }

    onChange(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange(null);
    setPreview(null);
    setLocalError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="sr-only"
        id="logo-upload"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
      />

      {preview ? (
        <div className="relative inline-flex items-center gap-4 rounded-lg border border-white/10 bg-background/50 p-4">
          <Image
            src={preview}
            alt="Logo preview"
            width={64}
            height={64}
            className="h-16 w-16 rounded-lg object-contain"
            unoptimized
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-text">{value?.name}</p>
            <p className="text-xs text-muted">
              {value ? `${(value.size / 1024).toFixed(1)} KB` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="rounded-lg p-1.5 text-muted hover:bg-white/5 hover:text-text transition-colors"
            aria-label="Remove logo"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="logo-upload"
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-8 transition-colors",
            "hover:border-primary/50 hover:bg-primary/5",
            error || localError
              ? "border-red-500/50"
              : "border-white/10"
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Upload className="h-5 w-5 text-primary" aria-hidden />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-text">
              Click to upload logo
            </p>
            <p className="text-xs text-muted">
              PNG, JPG, WEBP or SVG (max {MAX_SIZE_MB}MB)
            </p>
          </div>
        </label>
      )}

      {localError && (
        <p className="text-xs text-red-400" role="alert">
          {localError}
        </p>
      )}
    </div>
  );
}
