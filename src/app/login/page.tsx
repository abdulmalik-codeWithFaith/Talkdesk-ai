import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In | TalkDesk AI",
  description: "Sign in to your TalkDesk AI account",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
}
