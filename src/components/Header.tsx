import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Tiers", to: "/tiers" },
  { name: "Services", to: "/services" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
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

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 mt-3 sm:mt-0 text-sm font-medium">
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
      </div>
    </header>
  );
};

export default Header;
