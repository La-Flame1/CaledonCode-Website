import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactForms from "@/components/ContactForms";
import InquiryForm from "@/components/InquiryForm";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactForms />
      <InquiryForm />
      <ContactInfo />
    </div>
  );
};

export default Index;
