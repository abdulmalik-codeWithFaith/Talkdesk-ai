export interface OnboardingPayload {
  businessName: string;
  businessType: string;
  businessEmail: string;
  phone: string;
  country: string;
  address: string;
  website?: string;
  businessDescription: string;
}

export interface OnboardingResponse {
  success: boolean;
  message: string;
}
