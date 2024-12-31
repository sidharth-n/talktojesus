import React from 'react';
import { Phone } from 'lucide-react';
import { OnboardingState, ValidationErrors } from '../types';

const countryCodes = [
  { code: '+91', country: 'India', pattern: '[6-9]{1}[0-9]{9}', placeholder: '9876543210' },
  { code: '+1', country: 'United States', pattern: '[0-9]{10}', placeholder: '2345678900' },
] as const;

interface Props {
  state: OnboardingState;
  updateField: (field: keyof OnboardingState, value: any) => void;
  errors: ValidationErrors;
}

export default function ContactDetails({ state, updateField, errors }: Props) {
  const selectedCountry = countryCodes.find(c => c.code === state.phoneNumber.countryCode);

  const handlePhoneChange = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    
    if (cleanNumber.length > 10) {
      return; // Don't update if longer than 10 digits
    }

    updateField('phoneNumber', {
      ...state.phoneNumber,
      number: cleanNumber,
    });
  };

  const handleCountryCodeChange = (code: string) => {
    updateField('phoneNumber', {
      countryCode: code,
      number: '', // Reset number when country changes
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">Enter Your Contact Details</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Mobile Number
          </label>
          <div className="flex gap-2">
            <select
              value={state.phoneNumber.countryCode}
              onChange={(e) => handleCountryCodeChange(e.target.value)}
              className="w-32 px-2 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code} {country.country}
                </option>
              ))}
            </select>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={state.phoneNumber.number}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border ${
                  errors.phoneNumber ? 'border-red-500' : 'border-white/10'
                } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                placeholder={selectedCountry?.placeholder}
                pattern={selectedCountry?.pattern}
                required
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="mt-2 text-sm text-red-400">{errors.phoneNumber}</p>
          )}
          <p className="mt-2 text-sm text-gray-400">
            You'll receive the call on this number
          </p>
        </div>
      </div>
    </div>
  );
}