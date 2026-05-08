import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Target, Eye, Heart, Star, Users, Award, Download, MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { TikTokIcon } from "@/components/icons/TikTokIcon";

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("about.values.trust"),
      description: t("about.values.trust.desc"),
    },
    {
      icon: Heart,
      title: t("about.values.service"),
      description: t("about.values.service.desc"),
    },
    {
      icon: Star,
      title: t("about.values.simple"),
      description: t("about.values.simple.desc"),
    },
    {
      icon: Award,
      title: t("about.values.excellence"),
      description: t("about.values.excellence.desc"),
    },
  ];

  const team = [
    {
      name: "Ahmad bin Hassan",
      role: language === "en" ? "Founder & Director" : "Pengasas & Pengarah",
    },
    {
      name: "Siti Aminah",
      role: language === "en" ? "Operations Manager" : "Pengurus Operasi",
    },
    {
      name: "Muhammad Rizal",
      role: language === "en" ? "Customer Relations" : "Hubungan Pelanggan",
    },
    {
      name: "Nurul Huda",
      role: language === "en" ? "Insurance Specialist" : "Pakar Insurans",
    },
  ];

  const contactInfo = [
    { icon: MapPin, title: t("contact.address"), details: ["No 1, Pekan Lama Changlun", "Lebuhraya Changlun-Bukit Kayu Hitam", "Sintok, Malaysia"] },
    { icon: Phone, title: t("contact.phone"), details: ["011-1134 9776 (CNT)", "013-407 0752 (Intan)"] },
    { icon: Mail, title: t("contact.email"), details: ["changloontour@gmail.com"] },
    { icon: Clock, title: t("contact.hours"), details: [language === "en" ? "Everyday: 5:00 AM - 11:45 PM" : "Setiap Hari: 5:00 AM - 11:45 PM"] },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t("about.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-elevated p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t("about.mission.title")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.mission.text")}
                </p>
              </div>
              <div className="card-elevated p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t("about.vision.title")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.vision.text")}
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">{t("about.values.title")}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="card-elevated p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground text-center mb-4">{t("about.team.title")}</h2>
              <p className="text-muted-foreground text-center mb-8">{t("about.team.description")}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.name} className="card-elevated p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
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

            {/* Maps */}
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

          {/* CTA */}
          <div className="text-center card-elevated p-8 max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">{t("about.cta.title")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/downloads/ThaiDriveSecure.apk"
                download
                className="btn-accent px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t("app.download")}
              </a>
              <Link
                to="/documents"
                className="btn-outline px-8 py-3 rounded-lg font-semibold inline-block"
              >
                {t("hero.cta.documents")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
