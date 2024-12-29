export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}