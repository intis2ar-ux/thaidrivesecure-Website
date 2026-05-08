import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import footerLogo from "@/assets/footer-logo.png";

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.documents"), href: "/documents" },
    { label: t("nav.borderguide"), href: "/border-guide" },
    { label: t("nav.about"), href: "/about" },
  ];

  const serviceLinks = [
    { label: t("services.compulsory"), href: "/services/compulsory" },
    { label: t("services.voluntary"), href: "/services/voluntary" },
    { label: t("services.travel"), href: "/services/travel" },
    { label: t("services.addons"), href: "/services/addons" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/changluntours", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/changluntours_/?hl=en", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@insurans_thailand?lang=en", label: "TikTok" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={footerLogo} 
                alt="CNT Enterprise" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
              <div className="text-primary-foreground/80 text-sm">
                <p>{language === "en" ? "Everyday: 5:00 AM - 11:45 PM" : "Setiap Hari: 5:00 AM - 11:45 PM"}</p>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quicklinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.insurance")}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  No 1, Pekan Lama Changlun,<br />
                  Lebuhraya Changlun-Bukit Kayu Hitam,<br />
                  Sintok, Malaysia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <div className="text-primary-foreground/80 text-sm">
                  <a href="tel:+60111349776" className="hover:text-primary-foreground transition-colors block">
                    011-1134 9776 (CNT)
                  </a>
                  <a href="tel:+60134070752" className="hover:text-primary-foreground transition-colors block">
                    013-407 0752 (Intan)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <a
                  href="mailto:changloontour@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  changloontour@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-4">
          <p className="text-primary-foreground/60 text-xs text-center">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} CNT Enterprise. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
