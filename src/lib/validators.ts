import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .min(2, "Full name must be at least 2 characters"),
    businessName: z
      .string()
      .min(1, "Business name is required")
      .min(2, "Business name must be at least 2 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[+]?[\d\s()-]{7,20}$/.test(val),
        "Please enter a valid phone number"
      ),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase, and a number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const onboardingSchema = z.object({
  businessName: z
    .string()
    .min(1, "Business name is required")
    .min(2, "Business name must be at least 2 characters"),
  businessType: z.string().min(1, "Please select a business type"),
  businessEmail: z
    .string()
    .min(1, "Business email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => /^[+]?[\d\s()-]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  country: z.string().min(1, "Please select a country"),
  address: z
    .string()
    .min(1, "Address is required")
    .min(5, "Please enter a complete address"),
  website: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^https?:\/\/.+\..+/.test(val),
      "Please enter a valid URL (include http:// or https://)"
    ),
  businessDescription: z
    .string()
    .min(1, "Business description is required")
    .min(20, "Description must be at least 20 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type OnboardingFormData = z.infer<typeof onboardingSchema>;
