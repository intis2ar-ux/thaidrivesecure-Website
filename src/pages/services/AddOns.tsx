import { Layout } from "@/components/layout/Layout";
import { Smartphone, Wrench, MessageCircle, CheckCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import addonsInsuranceBg from "@/assets/addons-insurance-bg.jpg";

const AddOns = () => {
  const { t } = useLanguage();

  const addons = [
    {
      icon: Smartphone,
      title: t("addons.sim.title"),
      description: t("addons.sim.description"),
      features: [
        t("addons.sim.feature.1"),
        t("addons.sim.feature.2"),
        t("addons.sim.feature.3"),
        t("addons.sim.feature.4"),
      ],
      popular: true,
    },
    {
      icon: Wrench,
      title: t("addons.roadside.title"),
      description: t("addons.roadside.description"),
      features: [
        t("addons.roadside.feature.1"),
        t("addons.roadside.feature.2"),
        t("addons.roadside.feature.3"),
        t("addons.roadside.feature.4"),
        t("addons.roadside.feature.5"),
      ],
      popular: true,
    },
  ];

  const misunderstandings = [
    {
      myth: t("addons.myth.1"),
      fact: t("addons.fact.1"),
    },
    {
      myth: t("addons.myth.2"),
      fact: t("addons.fact.2"),
    },
    {
      myth: t("addons.myth.3"),
      fact: t("addons.fact.3"),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${addonsInsuranceBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("addons.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("addons.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("addons.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Add-ons Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {addons.map((addon) => (
                <div key={addon.title} className="card-elevated p-6 relative">
                  {addon.popular && (
                    <div className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {t("addons.popular")}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <addon.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{addon.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Who Needs It */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("addons.whoneeds.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("addons.whoneeds.intro")}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• {t("addons.whoneeds.1")}</li>
                <li>• {t("addons.whoneeds.2")}</li>
                <li>• {t("addons.whoneeds.3")}</li>
                <li>• {t("addons.whoneeds.4")}</li>
              </ul>
            </div>

            {/* Common Misunderstandings */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("addons.misunderstandings")}</h2>
              <div className="space-y-4">
                {misunderstandings.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted">
                    <p className="text-red-600 font-medium mb-2 line-through">{item.myth}</p>
                    <p className="text-foreground">✓ {item.fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Note */}
            <div className="card-elevated p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">{t("addons.availability.title")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("addons.availability.text")}
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
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("addons.cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("addons.cta.text")}
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
                  to="/documents"
                  className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
                >
                  {t("addons.viewdocuments")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddOns;
