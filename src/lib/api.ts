import axios, { type AxiosError } from "axios";
import type {
  AuthResponse,
  LoginPayload,
  OnboardingPayload,
  OnboardingResponse,
  RegisterPayload,
  User,
} from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/** Attach auth token from storage for authenticated requests. */
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("auth_token") ??
      sessionStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return (
      axiosError.response?.data?.message ??
      axiosError.message ??
      "An unexpected error occurred"
    );
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}

/** Authenticate user with email and password. */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", payload);
  return data;
}

/** Register a new user account. */
export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/register", payload);
  return data;
}

/** End the current user session. */
export async function logout(): Promise<void> {
  await api.post("/auth/logout");
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token");
    sessionStorage.removeItem("auth_token");
  }
}

/** Fetch the authenticated user's profile. */
export async function getProfile(): Promise<User> {
  const { data } = await api.get<User>("/auth/profile");
  return data;
}

/** Submit business onboarding details. */
export async function completeOnboarding(
  payload: OnboardingPayload
): Promise<OnboardingResponse> {
  const formData = new FormData();
  formData.append("businessName", payload.businessName);
  formData.append("businessType", payload.businessType);
  formData.append("businessEmail", payload.businessEmail);
  formData.append("phone", payload.phone);
  formData.append("country", payload.country);
  formData.append("address", payload.address);
  if (payload.website) formData.append("website", payload.website);
  formData.append("businessDescription", payload.businessDescription);
  if (payload.logo) formData.append("logo", payload.logo);

  const { data } = await api.post<OnboardingResponse>(
    "/onboarding/complete",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data;
}

export default api;
