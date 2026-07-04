import Link from "next/link";
import { Bot } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Brand panel — hidden on mobile */}
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-card p-12 lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Bot className="h-5 w-5 text-white" aria-hidden />
            </div>
            <span className="font-heading text-xl font-bold text-text">
              TalkDesk AI
            </span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="font-heading text-4xl font-bold leading-tight text-text xl:text-5xl">
            AI-powered customer support,{" "}
            <span className="text-accent">reimagined.</span>
          </h1>
          <p className="max-w-md text-lg text-muted">
            Automate conversations, delight customers, and scale your business
            with intelligent voice and chat agents.
          </p>
        </div>

        <p className="relative z-10 text-sm text-muted/60">
          &copy; {new Date().getFullYear()} TalkDesk AI. All rights reserved.
        </p>
      </aside>

      {/* Form panel */}
      <main className="flex w-full flex-col items-center justify-center bg-background px-4 py-12 lg:w-1/2">
        <div className="mb-8 flex items-center gap-3 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Bot className="h-4 w-4 text-white" aria-hidden />
          </div>
          <span className="font-heading text-lg font-bold text-text">
            TalkDesk AI
          </span>
        </div>

        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-text">
              {title}
            </h2>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
