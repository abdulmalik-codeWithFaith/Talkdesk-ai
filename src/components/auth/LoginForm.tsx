"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  ErrorMessage,
  FormError,
  Input,
  Label,
  PasswordInput,
} from "@/components/ui";
import { login, getApiErrorMessage } from "@/lib/api";
import { loginSchema, type LoginFormData } from "@/lib/validators";

export function LoginForm() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  });

  const onSubmit = async (data: LoginFormData) => {
    setApiError(null);
    try {
      const response = await login({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      });

      if (data.rememberMe) {
        localStorage.setItem("auth_token", response.token);
      } else {
        sessionStorage.setItem("auth_token", response.token);
      }

      if (!response.user.onboardingCompleted) {
        router.push("/onboarding");
      } else {
        router.push("/");
      }
    } catch (error) {
      setApiError(getApiErrorMessage(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <FormError message={apiError ?? undefined} />

      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          error={!!errors.email}
          {...register("email")}
        />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="password" required>
          Password
        </Label>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          error={!!errors.password}
          {...register("password")}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>

      <div className="flex items-center justify-between">
        <Checkbox
          id="rememberMe"
          label="Remember me"
          {...register("rememberMe")}
        />
        <Link
          href="/forgot-password"
          className="text-sm text-accent hover:text-accent/80 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Sign in
      </Button>

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Create account
        </Link>
      </p>
    </form>
  );
}
