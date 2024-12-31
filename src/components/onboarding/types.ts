export interface OnboardingState {
  name: string;
  age: string;
  occupation: string;
  purpose: string;
  additionalDetails: string;
  language: string;
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  selectedPlan: string;
}

export type PurposeType = 
  | "emotional_support"
  | "career_guidance"
  | "life_struggles"
  | "casual_talk"
  | "biblical_knowledge";

export interface ValidationErrors {
  [key: string]: string | undefined;
}