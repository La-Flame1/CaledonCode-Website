import { TestimonialCarousel } from "@/components/tiers/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  { feature: "Custom Features", startup: "✗", elevate: "Limited", excel: "✓" },
];

const Tiers = () => {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="text-center py-16 mt-20 px-4 bg-gradient-to-b from-[#E6E9EE] to-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Growth-Focused Tiers
        </h1>
        <p className="text-lg text-black-100 max-w-2xl mx-auto">
          Explore Caledon Code's three-tier digital solutions, designed for
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
              Each package includes a "Learn More" button and details describing
              target users and benefits.
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
                  <Button className="font-semibold rounded-md shadow-md hover:shadow-lg duration-300 bg-primary hover:bg-primary/90 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
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
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-[#3774B6] text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Startup
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    Elevate
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">Excel</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">
                      {row.startup}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">
                      {row.elevate}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">
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
      </section>
    </div>
  );
};

export default Tiers;
