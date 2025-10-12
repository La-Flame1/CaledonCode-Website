// src/pages/Tiers/Tiers.tsx
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import React from "react";
import { TestimonialCarousel } from "@/components/tiers/TestimonialCarousel";

// Inside your Tiers.tsx (replace the tiers array + mapping block)

const tiers = [
  {
    title: "Startup",
    price: "R499 /mo",
    description:
      "For emerging businesses — includes website, brand kit, and basic SEO.",
    features: [
      "Website design and setup",
      "Basic SEO optimization",
      "Custom brand kit",
      "Foundational digital presence",
    ],
  },
  {
    title: "Elevate",
    price: "R999 /mo",
    description:
      "Intermediate option — interactive design, dynamic banners, and enhanced content depth.",
    features: [
      "Interactive and responsive web design",
      "Dynamic banner creation",
      "Enhanced content strategy",
      "Engagement-driven UX design",
    ],
  },
  {
    title: "Excel",
    price: "R1999 /mo",
    description:
      "Premium tier — advanced SEO integration, full interactivity, and ongoing support.",
    features: [
      "Advanced SEO integration",
      "Fully interactive web experience",
      "Continuous technical and design support",
      "Priority updates and maintenance",
    ],
  },
];

const Tiers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Caledon Code
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                to="/tiers"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
              >
                Pricing Tiers
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Header />

      {/* ===== HERO ===== */}
      <section className="text-center py-20 bg-gradient-to-b from-[#E6E9EE] to-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Growth-Focused Tiers
        </h1>
        <p className="text-lg text-black-100 max-w-2xl mx-auto">
          Explore Caledon Code’s three-tier digital solutions, designed for
          scalability and brand evolution.
        </p>
      </section>

      {/* ===== TIERS SECTION ===== */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each package includes a “Learn More” button and details describing target users and benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col justify-between border border-gray-100"
              >
                <div>
                  <div className="w-16 h-1 mb-4 bg-[#3774B6] rounded-full mx-auto"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {tier.title}
                  </h3>
                  <p className="text-[#3774B6] text-2xl font-semibold text-center mb-4">
                    {tier.price}
                  </p>
                  <p className="text-gray-600 text-center mb-6">
                    {tier.description}
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-[#3774B6] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <button className="px-6 py-3 bg-[#3774B6] hover:bg-[#2f639e] text-white rounded-lg font-semibold transition-transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#E6E9EE] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients who achieved measurable growth
              with Caledon Code.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 bg-[#F5F1EB] text-center text-gray-600 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} CaledonCode. All rights reserved.
      </footer>

      {/* ===== ANIMATION ===== */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out both;
        }
      `}</style>
    </div>
  );
};

export default Tiers;
