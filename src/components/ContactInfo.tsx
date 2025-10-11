import { MapPin, Clock, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Innovation Drive, Pretoria",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Mon–Fri, 08:00–17:00",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 12 345 6789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@caledoncode.co.za",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to help and answer any questions you might have.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-gradient rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 group animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="w-6 h-6 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {detail.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
