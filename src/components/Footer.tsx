// src/components/Footer.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const address = "123 Innovation Drive, Pretoria, South Africa";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="w-full bg-gradient-to-b from-[#E6E9EE] to-[#F5F1EB] border-t border-gray-200 py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Columns */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 animate-fade-in">
              Caledon Code
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-sm leading-relaxed">
              Empowering businesses with scalable digital solutions. From startups to enterprises, we craft growth-focused web experiences.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 animate-fade-in">
              Quick Links
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-600 text-sm md:text-base">
              <li>
                <a href="/tiers" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 animate-fade-in">
              Services
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-600 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  Brand Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:animate-pulse"></span>
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 md:space-y-3">
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4 animate-fade-in">
              Get in Touch
            </h4>
            <div className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <div className="flex items-center group">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 flex-shrink-0" />
                <a 
                  href="mailto:hello@caledoncode.com" 
                  className="hover:text-primary transition-colors duration-300 underline decoration-1 underline-offset-4 group-hover:no-underline"
                  title="Send an email"
                >
                  hello@caledoncode.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 flex-shrink-0" />
                <a 
                  href="tel:+27123456789" 
                  className="hover:text-primary transition-colors duration-300 underline decoration-1 underline-offset-4 group-hover:no-underline"
                  title="Make a call"
                >
                  +27 12 345 6789
                </a>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 underline decoration-1 underline-offset-4 group-hover:no-underline break-words max-w-xs"
                  title="Open in Google Maps"
                >
                  {address}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-200 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; 2025 Caledon Code. All rights reserved.</p>
          <div className="flex space-x-4 md:space-x-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;