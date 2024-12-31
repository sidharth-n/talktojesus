export const getPlanDuration = (planId: string): string => {
  const durations: Record<string, string> = {
    basic: '5 minutes',
    standard: '15 minutes',
    premium: '30 minutes'
  };
  return durations[planId] || '15 minutes';
};