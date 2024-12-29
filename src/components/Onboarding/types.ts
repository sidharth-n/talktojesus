export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
}

export interface UserInfo {
  name: string;
  age: number;
  occupation: string;
  selectedTopics: string[];
  details: Record<string, string>;
  preferredLanguage?: string;
  preferredTime?: string;
}

export interface Topic {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export type OnboardingStepProps = {
  onNext: () => void;
  onBack: () => void;
  updateUserInfo: (info: Partial<UserInfo>) => void;
  userInfo: UserInfo;
}