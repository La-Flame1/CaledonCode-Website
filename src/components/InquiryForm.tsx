import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const InquiryForm = () => {
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    console.log("Inquiry form submitted:", data);
    toast.success("Your inquiry has been sent! We'll respond within 24 hours.");
    form.reset();
  };

  return (
    <section className="relative overflow-hidden py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-primary/10 animate-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)] animate-float" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--foreground)/0.05),transparent_50%)] animate-float-delayed" />
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 transition-transform">
            Have a Question?
          </h2>
          <p className="text-lg text-muted-foreground">
            Send us a message and we'll get back to you as soon as possible.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] animate-gradient rounded-full" />
        </div>

        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 p-8 md:p-12 animate-in fade-in zoom-in delay-300 hover:animate-glow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your inquiry..."
                        className="min-h-[150px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-[var(--shadow-button)] px-12 transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-glow"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
