import { useState, useEffect } from "react";
import { Shield, ArrowRight, FileText, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-thailand.jpg";

export function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          willChange: 'transform',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary-dark/90" />
      
      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container-custom relative">
        <div className="py-16 md:py-24 lg:py-32 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">{t("hero.badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground animate-fade-up stagger-1">
            {t("hero.title")}
            <span className="block text-accent">{t("hero.title.highlight")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up stagger-2">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up stagger-3">
            <Button size="lg" className="btn-accent group" asChild>
              <Link to="/documents">
                <FileText className="w-5 h-5 mr-2" />
                {t("hero.cta.documents")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
              <a href="http://www.wasap.my/601111349976/admin1" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("hero.cta.whatsapp")}
              </a>
            </Button>
          </div>

          {/* Download App CTA */}
          <div className="flex justify-center mb-12 animate-fade-up stagger-3">
            <Button size="lg" variant="ghost" className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30" asChild>
              <a href="/downloads/ThaiDriveSecure.apk" download>
                <Download className="w-5 h-5 mr-2" />
                {t("app.download")}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-up stagger-4">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">50,000+</p>
              <p className="text-sm text-primary-foreground/70">{t("hero.stats.policies")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">40+</p>
              <p className="text-sm text-primary-foreground/70">{t("hero.stats.years")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">98%</p>
              <p className="text-sm text-primary-foreground/70">{t("hero.stats.satisfaction")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
