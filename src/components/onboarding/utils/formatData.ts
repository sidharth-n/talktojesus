import { OnboardingState } from '../types';

const purposeLabels: Record<string, string> = {
  emotional_support: 'Emotional Support',
  career_guidance: 'Career Guidance',
  life_struggles: 'Life Struggles',
  casual_talk: 'Casual Talk',
  biblical_knowledge: 'Biblical Knowledge'
};

const languageLabels: Record<string, string> = {
  en: 'English',
  hi: 'Hindi'
};

const planLabels: Record<string, { duration: string; price: string }> = {
  basic: { duration: '15 minutes', price: '$9.99' },
  standard: { duration: '30 minutes', price: '$19.99' },
  premium: { duration: '60 minutes', price: '$34.99' }
};

export function formatOnboardingData(data: OnboardingState): string {
  const planDetails = planLabels[data.selectedPlan] || { duration: 'Unknown', price: 'Unknown' };
  
  const formattedData = {
    "👤 Personal Information": {
      "Name": data.name,
      "Age": data.age,
      "Occupation": data.occupation
    },
    "🙏 Conversation Details": {
      "Purpose": purposeLabels[data.purpose] || data.purpose,
      "Additional Details": data.additionalDetails
    },
    "🌐 Communication": {
      "Language": languageLabels[data.language] || data.language,
      "Phone": `${data.phoneNumber.countryCode} ${data.phoneNumber.number}`
    },
    "⏱️ Selected Plan": {
      "Duration": planDetails.duration,
      "Price": planDetails.price
    }
  };

  return JSON.stringify(formattedData, null, 2);
}