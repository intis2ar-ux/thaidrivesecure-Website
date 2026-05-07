import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle, AlertTriangle, MessageCircle, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import voluntaryInsuranceBg from "@/assets/voluntary-insurance-bg.jpg";

const VoluntaryInsurance = () => {
  const { t } = useLanguage();

  const coverage = [
    t("voluntary.coverage.1"),
    t("voluntary.coverage.2"),
    t("voluntary.coverage.3"),
    t("voluntary.coverage.4"),
    t("voluntary.coverage.5"),
  ];

  const benefits = [
    {
      title: t("voluntary.benefit.1.title"),
      description: t("voluntary.benefit.1.desc"),
    },
    {
      title: t("voluntary.benefit.2.title"),
      description: t("voluntary.benefit.2.desc"),
    },
    {
      title: t("voluntary.benefit.3.title"),
      description: t("voluntary.benefit.3.desc"),
    },
    {
      title: t("voluntary.benefit.4.title"),
      description: t("voluntary.benefit.4.desc"),
    },
  ];

  const misunderstandings = [
    {
      myth: t("voluntary.myth.1"),
      fact: t("voluntary.fact.1"),
    },
    {
      myth: t("voluntary.myth.2"),
      fact: t("voluntary.fact.2"),
    },
    {
      myth: t("voluntary.myth.3"),
      fact: t("voluntary.fact.3"),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${voluntaryInsuranceBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("voluntary.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("voluntary.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("voluntary.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Recommendation Banner */}
            <div className="mb-8 p-6 rounded-xl bg-accent/10 border border-accent/30">
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-foreground text-lg">{t("voluntary.recommended")}</h3>
              </div>
              <p className="text-muted-foreground">
                {t("voluntary.recommended.text")}
              </p>
            </div>

            {/* Summary */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t("voluntary.summary.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("voluntary.summary.text")}
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

            {/* Why Recommended */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-6">{t("voluntary.whyrecommended")}</h2>
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
              <h2 className="text-xl font-bold text-foreground mb-4">{t("voluntary.whoneeds.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("voluntary.whoneeds.intro")}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• {t("voluntary.whoneeds.1")}</li>
                <li>• {t("voluntary.whoneeds.2")}</li>
                <li>• {t("voluntary.whoneeds.3")}</li>
                <li>• {t("voluntary.whoneeds.4")}</li>
              </ul>
            </div>

            {/* Common Misunderstandings */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                {t("voluntary.misunderstandings")}
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
              <h2 className="text-xl font-bold text-foreground mb-4">{t("voluntary.when.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("voluntary.when.text")}
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
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("voluntary.cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("voluntary.cta.text")}
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
                  to="/services/travel"
                  className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                >
                  {t("voluntary.learntravel")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VoluntaryInsurance;
