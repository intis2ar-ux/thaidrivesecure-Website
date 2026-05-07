import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Do I need insurance before reaching the border?",
    answer: "Yes, it's highly recommended to arrange your Thai vehicle insurance before arriving at the border. While some checkpoints may have insurance counters, having your coverage ready in advance ensures a smoother crossing and avoids potential delays. Our staff can process your insurance before your trip.",
  },
  {
    question: "Can I use Malaysian insurance in Thailand?",
    answer: "No, Malaysian vehicle insurance does not provide coverage in Thailand. Thai law requires all vehicles to have at minimum Third Party Bodily Injury (TPBI / Por Ror Bor) insurance from a Thai-registered insurer. This is why you need to purchase separate Thai insurance for cross-border travel.",
  },
  {
    question: "How long does insurance processing take?",
    answer: "Processing typically takes 1-2 business days for standard applications. For urgent requests, same-day processing may be available — please contact our staff to confirm. Once processed, you can receive your policy via email (instant), courier delivery (1-3 days), or counter pickup.",
  },
  {
    question: "Can I receive documents via WhatsApp or email?",
    answer: "Yes! We can send your insurance policy documents via email as a PDF. For WhatsApp, we can send confirmation and tracking updates. The official policy documents are best sent via email for your records. Physical copies can be couriered or picked up from our office.",
  },
  {
    question: "What happens if my documents are incomplete?",
    answer: "If any documents are missing or incomplete, our staff will contact you to request the required information. Your application will be processed once all documents are received and verified. We recommend double-checking our Required Documents page before submitting your application.",
  },
  {
    question: "What is the difference between Compulsory and Voluntary insurance?",
    answer: "Compulsory insurance (Por Ror Bor / TPBI) is mandatory by Thai law and covers bodily injury to third parties. Voluntary insurance provides additional coverage including property damage to third parties, protecting you from \"duit pau\" claims. We strongly recommend getting both for complete protection.",
  },
  {
    question: "How long is the insurance valid?",
    answer: "Insurance validity varies by package. Standard coverage is typically 9 days for cars and 3 months for motorcycles. Longer coverage periods are available — please contact our staff for customized packages based on your travel duration.",
  },
  {
    question: "What should I do if I have an accident in Thailand?",
    answer: "First, ensure everyone's safety and call Thai emergency services (191 for police, 1669 for ambulance). Take photos of the accident scene and vehicles involved. Obtain a Thai police report — this is required for any insurance claim. Then contact our support team for guidance on the claims process.",
  },
  {
    question: "Can I apply online or do I need to visit your office?",
    answer: "Currently, all insurance applications are handled by our staff to ensure accuracy and compliance. You can contact us via WhatsApp or phone to start the process, submit your documents remotely, and receive your policy via email. Office visits are optional but welcome if you prefer in-person assistance.",
  },
  {
    question: "What border checkpoints can I use?",
    answer: "The most common Malaysia-Thailand border crossings are Bukit Kayu Hitam/Sadao, Padang Besar, and Pengkalan Hulu/Betong. Our insurance is valid for entry through any official Thai checkpoint. Document requirements may vary slightly between checkpoints.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Find answers to common questions about cross-border vehicle insurance for Thailand travel.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
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

            {/* CTA */}
            <div className="mt-12 text-center card-elevated p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our staff is ready to help you with any questions about cross-border insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://www.wasap.my/601111349976/admin1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
