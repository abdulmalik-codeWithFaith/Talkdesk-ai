import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
          TalkDesk{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mt-4 text-lg text-muted">
          AI-powered customer support, reimagined. Automate conversations and
          scale your business with intelligent voice and chat agents.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/login">
            <Button size="lg" className="min-w-[160px]">
              Sign in
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary" size="lg" className="min-w-[160px]">
              Create account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
