import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import sedanImage from "@/assets/vehicle-sedan.png";
import mpvImage from "@/assets/vehicle-mpv.png";
import truckImage from "@/assets/vehicle-truck.png";
import motorcycleImage from "@/assets/vehicle-motorcycle.png";

export function InsurancePackagesSection() {
  const { t, language } = useLanguage();

  const compulsoryPackages = [
    {
      type: "Sedan",
      image: sedanImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `5 ${t("packages.passengers")}`,
      price: "RM 33",
    },
    {
      type: "MPV",
      image: mpvImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `7 ${t("packages.passengers")}`,
      price: "RM 40",
    },
    {
      type: "SUV/Truck",
      image: truckImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `5 ${t("packages.passengers")}`,
      price: "RM 40",
    },
    {
      type: language === "en" ? "Motorcycle" : "Motorsikal",
      image: motorcycleImage,
      duration: language === "en" ? "3 Months" : "3 Bulan",
      passengers: `2 ${t("packages.passengers")}`,
      price: "RM 65",
    },
  ];

  const voluntaryPackages = [
    {
      type: "Sedan",
      image: sedanImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `5 ${t("packages.passengers")}`,
      price: "RM 173",
    },
    {
      type: "MPV",
      image: mpvImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `7 ${t("packages.passengers")}`,
      price: "RM 193",
    },
    {
      type: "SUV/Truck",
      image: truckImage,
      duration: language === "en" ? "9 Days" : "9 Hari",
      passengers: `5 ${t("packages.passengers")}`,
      price: "RM 213",
    },
    {
      type: language === "en" ? "Motorcycle" : "Motorsikal",
      image: motorcycleImage,
      duration: language === "en" ? "3 Months" : "3 Bulan",
      passengers: `2 ${t("packages.passengers")}`,
      price: "RM 260",
    },
  ];

  function PackageCard({ pkg, featured = false }: { pkg: typeof compulsoryPackages[0]; featured?: boolean }) {
    const getImageScale = () => {
      if (pkg.type === "Sedan") return "scale-125";
      if (pkg.type === "MPV") return "scale-110";
      if (pkg.type === "SUV/Truck") return "scale-125";
      return "scale-100"; // Motorcycle
    };
    
    return (
      <div className="relative bg-card rounded-2xl border border-border/50 shadow-md overflow-hidden group hover:shadow-lg transition-all">
        {featured && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded z-10">
            {t("packages.featured")}
          </div>
        )}
        
        {/* Image Area */}
        <div className="h-40 bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center p-4 overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.type}
            className={`max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ${getImageScale()}`}
          />
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-foreground text-lg mb-2">{pkg.type}</h4>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <span>⏱</span> {pkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <span>👥</span> {pkg.passengers}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("packages.from")} <span className="text-xl font-bold text-primary">{pkg.price}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container-custom">
        {/* Compulsory Insurance */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("packages.compulsory.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("packages.compulsory.description")}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compulsoryPackages.map((pkg, index) => (
              <PackageCard key={`compulsory-${index}`} pkg={pkg} featured />
            ))}
          </div>
        </div>

        {/* Voluntary Insurance */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("packages.voluntary.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("packages.voluntary.description")}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voluntaryPackages.map((pkg, index) => (
              <PackageCard key={`voluntary-${index}`} pkg={pkg} featured />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("packages.interested")}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 btn-accent px-8 py-3 rounded-lg font-semibold"
          >
            {t("packages.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
