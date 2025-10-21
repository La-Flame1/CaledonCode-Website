import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "Tiers", to: "/tiers" },
  { name: "Services", to: "/services" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand + Tagline */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-2xl font-bold">
              <span className="text-foreground">&lt;</span>
              <span className="text-primary">&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">
                CaledonCode
              </span>
              {/* Tagline directly under logo */}
              <p className="text-xs text-muted-foreground mt-0.5">
                Web. Code. Design. Deliver.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={`transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button - Visible on mobile, inline right */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 space-y-4 bg-background border-t border-border">
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={`block transition-colors hover:text-primary py-2 text-sm font-medium ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground"
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;