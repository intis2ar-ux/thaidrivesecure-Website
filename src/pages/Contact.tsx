import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    { icon: MapPin, title: t("contact.address"), details: ["No 1, Pekan Lama Changlun", "Lebuhraya Changlun-Bukit Kayu Hitam", "Sintok, Malaysia"] },
    { icon: Phone, title: t("contact.phone"), details: ["011-1134 9776 (CNT)", "013-407 0752 (Intan)"] },
    { icon: Mail, title: t("contact.email"), details: ["changloontour@gmail.com"] },
    { icon: Clock, title: t("contact.hours"), details: [language === "en" ? "Everyday: 5:00 AM - 11:45 PM" : "Setiap Hari: 5:00 AM - 11:45 PM"] },
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-16 md:py-24">
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">{t("contact.badge")}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-primary-foreground/80">{t("contact.description")}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.info.title")}</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => <p key={i} className="text-muted-foreground text-sm">{detail}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 mb-8">
                <p className="text-sm text-foreground">{t("contact.note")}</p>
              </div>

              <a href="tel:+60111349776" className="btn-accent px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                <Phone className="w-5 h-5" />
                {language === "en" ? "Call Us" : "Hubungi Kami"}
              </a>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">{t("contact.follow")}</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/changluntours", label: "Facebook" },
                    { icon: Instagram, href: "https://www.instagram.com/changluntours_/?hl=en", label: "Instagram" },
                    { icon: TikTokIcon, href: "https://www.tiktok.com/@insurans_thailand?lang=en", label: "TikTok" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={s.label}>
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* 360 Street View */}
              <div className="card-elevated overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">360° Street View</h3>
                  <p className="text-sm text-muted-foreground">Virtual tour of our location</p>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1766415114278!6m8!1m7!1srhLC91omUOzhkz1gomhPDw!2m2!1d6.424746749373817!2d100.4285751051047!3f301.70355!4f0!5f0.7820865974627469" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="CNT Enterprise 360 View" 
                  className="w-full" 
                />
              </div>

              {/* Store Map */}
              <div className="card-elevated overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">CNT Enterprise Location</h3>
                  <p className="text-sm text-muted-foreground">Changlun Tour / Changlun CNT Enterprise</p>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7606331049933!2d100.42366774596523!3d6.424792707784602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ca583351a6b3b%3A0xf622162dfc1a2005!2sChanglun%20Tour%2FChanglun%20CNT%20Enterprise!5e0!3m2!1sen!2smy!4v1766415009721!5m2!1sen!2smy" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="CNT Enterprise Location" 
                  className="w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
