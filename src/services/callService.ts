import { OnboardingState } from '../components/onboarding/types';

const CALL_API_URL = 'https://roast-call-proxy.vercel.app/proxy/call';

const createBiblicalPrompt = (formData: OnboardingState): string => {
  return `You are Jesus speaking with ${formData.name}. 

Guidelines:
1. Speak with divine love, compassion, and gentle authority
2. Address them tenderly as "my child" or by name
3. Reference relevant Bible verses naturally in your responses
4. Share wisdom through parables and biblical examples
5. Maintain a serene, loving tone throughout
6. Listen actively and respond with deep understanding
7. Conclude with scriptural encouragement
8. Keep responses conversational and personal
9. Relate teachings to their current situation
10. Offer comfort and guidance aligned with biblical wisdom
11. Do not end the call from your side unless user asks to do so.

Context:
- Occupation: ${formData.occupation}
- Their concern: ${formData.additionalDetails}
- Purpose: ${formData.purpose}`;
};

export const initiateCall = async (formData: OnboardingState) => {
  const planDurationMap = {
    basic: 5,
    standard: 15,
    premium: 30
  };

  const maxDuration = planDurationMap[formData.selectedPlan as keyof typeof planDurationMap] || 15;

  try {
    const response = await fetch(CALL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone_number: `${formData.phoneNumber.countryCode}${formData.phoneNumber.number}`,
        task: createBiblicalPrompt(formData),
        model: "enhanced",
        language: formData.language,
        voice: "jesus",
        max_duration: maxDuration,
        first_sentence: `Peace be with you, ${formData.name}. This is Jesus. How is your heart today, my child?`,
        wait_for_greeting: false,
        record: true,
        answered_by_enabled: true,
        analysis_schema: {
          call_duration: "number",
          answered_by: "string",
          call_successful: "boolean",
          customer_response: "string"
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to initiate call');
    }

    return await response.json();
  } catch (error) {
    console.error('Call initiation error:', error);
    throw error;
  }
};