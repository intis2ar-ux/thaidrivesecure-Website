import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, Shield, ShieldPlus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const InsuranceComparisonSection = () => {
  const { t } = useLanguage();

  const comparisonData = [
    {
      feature: t("compare.feature.legal"),
      compulsory: true,
      voluntary: true,
    },
    {
      feature: t("compare.feature.thirdparty"),
      compulsory: true,
      voluntary: true,
    },
    {
      feature: t("compare.feature.property"),
      compulsory: false,
      voluntary: true,
    },
    {
      feature: t("compare.feature.ownvehicle"),
      compulsory: false,
      voluntary: false,
      note: t("compare.note.comprehensive"),
    },
    {
      feature: t("compare.feature.highermedical"),
      compulsory: false,
      voluntary: true,
    },
    {
      feature: t("compare.feature.duitpau"),
      compulsory: false,
      voluntary: true,
    },
    {
      feature: t("compare.feature.legal.liability"),
      compulsory: false,
      voluntary: true,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            {t("compare.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("compare.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("compare.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[40%] text-foreground font-semibold">
                      {t("compare.feature")}
                    </TableHead>
                    <TableHead className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{t("compare.compulsory")}</span>
                        <span className="text-xs text-muted-foreground font-normal">{t("compare.compulsory.sub")}</span>
                      </div>
                    </TableHead>
                    <TableHead className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <ShieldPlus className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-semibold text-foreground">{t("compare.voluntary")}</span>
                        <span className="text-xs text-muted-foreground font-normal">{t("compare.voluntary.sub")}</span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium text-foreground">
                        {row.feature}
                        {row.note && (
                          <span className="block text-xs text-muted-foreground mt-1">
                            {row.note}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.compulsory ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30">
                            <X className="w-5 h-5 text-red-500 dark:text-red-400" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {row.voluntary ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30">
                            <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30">
                            <X className="w-5 h-5 text-red-500 dark:text-red-400" />
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden p-4 space-y-6">
              {/* Compulsory Card */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("compare.compulsory")}</h3>
                    <p className="text-xs text-muted-foreground">{t("compare.compulsory.sub")}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {comparisonData.map((row, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      {row.compulsory ? (
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      <span className={row.compulsory ? "text-foreground" : "text-muted-foreground"}>
                        {row.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Voluntary Card */}
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <ShieldPlus className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("compare.voluntary")}</h3>
                    <p className="text-xs text-muted-foreground">{t("compare.voluntary.sub")}</p>
                  </div>
                  <span className="ml-auto px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                    {t("compare.recommended")}
                  </span>
                </div>
                <ul className="space-y-2">
                  {comparisonData.map((row, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      {row.voluntary ? (
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                      <span className={row.voluntary ? "text-foreground" : "text-muted-foreground"}>
                        {row.feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="card-elevated p-6 border-l-4 border-l-primary">
              <h3 className="font-semibold text-foreground mb-2">{t("compare.compulsory")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("compare.compulsory.summary")}</p>
              <Link
                to="/services/compulsory"
                className="text-primary font-medium text-sm hover:underline"
              >
                {t("common.learnmore")} →
              </Link>
            </div>
            <div className="card-elevated p-6 border-l-4 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-foreground">{t("compare.voluntary")}</h3>
                <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                  {t("compare.recommended")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t("compare.voluntary.summary")}</p>
              <Link
                to="/services/voluntary"
                className="text-accent font-medium text-sm hover:underline"
              >
                {t("common.learnmore")} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
