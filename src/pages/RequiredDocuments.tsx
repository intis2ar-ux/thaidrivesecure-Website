import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Car, Shield, User, AlertTriangle, Download, FileText, ChevronRight, RotateCcw, PartyPopper, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { downloadDocumentChecklist } from "@/utils/generatePDF";
import { Button } from "@/components/ui/button";

interface DocumentItem {
  id: string;
  title: string;
  description?: string;
  required: boolean;
  hasDropdown?: boolean;
  dropdownContent?: { label: string; value: string }[];
}

interface DocumentCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  documents: DocumentItem[];
}

const RequiredDocuments = () => {
  const { t, language } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(new Set());

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("documentChecklist");
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save checked items to localStorage
  useEffect(() => {
    localStorage.setItem("documentChecklist", JSON.stringify([...checkedItems]));
  }, [checkedItems]);

  const categories: DocumentCategory[] = [
    {
      id: "vehicle",
      icon: Car,
      title: language === "en" ? "Vehicle Documents" : "Dokumen Kenderaan",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      documents: [
        { 
          id: "v1", 
          title: language === "en" ? "Valid Malaysian Road Tax" : "Cukai Jalan Malaysia yang Sah",
          description: language === "en" ? "Must be valid during your travel dates" : "Mestilah sah semasa tarikh perjalanan anda",
          required: true 
        },
        { 
          id: "v2", 
          title: language === "en" ? "Vehicle Registration Grant (Geran Kenderaan)" : "Geran Pendaftaran Kenderaan",
          description: language === "en" ? "Original or certified copy" : "Asal atau salinan yang disahkan",
          required: true 
        },
        { 
          id: "v3", 
          title: language === "en" ? "Authorization Letter" : "Surat Kebenaran",
          description: language === "en" ? "Only if the driver is not the vehicle owner" : "Hanya jika pemandu bukan pemilik kenderaan",
          required: true 
        },
      ],
    },
    {
      id: "personal",
      icon: User,
      title: language === "en" ? "Personal Identification" : "Pengenalan Peribadi",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      documents: [
        { 
          id: "p1", 
          title: language === "en" ? "Passport" : "Pasport",
          description: language === "en" ? "Valid for at least 6 months from entry date" : "Sah sekurang-kurangnya 6 bulan dari tarikh masuk",
          required: true 
        },
        { 
          id: "p2", 
          title: language === "en" ? "Car Owner's MyKad (IC) or Driver's MyKad (IC)" : "MyKad (IC) Pemilik Kereta atau MyKad (IC) Pemandu",
          description: language === "en" ? "Valid Malaysian identification card" : "Kad pengenalan Malaysia yang sah",
          required: true 
        },
        { 
          id: "p3", 
          title: language === "en" ? "Passport-size Photo" : "Foto Saiz Pasport",
          description: language === "en" ? "2 copies required" : "2 salinan diperlukan",
          required: true 
        },
      ],
    },
    {
      id: "insurance",
      icon: Shield,
      title: language === "en" ? "Insurance Documents" : "Dokumen Insurans",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      documents: [
        { 
          id: "i1", 
          title: language === "en" ? "Thailand TPBI Insurance Certificate" : "Sijil Insurans TPBI Thailand",
          description: language === "en" ? "Compulsory insurance for Thailand" : "Insurans wajib untuk Thailand",
          required: true 
        },
        { 
          id: "i2", 
          title: language === "en" ? "Emergency Contact Card" : "Kad Kenalan Kecemasan",
          description: language === "en" ? "With insurance hotline numbers" : "Dengan nombor talian kecemasan insurans",
          required: true 
        },
        { 
          id: "i3", 
          title: language === "en" ? "Insurance Hotline Number" : "Nombor Talian Insurans",
          description: language === "en" ? "Save for emergencies" : "Simpan untuk kecemasan",
          required: true 
        },
      ],
    },
    {
      id: "emergency",
      icon: AlertTriangle,
      title: language === "en" ? "Emergency Items" : "Barang Kecemasan",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      documents: [
        { 
          id: "e1", 
          title: language === "en" ? "First Aid Kit" : "Kit Pertolongan Cemas",
          description: language === "en" ? "Basic medical supplies" : "Bekalan perubatan asas",
          required: false 
        },
        { 
          id: "e2", 
          title: language === "en" ? "Warning Triangle" : "Segi Tiga Amaran",
          description: language === "en" ? "For roadside emergencies" : "Untuk kecemasan di tepi jalan",
          required: false 
        },
        { 
          id: "e3", 
          title: language === "en" ? "Thai Emergency Numbers" : "Nombor Kecemasan Thai",
          description: language === "en" ? "Police, ambulance, and roadside assistance" : "Polis, ambulans, dan bantuan tepi jalan",
          required: false,
          hasDropdown: true,
          dropdownContent: language === "en" ? [
            { label: "Tourist Police", value: "1155" },
            { label: "Police Emergency", value: "191" },
            { label: "Ambulance / Rescue", value: "1669" },
            { label: "Fire Department", value: "199" },
            { label: "Highway Police", value: "1193" },
          ] : [
            { label: "Polis Pelancong", value: "1155" },
            { label: "Kecemasan Polis", value: "191" },
            { label: "Ambulans / Penyelamat", value: "1669" },
            { label: "Bomba", value: "199" },
            { label: "Polis Lebuhraya", value: "1193" },
          ]
        },
        { 
          id: "e4", 
          title: language === "en" ? "Spare Tire & Jack" : "Tayar Ganti & Jek",
          description: language === "en" ? "Ensure they are in working condition" : "Pastikan dalam keadaan berfungsi",
          required: false 
        },
        { 
          id: "e5", 
          title: language === "en" ? "Thai Baht Cash" : "Wang Tunai Baht Thai",
          description: language === "en" ? "For tolls and emergencies" : "Untuk tol dan kecemasan",
          required: false 
        },
        { 
          id: "e6", 
          title: language === "en" ? "Phone with Thai SIM/Roaming" : "Telefon dengan SIM/Roaming Thai",
          description: language === "en" ? "For communication in Thailand" : "Untuk komunikasi di Thailand",
          required: false 
        },
      ],
    },
  ];

  const totalItems = categories.reduce((acc, cat) => acc + cat.documents.length, 0);
  const requiredItems = categories.reduce((acc, cat) => acc + cat.documents.filter(d => d.required).length, 0);
  const checkedRequired = categories.reduce((acc, cat) => 
    acc + cat.documents.filter(d => d.required && checkedItems.has(d.id)).length, 0
  );
  const progress = requiredItems > 0 ? Math.round((checkedRequired / requiredItems) * 100) : 0;
  const remainingRequired = requiredItems - checkedRequired;

  // Show celebration when 100% is reached
  useEffect(() => {
    if (progress === 100 && !showCelebration) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
    localStorage.removeItem("documentChecklist");
  };

  const relatedResources = [
    { label: language === "en" ? "Border Crossing Guide" : "Panduan Rentas Sempadan", href: "/border-guide" },
    { label: language === "en" ? "Compulsory Insurance" : "Insurans Wajib", href: "/services/compulsory" },
    { label: language === "en" ? "Voluntary Insurance" : "Insurans Sukarela", href: "/services/voluntary" },
    { label: language === "en" ? "Travel Insurance" : "Insurans Perjalanan", href: "/services/travel" },
    { label: language === "en" ? "Contact Us" : "Hubungi Kami", href: "/contact" },
  ];

  return (
    <Layout>
      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {/* Confetti particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 0.5}s`,
                animation: `fall ${2 + Math.random() * 2}s ease-out forwards`,
              }}
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 6)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
          {/* Center celebration message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl animate-scale-in text-center">
              <PartyPopper className="w-16 h-16 text-accent mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {language === "en" ? "Congratulations!" : "Tahniah!"}
              </h2>
              <p className="text-muted-foreground">
                {language === "en" ? "All required documents checked!" : "Semua dokumen yang diperlukan telah ditanda!"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add confetti animation keyframes */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-12 md:py-16">
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">{t("documents.badge")}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t("documents.title")}</h1>
            <p className="text-lg text-primary-foreground/80">{t("documents.description")}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Document Categories */}
            <div className="flex-1 space-y-6">
              {categories.map((category) => {
                const catCheckedCount = category.documents.filter(d => checkedItems.has(d.id)).length;
                const catTotalCount = category.documents.length;
                const isComplete = catCheckedCount === catTotalCount;
                
                return (
                  <div 
                    key={category.id} 
                    className={`bg-card rounded-2xl border-2 shadow-sm overflow-hidden transition-all duration-300 ${
                      isComplete ? 'border-green-300 bg-green-50/30' : `${category.borderColor}`
                    }`}
                  >
                    {/* Category Header */}
                    <div className={`flex items-center justify-between p-5 border-b ${category.borderColor} ${category.bgColor}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center`}>
                          <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <div>
                          <h2 className="font-bold text-lg text-foreground">{category.title}</h2>
                          <p className="text-sm text-muted-foreground">
                            {category.id === "emergency" 
                              ? `${catTotalCount} ${language === "en" ? "recommended items" : "item disyorkan"}`
                              : `${catTotalCount} ${language === "en" ? "required" : "diperlukan"}`
                            }
                          </p>
                        </div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        isComplete 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-card text-muted-foreground'
                      }`}>
                        {catCheckedCount}/{catTotalCount}
                      </div>
                    </div>

                    {/* Document Items */}
                    <div className="p-4 space-y-3">
                      {category.documents.map((doc, index) => {
                        const isChecked = checkedItems.has(doc.id);
                        const isDropdownExpanded = expandedDropdowns.has(doc.id);
                        
                        const toggleDropdown = (e: React.MouseEvent) => {
                          e.stopPropagation();
                          setExpandedDropdowns(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(doc.id)) {
                              newSet.delete(doc.id);
                            } else {
                              newSet.add(doc.id);
                            }
                            return newSet;
                          });
                        };

                        return (
                          <div key={doc.id}>
                            <div 
                              onClick={() => toggleItem(doc.id)}
                              className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                                isChecked 
                                  ? 'bg-green-50 border border-green-200' 
                                  : 'bg-muted/30 border border-transparent hover:bg-muted/50 hover:border-border'
                              }`}
                            >
                              {/* Checkbox */}
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                                isChecked
                                  ? "bg-green-500 border-green-500"
                                  : "border-muted-foreground/30 hover:border-muted-foreground/50"
                              }`}>
                                {isChecked && (
                                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                )}
                              </div>
                              
                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className={`font-medium text-sm ${
                                    isChecked ? "text-green-700" : "text-foreground"
                                  }`}>
                                    {doc.title}
                                  </span>
                                  {doc.required ? (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                      isChecked 
                                        ? 'bg-green-200 text-green-700' 
                                        : 'bg-red-100 text-red-600'
                                    }`}>
                                      {language === "en" ? "Required" : "Diperlukan"}
                                    </span>
                                  ) : (
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                      isChecked 
                                        ? 'bg-green-200 text-green-700' 
                                        : 'bg-orange-100 text-orange-600'
                                    }`}>
                                      {language === "en" ? "Recommended" : "Disyorkan"}
                                    </span>
                                  )}
                                  {doc.hasDropdown && (
                                    <button
                                      onClick={toggleDropdown}
                                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors ml-auto"
                                    >
                                      <span>{language === "en" ? "View numbers" : "Lihat nombor"}</span>
                                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                  )}
                                </div>
                                {doc.description && (
                                  <p className={`text-xs mt-1 ${
                                    isChecked ? "text-green-600" : "text-muted-foreground"
                                  }`}>
                                    {doc.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            {/* Dropdown Content for Thai Emergency Numbers */}
                            {doc.hasDropdown && isDropdownExpanded && doc.dropdownContent && (
                              <div className="ml-10 mt-2 mb-1 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                <div className="grid gap-2">
                                  {doc.dropdownContent.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-sm">
                                      <span className="text-muted-foreground">{item.label}</span>
                                      <span className="font-semibold text-orange-700">{item.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Help Section */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("documents.help.title")}</h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">{t("documents.help.description")}</p>
                    <Button variant="secondary" size="sm" asChild>
                      <Link to="/contact">{t("common.contactus")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Progress Card */}
                <div className="bg-card rounded-xl border border-border shadow-sm p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24 mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                          className="text-primary transition-all duration-500"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground">{progress}%</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1">
                      {language === "en" ? "Progress" : "Kemajuan"}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {checkedRequired} {language === "en" ? "of" : "daripada"} {requiredItems} {language === "en" ? "required items checked" : "item diperlukan ditanda"}
                    </p>

                    {remainingRequired > 0 ? (
                      <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg w-full">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span className="text-xs">
                          {remainingRequired} {language === "en" ? "required items remaining" : "item diperlukan tinggal"}
                        </span>
                      </div>
                    ) : progress === 100 && (
                      <div className={`flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg w-full ${showCelebration ? "animate-scale-in" : ""}`}>
                        <PartyPopper className={`w-4 h-4 shrink-0 ${showCelebration ? "animate-bounce" : ""}`} />
                        <span className="text-xs font-medium">
                          {language === "en" ? "All done! You're ready!" : "Selesai! Anda sedia!"}
                        </span>
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={() => downloadDocumentChecklist(language)} 
                    className="w-full mt-4 btn-primary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("documents.download")}
                  </Button>

                  {checkedItems.size > 0 && (
                    <Button 
                      onClick={resetChecklist}
                      variant="outline"
                      className="w-full mt-2"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      {language === "en" ? "Reset Checklist" : "Set Semula Senarai"}
                    </Button>
                  )}
                </div>

                {/* Related Resources */}
                <div className="bg-card rounded-xl border border-border shadow-sm p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {language === "en" ? "Related Resources" : "Sumber Berkaitan"}
                  </h3>
                  <div className="space-y-3">
                    {relatedResources.map((resource) => (
                      <Link
                        key={resource.label}
                        to={resource.href}
                        className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{resource.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RequiredDocuments;
