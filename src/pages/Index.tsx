import ContactForms from "@/components/ContactForms";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import InquiryForm from "@/components/InquiryForm";

const Index = () => {
  return (
    <div>
      <ContactHero />
      <ContactForms />
      <InquiryForm />
      <ContactInfo />
    </div>
  );
};

export default Index;
