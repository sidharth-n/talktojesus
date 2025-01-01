import React from "react"
import { Phone } from "lucide-react"
import { OnboardingState, ValidationErrors } from "../types"

const countryCodes = [
  {
    code: "+1",
    country: "United States",
    pattern: "[0-9]{10}",
    placeholder: "2345678900",
  },
  {
    code: "+1",
    country: "Canada",
    pattern: "[0-9]{10}",
    placeholder: "2345678900",
  },
  {
    code: "+44",
    country: "United Kingdom",
    pattern: "[0-9]{10}",
    placeholder: "7123456789",
  },
  {
    code: "+91",
    country: "India",
    pattern: "[6-9]{1}[0-9]{9}",
    placeholder: "9876543210",
  },
  {
    code: "+971",
    country: "UAE (Dubai)",
    pattern: "[0-9]{9}",
    placeholder: "501234567",
  },
  {
    code: "+971",
    country: "UAE (Abu Dhabi)",
    pattern: "[0-9]{9}",
    placeholder: "501234567",
  },
  {
    code: "+971",
    country: "UAE (Sharjah)",
    pattern: "[0-9]{9}",
    placeholder: "501234567",
  },
  {
    code: "+86",
    country: "China",
    pattern: "[0-9]{11}",
    placeholder: "13123456789",
  },
  {
    code: "+81",
    country: "Japan",
    pattern: "[0-9]{10}",
    placeholder: "9012345678",
  },
  {
    code: "+82",
    country: "South Korea",
    pattern: "[0-9]{10}",
    placeholder: "1012345678",
  },
  {
    code: "+49",
    country: "Germany",
    pattern: "[0-9]{10,11}",
    placeholder: "1512345678",
  },
  {
    code: "+33",
    country: "France",
    pattern: "[0-9]{9}",
    placeholder: "612345678",
  },
  {
    code: "+61",
    country: "Australia",
    pattern: "[0-9]{9}",
    placeholder: "412345678",
  },
  {
    code: "+55",
    country: "Brazil",
    pattern: "[0-9]{10,11}",
    placeholder: "11987654321",
  },
  {
    code: "+7",
    country: "Russia",
    pattern: "[0-9]{10}",
    placeholder: "9123456789",
  },
  {
    code: "+39",
    country: "Italy",
    pattern: "[0-9]{10}",
    placeholder: "3123456789",
  },
  {
    code: "+34",
    country: "Spain",
    pattern: "[0-9]{9}",
    placeholder: "612345678",
  },
  {
    code: "+52",
    country: "Mexico",
    pattern: "[0-9]{10}",
    placeholder: "1234567890",
  },
  {
    code: "+65",
    country: "Singapore",
    pattern: "[0-9]{8}",
    placeholder: "91234567",
  },
  {
    code: "+27",
    country: "South Africa",
    pattern: "[0-9]{9}",
    placeholder: "712345678",
  },
  {
    code: "+966",
    country: "Saudi Arabia",
    pattern: "[0-9]{9}",
    placeholder: "512345678",
  },
  {
    code: "+20",
    country: "Egypt",
    pattern: "[0-9]{10}",
    placeholder: "1001234567",
  },
  {
    code: "+31",
    country: "Netherlands",
    pattern: "[0-9]{9}",
    placeholder: "612345678",
  },
  {
    code: "+48",
    country: "Poland",
    pattern: "[0-9]{9}",
    placeholder: "512345678",
  },
  {
    code: "+46",
    country: "Sweden",
    pattern: "[0-9]{9}",
    placeholder: "701234567",
  },
  {
    code: "+47",
    country: "Norway",
    pattern: "[0-9]{8}",
    placeholder: "41234567",
  },
  {
    code: "+45",
    country: "Denmark",
    pattern: "[0-9]{8}",
    placeholder: "20123456",
  },
  {
    code: "+358",
    country: "Finland",
    pattern: "[0-9]{9}",
    placeholder: "401234567",
  },
  {
    code: "+43",
    country: "Austria",
    pattern: "[0-9]{10}",
    placeholder: "6641234567",
  },
  {
    code: "+32",
    country: "Belgium",
    pattern: "[0-9]{9}",
    placeholder: "470123456",
  },
  {
    code: "+41",
    country: "Switzerland",
    pattern: "[0-9]{9}",
    placeholder: "741234567",
  },
  {
    code: "+351",
    country: "Portugal",
    pattern: "[0-9]{9}",
    placeholder: "912345678",
  },
  {
    code: "+353",
    country: "Ireland",
    pattern: "[0-9]{9}",
    placeholder: "831234567",
  },
  {
    code: "+30",
    country: "Greece",
    pattern: "[0-9]{10}",
    placeholder: "6912345678",
  },
  {
    code: "+36",
    country: "Hungary",
    pattern: "[0-9]{9}",
    placeholder: "201234567",
  },
  {
    code: "+420",
    country: "Czech Republic",
    pattern: "[0-9]{9}",
    placeholder: "601234567",
  },
  {
    code: "+64",
    country: "New Zealand",
    pattern: "[0-9]{9}",
    placeholder: "211234567",
  },
  {
    code: "+62",
    country: "Indonesia",
    pattern: "[0-9]{10,12}",
    placeholder: "8121234567",
  },
  {
    code: "+60",
    country: "Malaysia",
    pattern: "[0-9]{9,10}",
    placeholder: "123456789",
  },
  {
    code: "+63",
    country: "Philippines",
    pattern: "[0-9]{10}",
    placeholder: "9123456789",
  },
  {
    code: "+84",
    country: "Vietnam",
    pattern: "[0-9]{9,10}",
    placeholder: "912345678",
  },
  {
    code: "+66",
    country: "Thailand",
    pattern: "[0-9]{9}",
    placeholder: "812345678",
  },
  {
    code: "+92",
    country: "Pakistan",
    pattern: "[0-9]{10}",
    placeholder: "3121234567",
  },
  {
    code: "+880",
    country: "Bangladesh",
    pattern: "[0-9]{10}",
    placeholder: "1712345678",
  },
  {
    code: "+94",
    country: "Sri Lanka",
    pattern: "[0-9]{9}",
    placeholder: "712345678",
  },
  {
    code: "+977",
    country: "Nepal",
    pattern: "[0-9]{10}",
    placeholder: "9841234567",
  },
  {
    code: "+95",
    country: "Myanmar",
    pattern: "[0-9]{9,10}",
    placeholder: "912345678",
  },
  {
    code: "+98",
    country: "Iran",
    pattern: "[0-9]{10}",
    placeholder: "9123456789",
  },
  {
    code: "+90",
    country: "Turkey",
    pattern: "[0-9]{10}",
    placeholder: "5301234567",
  },
  {
    code: "+972",
    country: "Israel",
    pattern: "[0-9]{9}",
    placeholder: "501234567",
  },
  {
    code: "+962",
    country: "Jordan",
    pattern: "[0-9]{9}",
    placeholder: "791234567",
  },
  {
    code: "+961",
    country: "Lebanon",
    pattern: "[0-9]{7,8}",
    placeholder: "71123456",
  },
] as const

interface Props {
  state: OnboardingState
  updateField: (field: keyof OnboardingState, value: any) => void
  errors: ValidationErrors
}

export default function ContactDetails({ state, updateField, errors }: Props) {
  const selectedCountry = countryCodes.find(
    c => c.code === state.phoneNumber.countryCode
  )

  const handlePhoneChange = (number: string) => {
    const cleanNumber = number.replace(/\D/g, "")

    if (cleanNumber.length > 10) {
      return // Don't update if longer than 10 digits
    }

    updateField("phoneNumber", {
      ...state.phoneNumber,
      number: cleanNumber,
    })
  }

  const handleCountryCodeChange = (code: string) => {
    updateField("phoneNumber", {
      countryCode: code,
      number: "", // Reset number when country changes
    })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">
        Enter Your Contact Details
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Mobile Number
          </label>
          <div className="flex gap-2">
            <select
              value={state.phoneNumber.countryCode}
              onChange={e => handleCountryCodeChange(e.target.value)}
              className="w-32 px-2 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {countryCodes.map(country => (
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
                onChange={e => handlePhoneChange(e.target.value)}
                className={`w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border ${
                  errors.phoneNumber ? "border-red-500" : "border-white/10"
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
  )
}
