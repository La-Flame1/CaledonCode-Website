import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactForms from "@/components/ContactForms";
import InquiryForm from "@/components/InquiryForm";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
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
              {/* Add more nav links as needed */}
            </div>
          </div>
        </div>
      </nav>

      <Header />
      <ContactHero />
      <ContactForms />
      <InquiryForm />
      <ContactInfo />
    </div>
  );
};

export default Index;