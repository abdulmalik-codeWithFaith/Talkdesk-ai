export interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterPayload {
  fullName: string;
  businessName: string;
  email: string;
  phone?: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  businessName?: string;
  phone?: string;
  onboardingCompleted?: boolean;
}
