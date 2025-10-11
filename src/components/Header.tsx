const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Logo with angled brackets */}
          <div className="flex items-center gap-1 text-2xl font-bold">
            <span className="text-foreground">&lt;</span>
            <span className="text-primary">&gt;</span>
          </div>
          <span className="text-xl font-bold tracking-tight">CaledonCode</span>
        </div>
        {/* Tagline */}
        <p className="text-xs text-muted-foreground mt-1 ml-14">Web. Code. Design. Deliver.</p>
      </div>
    </header>
  );
};

export default Header;
