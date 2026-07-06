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
import { register as registerUser, getApiErrorMessage } from "@/lib/api";
import { registerSchema, type RegisterFormData } from "@/lib/validators";

export function RegisterForm() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { acceptTerms: undefined },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setApiError(null);
    try {
      const response = await registerUser({
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });

      localStorage.setItem("auth_token", response.token);
      router.push("/onboarding");
    } catch (error) {
      setApiError(getApiErrorMessage(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <FormError message={apiError ?? undefined} />

      <div>
        <Label htmlFor="fullName" required>
          Full Name
        </Label>
        <Input
          id="fullName"
          autoComplete="name"
          placeholder="John Doe"
          error={!!errors.fullName}
          {...register("fullName")}
        />
        <ErrorMessage message={errors.fullName?.message} />
      </div>

      <div>
        <Label htmlFor="businessName" required>
          Business Name
        </Label>
        <Input
          id="businessName"
          autoComplete="organization"
          placeholder="Acme Corp"
          error={!!errors.businessName}
          {...register("businessName")}
        />
        <ErrorMessage message={errors.businessName?.message} />
      </div>

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
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+234 000 000-0000"
          error={!!errors.phone}
          {...register("phone")}
        />
        <ErrorMessage message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="password" required>
          Password
        </Label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          placeholder="Create a strong password"
          error={!!errors.password}
          {...register("password")}
        />
        <ErrorMessage message={errors.password?.message} />
      </div>

      <div>
        <Label htmlFor="confirmPassword" required>
          Confirm Password
        </Label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          placeholder="Confirm your password"
          error={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
        <ErrorMessage message={errors.confirmPassword?.message} />
      </div>

      <div>
        <Checkbox
          id="acceptTerms"
          error={!!errors.acceptTerms}
          label={
            <>
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-accent hover:text-accent/80 underline-offset-2 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-accent hover:text-accent/80 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
            </>
          }
          {...register("acceptTerms")}
        />
        <ErrorMessage message={errors.acceptTerms?.message} />
      </div>

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Create account
      </Button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
