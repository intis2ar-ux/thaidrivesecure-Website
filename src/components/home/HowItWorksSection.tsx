import { FileText, Users, CheckCircle, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FileText,
      step: "01",
      title: t("howitworks.step1.title"),
      description: t("howitworks.step1.description"),
    },
    {
      icon: Users,
      step: "02",
      title: t("howitworks.step2.title"),
      description: t("howitworks.step2.description"),
    },
    {
      icon: CheckCircle,
      step: "03",
      title: t("howitworks.step3.title"),
      description: t("howitworks.step3.description"),
    },
    {
      icon: Truck,
      step: "04",
      title: t("howitworks.step4.title"),
      description: t("howitworks.step4.description"),
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            {t("howitworks.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("howitworks.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("howitworks.description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative card-elevated p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                Step {item.step}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 mt-2">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
