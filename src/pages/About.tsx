import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Target, Eye, Heart, Star, Users, Award, Download } from "lucide-react";
import { Link } from "react-router-dom";

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

            {/* CTA */}
            <div className="text-center card-elevated p-8">
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
        </div>
      </section>
    </Layout>
  );
};

export default About;
