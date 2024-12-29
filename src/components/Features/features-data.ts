import { Mic, Shield, Globe, Clock, Calendar } from 'lucide-react';
import type { FeatureItem } from './types';

export const featuresData: FeatureItem[] = [
  {
    icon: Mic,
    title: "AI-Powered Voice",
    description: "Hear a calming, empathetic voice carefully trained to sound like Jesus."
  },
  {
    icon: Shield,
    title: "Fully Secure & Private",
    description: "We do not store or record your personal details or call logs—your conversation remains between you and AI Jesus."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Receive comfort in several global languages supported by our AI."
  },
  {
    icon: Clock,
    title: "Instant Call Connection",
    description: "No wait times. Get connected as soon as you are ready."
  },
  {
    icon: Calendar,
    title: "Flexible Call Duration",
    description: "Choose how long you wish to speak. Pay only for the time you need."
  }
];