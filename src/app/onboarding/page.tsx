import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { OnboardingForm } from "@/components/onboarding/OnboardingForm";

export const metadata: Metadata = {
  title: "Business Setup | TalkDesk AI",
  description: "Complete your business profile setup",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/10 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <span className="font-heading text-lg font-bold text-text">
              TalkDesk AI
            </span>
          </Link>
          <span className="text-sm text-muted">Step 1 of 1</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <Card padding="lg">
          <CardHeader>
            <CardTitle>Set up your business</CardTitle>
            <CardDescription>
              Tell us about your business so we can personalize your AI
              assistant experience.
            </CardDescription>
          </CardHeader>
          <OnboardingForm />
        </Card>
      </main>
    </div>
  );
}

