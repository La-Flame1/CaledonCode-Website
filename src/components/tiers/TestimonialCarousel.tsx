import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  clientName: string;
  company: string;
  rating: number; 
  keyPoints: string[];
  percentageIncrease: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Alice Johnson",
    company: "TechStart Inc.",
    rating: 5,
    keyPoints: ["Improved user engagement", "Streamlined workflows"],
    percentageIncrease: "45% increase in conversions",
    avatar: "https://avatar.iran.liara.run/public/91", 
  },
  {
    id: 2,
    clientName: "Bob Smith",
    company: "GrowthHub Ltd.",
    rating: 4,
    keyPoints: ["Enhanced analytics", "Better team collaboration"],
    percentageIncrease: "28% growth in monthly revenue",
    avatar: "https://avatar.iran.liara.run/public/24",
  },
  {
    id: 3,
    clientName: "Carol Davis",
    company: "InnoVentures",
    rating: 5,
    keyPoints: ["Custom branding success", "Seamless integration"],
    percentageIncrease: "60% boost in customer retention",
    avatar: "https://avatar.iran.liara.run/public/13",
  },
  {
    id: 4,
    clientName: "David Wilson",
    company: "ScaleUp Solutions",
    rating: 5,
    keyPoints: ["Advanced SEO tools", "Priority support excellence"],
    percentageIncrease: "35% traffic surge",
    avatar: "https://avatar.iran.liara.run/public/42",
  },
  {
    id: 5,
    clientName: "Eva Martinez",
    company: "DigitalForge",
    rating: 4,
    keyPoints: ["Responsive designs", "Quarterly workshops valuable"],
    percentageIncrease: "22% efficiency improvement",
    avatar: "https://avatar.iran.liara.run/public/60",
  },
  {
    id: 6,
    clientName: "Frank Lee",
    company: "BrandBoost Co.",
    rating: 5,
    keyPoints: ["Tailored solutions", "SSO setup easy"],
    percentageIncrease: "50% loyalty program uptake",
    avatar: "https://avatar.iran.liara.run/public/38",
  },
  {
    id: 7,
    clientName: "Grace Kim",
    company: "MarketMasters",
    rating: 5,
    keyPoints: ["Edge delivery speed", "Analytics insights"],
    percentageIncrease: "40% sales acceleration",
    avatar: "https://avatar.iran.liara.run/public/83",
  },
  {
    id: 8,
    clientName: "Henry Patel",
    company: "VenturePeak",
    rating: 4,
    keyPoints: ["Custom domains flexible", "Support responsive"],
    percentageIncrease: "25% user acquisition",
    avatar: "https://avatar.iran.liara.run/public/37",
  },
  {
    id: 9,
    clientName: "Ivy Chen",
    company: "InnovateLab",
    rating: 5,
    keyPoints: ["Workshops transformative", "Scalable features"],
    percentageIncrease: "55% ROI improvement",
    avatar: "https://avatar.iran.liara.run/public/90",
  },
  {
    id: 10,
    clientName: "Jack Thompson",
    company: "EliteStrategies",
    rating: 5,
    keyPoints: ["Full branding kit", "Advanced analytics"],
    percentageIncrease: "38% engagement rise",
    avatar: "https://avatar.iran.liara.run/public/30",
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, visibleCards]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));

  const itemWidth = 100 / visibleCards;

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * itemWidth}%)` 
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`flex-shrink-0 px-2 md:px-4 w-[${itemWidth}%]`}
            style={{ width: `${itemWidth}%` }}
            onMouseEnter={() => handleMouseEnter(idx)}
          >
            <div
              className={`bg-white rounded-2xl shadow-lg p-8 text-center h-full w-full ${
                hoveredIndex === idx ? "ring-2 ring-blue-200" : ""
              }`}
            >
              {/* Larger Avatar */}
              <img
                src={testimonial.avatar}
                alt={testimonial.clientName}
                className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg border-4 border-[#3774B6] object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {testimonial.clientName}
              </h3>
              <p className="text-gray-600 mb-4">{testimonial.company}</p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <ul className="text-left mb-4 space-y-1">
                {testimonial.keyPoints.map((point, keyIdx) => (
                  <li key={keyIdx} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 animate-pulse"></span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-[#3774B6] font-semibold text-lg">
                "{testimonial.percentageIncrease}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            aria-label={
              idx === currentIndex
                ? "Current testimonial"
                : `Go to testimonial ${idx + 1}`
            }
            title={
              idx === currentIndex
                ? "Current testimonial"
                : `Go to testimonial ${idx + 1}`
            }
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-[#3774B6] shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
