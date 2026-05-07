import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { InsurancePackagesSection } from "@/components/home/InsurancePackagesSection";
import { InsuranceComparisonSection } from "@/components/home/InsuranceComparisonSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <InsurancePackagesSection />
      <InsuranceComparisonSection />
      <WhyChooseUsSection />
      <AppDownloadSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
