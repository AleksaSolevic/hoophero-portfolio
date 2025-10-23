import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import ThemeColorSwitcher from "./ThemeColorSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-black text-primary hover:text-primary-glow transition-colors"
          >
            {t("heroTitle")}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t("navStory")}
            </button>
            <button
              onClick={() => scrollToSection("method")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t("navMethod")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t("navServices")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t("navContact")}
            </button>

            {/* Language Switcher */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="font-semibold"
            >
              {language === "en" ? "SV" : "EN"}
            </Button>
            
            {/* Theme Color Switcher */}
            <ThemeColorSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                {t("navStory")}
              </button>
              <button
                onClick={() => scrollToSection("method")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                {t("navMethod")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                {t("navServices")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                {t("navContact")}
              </button>
              <div className="flex items-center gap-2">
                <Button
                  onClick={toggleLanguage}
                  variant="outline"
                  size="sm"
                  className="w-fit font-semibold"
                >
                  {language === "en" ? "SV" : "EN"}
                </Button>
                <ThemeColorSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
