

// ServiceCard.tsx (Updated to handle selection state)
import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  onButtonClick: () => void;
  isSelected?: boolean; // New prop to indicate if this service is selected
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  buttonText,
  buttonColor,
  onButtonClick,
  isSelected = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
        isSelected ? 'ring-2 ring-blue-500 transform scale-105' : ''
      }`}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-center text-gray-700"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${buttonColor} ${
          isSelected ? 'opacity-90' : ''
        }`}
        onClick={onButtonClick}
      >
        {isSelected ? 'Selected' : buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;