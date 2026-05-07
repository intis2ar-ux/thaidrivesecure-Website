import { Zap, FileCheck, Users, Shield, Clock, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t("whychoose.fast.title"),
      description: t("whychoose.fast.description"),
    },
    {
      icon: FileCheck,
      title: t("whychoose.border.title"),
      description: t("whychoose.border.description"),
    },
    {
      icon: Users,
      title: t("whychoose.staff.title"),
      description: t("whychoose.staff.description"),
    },
    {
      icon: Shield,
      title: t("whychoose.trusted.title"),
      description: t("whychoose.trusted.description"),
    },
    {
      icon: Clock,
      title: t("whychoose.delivery.title"),
      description: t("whychoose.delivery.description"),
    },
    {
      icon: HeadphonesIcon,
      title: t("whychoose.support.title"),
      description: t("whychoose.support.description"),
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            {t("whychoose.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("whychoose.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("whychoose.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
