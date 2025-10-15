import { ArrowRight, BarChart, Layers, Rocket } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { animationDuration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tiers = [
  {
    name: "Startup",
    target: "For Emerging Businesses",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    description:
      "Perfect for new ventures looking to establish their digital presence with essential tools and professional branding.",
    features: [
      "Custom website design & development",
      "Complete brand kit with logo",
      "Basic SEO optimization",
      "Mobile-responsive design",
      "Contact form integration",
    ],
    featured: false,
  },
  {
    name: "Elevate",
    target: "For Growing Companies",
    icon: <Layers className="h-6 w-6 text-primary" />,
    description:
      "Ideal for businesses ready to scale with interactive features, enhanced content, and deeper user engagement.",
    features: [
      "Interactive design elements",
      "Dynamic banners & animations",
      "Enhanced content depth",
      "Advanced SEO strategies",
      "Analytics integration",
      "Social media integration",
    ],
    featured: true,
  },
  {
    name: "Excel",
    target: "For Established Enterprises",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    description:
      "Comprehensive solution for organizations requiring advanced features, full interactivity, and continuous support.",
    features: [
      "Advanced SEO integration",
      "Full site interactivity",
      "Custom functionality",
      "Ongoing support & maintenance",
      "Performance optimization",
      "Priority technical support",
    ],
    featured: false,
  },
];

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container py-24 md:py-32 lg:py-40 relative flex items-center justify-center">
          <motion.div
            className="max-w-4xl text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Web. Code. Design. Deliver.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              Our Services — Building Digital Solutions That Matter
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
            >
              Empowering businesses with innovative web solutions. We&apos;re a
              collaborative community of developers, designers, and QA
              professionals focused on solving real-world problems and driving
              digital growth.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Growth-Focused Tiers Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container flex items-center justify-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Solutions Tailored to Your Growth
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Choose the package that fits your business stage and ambitions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-6xl">
              {tiers.map((tier) => (
                <TierCard tier={tier} key={tier.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center space-y-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Ready to transform your digital presence? Our team is here to
                bring your vision to life with creativity, expertise, and
                dedication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 h-12 shadow-lg hover:shadow-xl duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-semibold rounded-full px-8 h-12 bg-transparent duration-300"
              >
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

type TierCard = {
  tier: {
    name: string;
    target: string;
    icon: JSX.Element;
    description: string;
    features: string[];
    featured: boolean;
  };
};

function TierCard({ tier }: TierCard) {
  return (
    <motion.div
      key={tier.name}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { animationDuration: 0.5 },
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card
        className={`h-full border-2 ${
          tier.featured ? "border-primary shadow-xl" : "border-border"
        } hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
      >
        {tier.featured && (
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Popular
          </div>
        )}
        <CardHeader className="space-y-4 pb-8">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            {tier.icon}
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
              {tier.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-medium">
              {tier.target}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardDescription className="text-muted-foreground leading-relaxed">
            {tier.description}
          </CardDescription>

          <ul className="space-y-3">
            {tier.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-card-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full font-semibold rounded-full shadow-md hover:shadow-lg duration-300 ${
              tier.featured
                ? "bg-primary hover:bg-primary/90 text-white"
                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            }`}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default Services;
