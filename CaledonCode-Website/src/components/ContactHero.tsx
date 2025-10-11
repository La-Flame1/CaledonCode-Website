const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 py-32 px-4 animate-gradient mt-20">
      {/* Animated gradient orbs - using brand blue */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)] animate-float" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--foreground)/0.05),transparent_50%)] animate-float-delayed" />
      
      {/* Floating decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform">
          Stay Connected with Us
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Whether joining our community, reaching out to our team, or inquiring about services.
        </p>
        
        {/* Animated line accent - brand blue gradient */}
        <div className="mt-8 w-32 h-1 mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-gradient rounded-full" />
      </div>
    </section>
  );
};

export default ContactHero;
