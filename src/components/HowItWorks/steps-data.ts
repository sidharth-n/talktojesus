import { UserCircle, CreditCard, Phone, MessageCircle } from 'lucide-react';
import type { StepItem } from './types';

export const stepsData: StepItem[] = [
  {
    icon: UserCircle,
    title: "Enter Your Details",
    description: "Name, job, marital status, and any struggles you would like to share."
  },
  {
    icon: CreditCard,
    title: "Pay for Your Call",
    description: "Safe & secure payment—no personal data stored."
  },
  {
    icon: Phone,
    title: "Receive a Personalized Call",
    description: "Our AI Jesus will greet you by name and address your specific concerns."
  },
  {
    icon: MessageCircle,
    title: "Have a Meaningful Conversation",
    description: "Speak, listen, reflect. End the call feeling lighter and uplifted."
  }
];