import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  MapPin, 
  FileCheck, 
  Car, 
  Stamp, 
  ShieldCheck, 
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Clock,
  Camera,
  CreditCard,
  Languages,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

interface BorderLocation {
  id: string;
  titleKey: string;
  shortNameKey: string;
  locationNameKey: string;
  descriptionKey: string;
  contextTextKey: string;
  mapEmbedUrl: string;
}

interface BorderLocationCardProps {
  border: BorderLocation;
  t: (key: string) => string;
}

const BorderLocationCard = ({ border, t }: BorderLocationCardProps) => {
  return (
    <div id={border.id} className="card-elevated p-4 h-full flex flex-col scroll-mt-24">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-tight">{t(border.locationNameKey)}</h3>
          <p className="text-xs text-muted-foreground">{t(border.descriptionKey)}</p>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed flex-grow">{t(border.contextTextKey)}</p>
      <div className="aspect-[4/3] w-full rounded-lg overflow-hidden">
        <iframe 
          src={border.mapEmbedUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={t(border.titleKey)}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

const BorderGuide = () => {
  const { t } = useLanguage();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const borderLocations: BorderLocation[] = [
    {
      id: "bukit-kayu-hitam",
      titleKey: "border.location.bkh.title",
      shortNameKey: "border.location.bkh.short",
      locationNameKey: "border.location.bkh.name",
      descriptionKey: "border.location.icqs",
      contextTextKey: "border.location.bkh.context",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015690.6818723332!2d99.94321483670306!3d6.0574207853988264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cba8a5083225d%3A0x48d474f05077071d!2sBukit%20Kayu%20Hitam%20Immigration%2C%20Customs%2C%20Quarantine%20%26%20Security%20(ICQS)%20Complex!5e0!3m2!1sen!2smy!4v1766414838820!5m2!1sen!2smy",
    },
    {
      id: "padang-besar",
      titleKey: "border.location.pb.title",
      shortNameKey: "border.location.pb.short",
      locationNameKey: "border.location.pb.name",
      descriptionKey: "border.location.icqs",
      contextTextKey: "border.location.pb.context",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5!2d100.3239!3d6.6614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cb4e6d8e7b2cd%3A0x7a8b5e3f4c2d1e0a!2sPadang%20Besar%20Immigration%2C%20Customs%2C%20Quarantine%20%26%20Security%20Complex!5e0!3m2!1sen!2smy!4v1766414838820!5m2!1sen!2smy",
    },
    {
      id: "wang-kelian",
      titleKey: "border.location.wk.title",
      shortNameKey: "border.location.wk.short",
      locationNameKey: "border.location.wk.name",
      descriptionKey: "border.location.icqs",
      contextTextKey: "border.location.wk.context",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.0!2d100.1142!3d6.6989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cb97c8d4b2f5d%3A0x9c8d7e6f5a4b3c2d!2sWang%20Kelian%20Immigration%20Complex!5e0!3m2!1sen!2smy!4v1766414838820!5m2!1sen!2smy",
    },
    {
      id: "durian-burung",
      titleKey: "border.location.db.title",
      shortNameKey: "border.location.db.short",
      locationNameKey: "border.location.db.name",
      descriptionKey: "border.location.icqs",
      contextTextKey: "border.location.db.context",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0!2d100.6897!3d6.2847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304cb3d4e5f6a7b8%3A0x1a2b3c4d5e6f7890!2sDurian%20Burung%20ICQS%20Complex!5e0!3m2!1sen!2smy!4v1766414838820!5m2!1sen!2smy",
    },
  ];

  const steps = [
    {
      number: 1,
      icon: FileCheck,
      title: t("border.step1.title"),
      description: t("border.step1.description"),
      tips: [
        t("border.step1.tip1"),
        t("border.step1.tip2"),
        t("border.step1.tip3"),
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    },
    {
      number: 2,
      icon: ShieldCheck,
      title: t("border.step2.title"),
      description: t("border.step2.description"),
      tips: [
        t("border.step2.tip1"),
        t("border.step2.tip2"),
        t("border.step2.tip3"),
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    },
    {
      number: 3,
      icon: Car,
      title: t("border.step3.title"),
      description: t("border.step3.description"),
      tips: [
        t("border.step3.tip1"),
        t("border.step3.tip2"),
        t("border.step3.tip3"),
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
    },
    {
      number: 4,
      icon: Stamp,
      title: t("border.step4.title"),
      description: t("border.step4.description"),
      tips: [
        t("border.step4.tip1"),
        t("border.step4.tip2"),
        t("border.step4.tip3"),
      ],
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400&h=300&fit=crop",
    },
    {
      number: 5,
      icon: MapPin,
      title: t("border.step5.title"),
      description: t("border.step5.description"),
      tips: [
        t("border.step5.tip1"),
        t("border.step5.tip2"),
        t("border.step5.tip3"),
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ];

  const essentialTips = [
    {
      icon: Clock,
      title: t("border.tips.timing.title"),
      description: t("border.tips.timing.desc"),
    },
    {
      icon: Camera,
      title: t("border.tips.photos.title"),
      description: t("border.tips.photos.desc"),
    },
    {
      icon: CreditCard,
      title: t("border.tips.money.title"),
      description: t("border.tips.money.desc"),
    },
    {
      icon: Languages,
      title: t("border.tips.language.title"),
      description: t("border.tips.language.desc"),
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
              {t("border.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("border.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("border.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-6 md:p-8 mb-12 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">{t("border.overview.title")}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("border.overview.text")}
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className={`card-elevated overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className={`md:w-2/5 h-48 md:h-auto relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-3/5 p-6 md:p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-accent" />
                          {t("border.tips.label")}
                        </h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Essential Tips */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{t("border.essential.title")}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {essentialTips.map((tip, index) => (
                  <div key={index} className="card-elevated p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <tip.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Border Locations Quick Links */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("border.locations.title")}</h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {borderLocations.map((border) => (
                  <a
                    key={border.id}
                    href={`#${border.id}`}
                    onClick={(e) => handleSmoothScroll(e, border.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {t(border.shortNameKey)}
                  </a>
                ))}
              </div>
              
              {/* Border Locations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {borderLocations.map((border) => (
                  <BorderLocationCard key={border.id} border={border} t={t} />
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="mt-12 card-elevated p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("border.warning.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("border.warning.text")}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center card-elevated p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">{t("border.cta.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("border.cta.text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/documents"
                  className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <FileCheck className="w-5 h-5" />
                  {t("border.cta.documents")}
                </Link>
                <a
                  href="/downloads/ThaiDriveSecure.apk"
                  download
                  className="btn-accent px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t("app.download")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BorderGuide;
