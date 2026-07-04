export interface OnboardingPayload {
  businessName: string;
  businessType: string;
  businessEmail: string;
  phone: string;
  country: string;
  address: string;
  website?: string;
  businessDescription: string;
  logo?: File | null;
}

export interface OnboardingResponse {
  success: boolean;
  message: string;
}
