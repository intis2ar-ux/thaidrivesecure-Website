import { Smartphone, Download, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tdsAppLogo from "@/assets/tds-app-logo.png";

export function AppDownloadSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      titleKey: "app.feature.instant",
      descKey: "app.feature.instant.desc",
    },
    {
      icon: Shield,
      titleKey: "app.feature.secure",
      descKey: "app.feature.secure.desc",
    },
    {
      icon: Smartphone,
      titleKey: "app.feature.manage",
      descKey: "app.feature.manage.desc",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("app.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t("app.title")}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("app.description")}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.titleKey}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <feature.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="text-primary-foreground font-semibold text-sm mb-1">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs">
                    {t(feature.descKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <a
              href="/downloads/ThaiDriveSecure.apk"
              download
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              <Download className="w-6 h-6" />
              {t("app.download")}
            </a>
            <p className="text-primary-foreground/60 text-sm mt-4">
              {t("app.android")}
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-sky-100 to-sky-200 rounded-[2.5rem] flex flex-col items-center justify-center p-6">
                  {/* App icon */}
                  <img 
                    src={tdsAppLogo} 
                    alt="ThaiDriveSecure" 
                    className="w-24 h-24 mb-4"
                  />
                  <h3 className="text-primary font-bold text-lg mb-2">ThaiDriveSecure</h3>
                  <p className="text-muted-foreground text-center text-sm mb-6">
                    {t("app.tagline")}
                  </p>
                  {/* Mock buttons */}
                  <div className="space-y-3 w-full">
                    <div className="bg-primary text-primary-foreground py-3 rounded-lg text-center text-sm font-medium">
                      {t("app.mock.buy")}
                    </div>
                    <div className="bg-accent text-accent-foreground py-3 rounded-lg text-center text-sm font-medium">
                      {t("app.mock.policies")}
                    </div>
                    <div className="bg-white border border-border py-3 rounded-lg text-center text-sm font-medium text-foreground">
                      {t("app.mock.documents")}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                {t("app.new")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
