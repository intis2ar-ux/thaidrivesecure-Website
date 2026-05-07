import { Layout } from "@/components/layout/Layout";
import { Heart, CheckCircle, AlertTriangle, MessageCircle, Plane, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import travelInsuranceBg from "@/assets/travel-insurance-bg.jpg";

const TravelInsurance = () => {
  const { t } = useLanguage();

  const coverage = [
    t("travel.coverage.1"),
    t("travel.coverage.2"),
    t("travel.coverage.3"),
    t("travel.coverage.4"),
    t("travel.coverage.5"),
    t("travel.coverage.6"),
  ];

  const benefits = [
    {
      title: t("travel.benefit.1.title"),
      description: t("travel.benefit.1.desc"),
    },
    {
      title: t("travel.benefit.2.title"),
      description: t("travel.benefit.2.desc"),
    },
    {
      title: t("travel.benefit.3.title"),
      description: t("travel.benefit.3.desc"),
    },
    {
      title: t("travel.benefit.4.title"),
      description: t("travel.benefit.4.desc"),
    },
  ];

  const misunderstandings = [
    {
      myth: t("travel.myth.1"),
      fact: t("travel.fact.1"),
    },
    {
      myth: t("travel.myth.2"),
      fact: t("travel.fact.2"),
    },
    {
      myth: t("travel.myth.3"),
      fact: t("travel.fact.3"),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${travelInsuranceBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("travel.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("travel.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("travel.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Summary */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t("travel.summary.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("travel.summary.text")}
              </p>
              <ul className="space-y-3">
                {coverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-6">{t("travel.benefits.title")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted">
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Needs It */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("travel.whoneeds.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("travel.whoneeds.intro")}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• {t("travel.whoneeds.1")}</li>
                <li>• {t("travel.whoneeds.2")}</li>
                <li>• {t("travel.whoneeds.3")}</li>
                <li>• {t("travel.whoneeds.4")}</li>
                <li>• {t("travel.whoneeds.5")}</li>
              </ul>
            </div>

            {/* Common Misunderstandings */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                {t("travel.misunderstandings")}
              </h2>
              <div className="space-y-4">
                {misunderstandings.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted">
                    <p className="text-red-600 font-medium mb-2 line-through">{item.myth}</p>
                    <p className="text-foreground">✓ {item.fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When Required */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{t("travel.when.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("travel.when.text")}
              </p>
            </div>

            {/* App Promotion */}
            <div className="card-elevated p-6 md:p-8 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("app.cta.title")}</h2>
              <p className="text-muted-foreground mb-4">
                {t("app.cta.description")}
              </p>
              <a
                href="/downloads/ThaiDriveSecure.apk"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Download className="w-5 h-5" />
                {t("app.download")}
              </a>
            </div>

            {/* CTA */}
            <div className="text-center card-elevated p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("travel.cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("travel.cta.text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://www.wasap.my/601111349976/admin1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("common.whatsappus")}
                </a>
                <Link
                  to="/services/addons"
                  className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                >
                  {t("travel.learnaddons")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TravelInsurance;
