import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Download } from "lucide-react";
import tdsLogo from "@/assets/tds-logo.png";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.compulsory"),
      href: "/services/compulsory",
      description: t("services.compulsory.desc"),
    },
    {
      title: t("services.voluntary"),
      href: "/services/voluntary",
      description: t("services.voluntary.desc"),
    },
    {
      title: t("services.travel"),
      href: "/services/travel",
      description: t("services.travel.desc"),
    },
    {
      title: t("services.addons"),
      href: "/services/addons",
      description: t("services.addons.desc"),
    },
  ];

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.documents"), href: "/documents" },
    { label: t("nav.borderguide"), href: "/border-guide" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border/40">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={tdsLogo} 
              alt="ThaiDriveSecure by CNT Enterprise" 
              className="h-10 md:h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            <Link
              to="/"
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {t("nav.home")}
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-3 py-1.5 h-auto text-sm font-medium rounded-md",
                      location.pathname.startsWith("/services")
                        ? "bg-primary text-primary-foreground"
                        : "bg-transparent hover:bg-muted"
                    )}
                  >
                    {t("nav.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-3 md:w-[480px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                            >
                              <div className="text-sm font-medium leading-none text-foreground">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/documents"
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/documents")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {t("nav.documents")}
            </Link>

            <Link
              to="/border-guide"
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/border-guide")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {t("nav.borderguide")}
            </Link>

            <Link
              to="/about"
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/about")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {t("nav.about")}
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                isActive("/contact")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <LanguageToggle />
            
            <div className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground">
              <Phone className="w-3.5 h-3.5" />
              <a href="tel:+60111349776" className="hover:text-foreground transition-colors whitespace-nowrap">
                011-1134 9776
              </a>
            </div>

            <Button size="sm" className="hidden sm:flex bg-accent hover:bg-accent/90 text-accent-foreground h-8 px-3 text-sm" asChild>
              <a href="/downloads/ThaiDriveSecure.apk" download>
                <Download className="w-3.5 h-3.5 mr-1.5" />
                {t("app.download")}
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className={cn(
                  "px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                  isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium hover:bg-muted transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>{t("nav.services")}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        to={service.href}
                        className="px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                    isActive(link.href) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 px-4 flex flex-col gap-2">
                <a 
                  href="tel:+60111349776" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  011-1134 9776
                </a>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="/downloads/ThaiDriveSecure.apk" download>
                    <Download className="w-4 h-4 mr-2" />
                    {t("app.download")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
