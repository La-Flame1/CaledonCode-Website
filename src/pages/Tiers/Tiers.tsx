import { TestimonialCarousel } from "@/components/tiers/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Scroll } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const tiers = [
  {
    title: "Startup",
    monthlyPrice: "R499",
    yearlyPrice: "R5,489",
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
    monthlyPrice: "R999",
    yearlyPrice: "R10,989",
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
    monthlyPrice: "R1,999",
    yearlyPrice: "R21,989",
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

const comparisonFeatures = [
  {
    feature: "Website Pages",
    startup: "Up to 5",
    elevate: "Up to 10",
    excel: "Unlimited",
  },
  {
    feature: "SEO Optimization",
    startup: "Basic",
    elevate: "Enhanced",
    excel: "Advanced",
  },
  {
    feature: "Support Response",
    startup: "48 hours",
    elevate: "24 hours",
    excel: "Priority (12h)",
  },
  {
    feature: "Monthly Updates",
    startup: "1 update",
    elevate: "2 updates",
    excel: "Unlimited",
  },
  { feature: "Custom Features", startup: " - ", elevate: "Limited", excel: "Unlimited" },
];

const Tiers = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  const getPrice = (tier: typeof tiers[0]) => {
    return billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
  };

  const getPriceSuffix = () => {
    return billingCycle === 'monthly' ? '/mo' : '/yr';
  };

  const isYearly = billingCycle === 'yearly';

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E6E9EE] to-white py-32 px-4 animate-gradient mt-20">
        {/* Animated gradient orbs - using brand blue */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)] animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--foreground)/0.05),transparent_50%)] animate-float-delayed" />
        
        {/* Floating decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform">
            Growth-Focused Tiers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Explore Caledon Code's three-tier digital solutions, designed for scalability and brand evolution.
          </p>
          
          {/* Animated line accent - brand blue gradient */}
          <div className="mt-8 w-32 h-1 mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-gradient rounded-full" />
        </div>
      </section>

      {/* ===== TIERS SECTION ===== */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each package includes a "Learn More" button and details describing
              target users and benefits.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-md flex space-x-1">
              <Button
                variant={isYearly ? "ghost" : "default"}
                size="sm"
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${isYearly ? 'text-gray-500' : 'bg-primary text-primary-foreground shadow-sm'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </Button>
              <Button
                variant={isYearly ? "default" : "ghost"}
                size="sm"
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${!isYearly ? 'text-gray-500' : 'bg-primary text-primary-foreground shadow-sm'}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
            
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col justify-between border border-gray-100 group overflow-hidden"
              >
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3774B6]/0 via-[#3774B6]/5 to-[#3774B6]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-1 mb-4 bg-[#3774B6] rounded-full mx-auto"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {tier.title}
                  </h3>
                  <p className={`text-2xl font-semibold text-center mb-4 transition-colors ${isYearly ? 'text-[#3774B6]' : 'text-[#3774B6]'}`}>
                    {getPrice(tier)} <span className="text-lg">{getPriceSuffix()}</span>
                  </p>
                  {isYearly && (
                    <div className="text-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Get 1 Month Free
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600 text-center mb-6">
                    {tier.description}
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-[#3774B6] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 text-center">
                  <Button className="font-semibold rounded-md shadow-md hover:shadow-lg duration-300 bg-primary hover:bg-primary/90 text-white group-hover:scale-105 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Compare Our Tiers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what's included in each package at a glance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-[#3774B6] border-2">
              <thead className="bg-[#3774B6] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold border border-[#3774B6] border-b-2">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold border border-[#3774B6] border-b-2">
                    Startup
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border border-[#3774B6] border-b-2">
                    Elevate
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border border-[#3774B6] border-b-2">Excel</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900 border border-[#3774B6]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 border border-[#3774B6]">
                      {row.startup}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 border border-[#3774B6]">
                      {row.elevate}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 border border-[#3774B6]">
                      {row.excel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-[#E6E9EE] to-white"
      >
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
        <ScrollToTop />
      </section>
      <Footer />
    </div>
  );
};

export default Tiers;