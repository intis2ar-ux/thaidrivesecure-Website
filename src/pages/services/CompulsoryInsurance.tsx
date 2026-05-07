import { Layout } from "@/components/layout/Layout";
import { Shield, CheckCircle, XCircle, AlertTriangle, MessageCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import compulsoryInsuranceBg from "@/assets/compulsory-insurance-bg.jpg";

const CompulsoryInsurance = () => {
  const { t } = useLanguage();

  const coverage = [
    t("compulsory.coverage.1"),
    t("compulsory.coverage.2"),
    t("compulsory.coverage.3"),
    t("compulsory.coverage.4"),
    t("compulsory.coverage.5"),
  ];

  const notCovered = [
    t("compulsory.notcovered.1"),
    t("compulsory.notcovered.2"),
    t("compulsory.notcovered.3"),
    t("compulsory.notcovered.4"),
    t("compulsory.notcovered.5"),
  ];

  const misunderstandings = [
    {
      myth: t("compulsory.myth.1"),
      fact: t("compulsory.fact.1"),
    },
    {
      myth: t("compulsory.myth.2"),
      fact: t("compulsory.fact.2"),
    },
    {
      myth: t("compulsory.myth.3"),
      fact: t("compulsory.fact.3"),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${compulsoryInsuranceBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("compulsory.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("compulsory.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("compulsory.description")}
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
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{t("compulsory.summary.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("compulsory.summary.text")}
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-red-50 border border-red-200">
                <p className="text-red-700 font-medium">
                  ⚠️ {t("compulsory.mandatory")}
                </p>
              </div>
            </div>

            {/* What's Covered vs Not Covered */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card-elevated p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {t("compulsory.whatcovers")}
                </h3>
                <ul className="space-y-3">
                  {coverage.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-elevated p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  {t("compulsory.whatnotcovers")}
                </h3>
                <ul className="space-y-3">
                  {notCovered.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-600 mt-1 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Needs It */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("compulsory.whoneeds.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("compulsory.whoneeds.text")}
              </p>
            </div>

            {/* When Required */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("compulsory.when.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("compulsory.when.text")}
              </p>
            </div>

            {/* Common Misunderstandings */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                {t("compulsory.misunderstandings")}
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
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("compulsory.cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("compulsory.cta.text")}
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
                  to="/services/voluntary"
                  className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                >
                  {t("compulsory.learnvoluntary")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompulsoryInsurance;
