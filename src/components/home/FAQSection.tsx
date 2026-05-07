import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What insurance do I need to drive in Thailand?",
    answer: "At minimum, you need Third Party Bodily Injury (TPBI) insurance, which is mandatory under Thai law. However, we recommend Comprehensive coverage for complete protection including damage to your own vehicle, theft, and fire.",
  },
  {
    question: "How long does it take to get my insurance certificate?",
    answer: "With the ThaiDriveSecure app, you can get your digital insurance certificate instantly after completing the application. For physical certificates, allow 1-2 business days for processing and delivery.",
  },
  {
    question: "Is my Malaysian car insurance valid in Thailand?",
    answer: "No, Malaysian car insurance does not cover you in Thailand. You need to purchase separate Thai insurance or an add-on cross-border coverage specifically designed for travel to Thailand.",
  },
  {
    question: "What documents do I need to cross the border?",
    answer: "You'll need your passport, original vehicle registration (JPJ), valid driving license, vehicle roadworthiness certificate, and Thai insurance certificate. We recommend also having an International Driving Permit.",
  },
  {
    question: "How do I make a claim if I have an accident in Thailand?",
    answer: "First, ensure everyone's safety and contact local emergency services if needed. Then call our 24/7 hotline for immediate assistance. We'll guide you through the process, including obtaining a Thai police report which is required for all claims.",
  },
  {
    question: "Can I extend my coverage while in Thailand?",
    answer: "Yes! You can easily extend your coverage through the ThaiDriveSecure app or by contacting our support team. We recommend extending at least 24 hours before your current policy expires.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to the most common questions about cross-border vehicle insurance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 shadow-soft px-6 data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline group">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-9 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
