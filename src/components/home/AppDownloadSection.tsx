import { Smartphone, Download, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import mobileAppMockup from "@/assets/mob app mockup.png";

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
    <section className="section-padding relative overflow-hidden bg-[linear-gradient(105deg,#1479b1_0%,#1395ac_52%,#16b8a5_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,24,44,0.72)_0%,rgba(5,24,44,0.42)_44%,rgba(5,24,44,0)_72%)]" />

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
            <div className="relative w-full max-w-[540px]">
              <img
                src={mobileAppMockup}
                alt="ThaiDriveSecure mobile app screens"
                className="w-full drop-shadow-2xl"
              />
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
