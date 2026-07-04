"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  ErrorMessage,
  FormError,
  Input,
  Label,
} from "@/components/ui";
import { LogoUpload } from "./LogoUpload";
import { completeOnboarding, getApiErrorMessage } from "@/lib/api";
import {
  onboardingSchema,
  type OnboardingFormData,
} from "@/lib/validators";

const BUSINESS_TYPES = [
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Hospitality",
  "Real Estate",
  "Other",
];

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Nigeria",
  "South Africa",
  "India",
  "Other",
];

export function OnboardingForm() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: { logo: null },
  });

  const onSubmit = async (data: OnboardingFormData) => {
    setApiError(null);
    try {
      await completeOnboarding({
        businessName: data.businessName,
        businessType: data.businessType,
        businessEmail: data.businessEmail,
        phone: data.phone,
        country: data.country,
        address: data.address,
        website: data.website,
        businessDescription: data.businessDescription,
        logo: data.logo,
      });
      router.push("/");
    } catch (error) {
      setApiError(getApiErrorMessage(error));
    }
  };

  const selectClassName = (hasError: boolean) =>
    [
      "flex h-11 w-full rounded-lg border bg-background/50 px-4 py-2 text-sm text-text",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      hasError
        ? "border-red-500/70"
        : "border-white/10 hover:border-white/20",
    ].join(" ");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <FormError message={apiError ?? undefined} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="businessName" required>
            Business Name
          </Label>
          <Input
            id="businessName"
            placeholder="Acme Corp"
            error={!!errors.businessName}
            {...register("businessName")}
          />
          <ErrorMessage message={errors.businessName?.message} />
        </div>

        <div>
          <Label htmlFor="businessType" required>
            Business Type
          </Label>
          <select
            id="businessType"
            className={selectClassName(!!errors.businessType)}
            defaultValue=""
            {...register("businessType")}
          >
            <option value="" disabled>
              Select type
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.businessType?.message} />
        </div>

        <div>
          <Label htmlFor="businessEmail" required>
            Business Email
          </Label>
          <Input
            id="businessEmail"
            type="email"
            placeholder="contact@company.com"
            error={!!errors.businessEmail}
            {...register("businessEmail")}
          />
          <ErrorMessage message={errors.businessEmail?.message} />
        </div>

        <div>
          <Label htmlFor="phone" required>
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            error={!!errors.phone}
            {...register("phone")}
          />
          <ErrorMessage message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="country" required>
            Country
          </Label>
          <select
            id="country"
            className={selectClassName(!!errors.country)}
            defaultValue=""
            {...register("country")}
          >
            <option value="" disabled>
              Select country
            </option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.country?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="address" required>
            Address
          </Label>
          <Input
            id="address"
            placeholder="123 Main St, City, State, ZIP"
            error={!!errors.address}
            {...register("address")}
          />
          <ErrorMessage message={errors.address?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://www.company.com"
            error={!!errors.website}
            {...register("website")}
          />
          <ErrorMessage message={errors.website?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="businessDescription" required>
            Business Description
          </Label>
          <textarea
            id="businessDescription"
            rows={4}
            placeholder="Tell us about your business and what you do..."
            className={[
              "flex w-full resize-none rounded-lg border bg-background/50 px-4 py-3 text-sm text-text",
              "placeholder:text-muted/60 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary",
              errors.businessDescription
                ? "border-red-500/70"
                : "border-white/10 hover:border-white/20",
            ].join(" ")}
            {...register("businessDescription")}
          />
          <ErrorMessage message={errors.businessDescription?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label>Logo Upload</Label>
          <Controller
            name="logo"
            control={control}
            render={({ field }) => (
              <LogoUpload
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>

      <Button type="submit" fullWidth isLoading={isSubmitting} size="lg">
        Complete Setup
      </Button>
    </form>
  );
}
