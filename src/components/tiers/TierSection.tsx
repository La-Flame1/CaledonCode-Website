// src/components/tiers/TierSection.tsx
import React from 'react';

type TierCardProps = {
  title: string;
  description: string;
  price: string;
  perMonth?: string;
  features?: string[];
  buttonText?: string;
  highlighted?: boolean;
};

export const TierCard: React.FC<TierCardProps> = ({
  title,
  description,
  price,
  perMonth,
  features = [],
  buttonText = 'Select',
  highlighted = false,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow ${highlighted ? 'bg-indigo-600 text-white md:scale-105' : 'bg-white'}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="text-3xl font-bold mb-4">
        {price} {perMonth && <span className="text-base font-medium">{perMonth}</span>}
      </div>
      <ul className="mb-4 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-sm">
            {f}
          </li>
        ))}
      </ul>
      <button className={`px-4 py-2 rounded ${highlighted ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'}`}>
        {buttonText}
      </button>
    </div>
  );
};

export const TierSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <TierCard
        title="Startup"
        description="For emerging businesses—includes website, brand kit, and basic SEO."
        price="$19"
        perMonth="per month"
        features={[
          "Custom domains",
          "Edge content delivery",
          "Advanced analytics",
          "Quarterly workshops",
          "Single sign-on (SSO)",
          "Priority phone support",
        ]}
        buttonText="Start free trial"
      />
      <TierCard
        title="Elevate"
        description="Intermediate option—interactive design, dynamic banners, and enhanced content depth."
        price="$49"
        perMonth="per month"
        features={[
          "Custom domains",
          "Edge content delivery",
          "Advanced analytics",
          "Quarterly workshops",
          "Single sign-on (SSO)",
          "Priority phone support",
        ]}
        buttonText="Start free trial"
        highlighted={true}
      />
      <TierCard
        title="Excel"
        description="Premium tier—advanced SEO integration, full interactivity, and ongoing support."
        price="$99"
        perMonth="per month"
        features={[
          "Custom domains",
          "Edge content delivery",
          "Advanced analytics",
          "Quarterly workshops",
          "Single sign-on (SSO)",
          "Priority phone support",
        ]}
        buttonText="Start free trial"
      />
    </div>
  );
};