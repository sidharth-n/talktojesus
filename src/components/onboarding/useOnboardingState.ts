import { useState, useEffect } from 'react';
import { OnboardingState, ValidationErrors } from './types';

const STORAGE_KEY = 'taktojesus_onboarding';

const initialState: OnboardingState = {
  name: '',
  age: '',
  occupation: '',
  purpose: '',
  additionalDetails: '',
  language: 'en', // Default to English
  phoneNumber: {
    countryCode: '+91',
    number: '',
  },
  selectedPlan: 'standard', // Default to Essential Connect ($9.99) plan
};

export function useOnboardingState() {
  const [state, setState] = useState<OnboardingState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateField = (field: keyof OnboardingState, value: any) => {
    setState(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validatePhoneNumber = (countryCode: string, number: string): string | undefined => {
    if (!number) return 'Phone number is required';
    
    if (countryCode === '+91') {
      if (!/^[6-9]\d{9}$/.test(number)) {
        return 'Invalid Indian mobile number. Must start with 6-9 and be 10 digits';
      }
    } else if (countryCode === '+1') {
      if (!/^\d{10}$/.test(number)) {
        return 'Invalid US phone number. Must be 10 digits';
      }
    }
    return undefined;
  };

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    switch (step) {
      case 0: // Privacy Notice
        return true; // No validation needed

      case 1: // Personal Details
        if (!state.name) newErrors.name = 'Name is required';
        if (!state.age) newErrors.age = 'Age is required';
        else if (parseInt(state.age) < 13) newErrors.age = 'Must be at least 13 years old';
        else if (parseInt(state.age) > 120) newErrors.age = 'Please enter a valid age';
        if (!state.occupation) newErrors.occupation = 'Occupation is required';
        break;

      case 2: // Purpose
        if (!state.purpose) newErrors.purpose = 'Please select a purpose';
        break;

      case 3: // Additional Details
        if (!state.additionalDetails) newErrors.additionalDetails = 'Please provide more details';
        break;

      case 4: // Language
        if (!state.language) newErrors.language = 'Please select a language';
        break;

      case 5: // Contact
        const phoneError = validatePhoneNumber(state.phoneNumber.countryCode, state.phoneNumber.number);
        if (phoneError) {
          newErrors.phoneNumber = phoneError;
        }
        break;

      case 6: // Plan
        if (!state.selectedPlan) newErrors.selectedPlan = 'Please select a plan';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    state,
    errors,
    updateField,
    validateStep,
  };
}