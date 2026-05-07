import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-md transition-colors",
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ms")}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-md transition-colors",
          language === "ms"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        BM
      </button>
    </div>
  );
}
