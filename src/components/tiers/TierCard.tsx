// src/components/tiers/TierCard.tsx
import React, { useState } from 'react';

interface TierCardProps {
  title: string;
  description: string;
  price: string;
  perMonth: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

export const TierCard: React.FC<TierCardProps> = ({
  title,
  description,
  price,
  perMonth,
  features,
  buttonText,
  highlighted = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card expand on button click
    // Add trial logic here, e.g., open modal or redirect
    console.log(`Start trial for ${title}`);
    // Simulate modal or toast
    alert(`Starting free trial for ${title}!`); // Replace with actual interaction
  };

  return (
    <div 
      className={`group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden ${
        highlighted ? 'border-2 border-blue-500 scale-105 ring-2 ring-blue-100' : 'hover:scale-102'
      }`}
      onClick={toggleExpand}
    >
      {/* Animated expand icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={toggleExpand}
          className={`p-2 rounded-full transition-transform duration-300 ${
            isExpanded ? 'rotate-180 bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        
        {/* Animated price reveal */}
        <div 
          className={`text-center mb-6 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-32 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
          }`}
        >
          <div className="text-4xl font-bold text-gray-900 mb-2">{price}</div>
          <div className="text-gray-500 mb-4">{perMonth}</div>
          <ul className="space-y-2 text-left">
            {features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-center text-gray-700 transition-colors duration-300 group-hover:text-gray-900"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 animate-pulse"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Button with ripple effect simulation */}
        <button 
          className={`w-full relative overflow-hidden bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            buttonHovered ? 'scale-105 shadow-lg' : 'hover:scale-100'
          }`}
          onClick={handleButtonClick}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          <span className="relative z-10">{buttonText}</span>
          {buttonHovered && (
            <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
          )}
        </button>
      </div>
    </div>
  );
};