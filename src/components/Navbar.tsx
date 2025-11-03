import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";

// Basketball icon component
const BasketballIcon = ({ size = 28 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 0 0 20" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <path d="M2 12h20" />
    <path d="M6.34 6.34C8.3 8.3 10 11 10 12s-1.7 3.7-3.66 5.66" />
    <path d="M17.66 6.34C15.7 8.3 14 11 14 12s1.7 3.7 3.66 5.66" />
  </svg>
);
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
            className="md:hidden text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-accent/50 active:scale-95"
          >
            {isOpen ? <X size={28} /> : <BasketballIcon size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary/20 bg-card/95 backdrop-blur-md shadow-2xl rounded-b-3xl animate-fade-in">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-card-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-semibold text-center py-3.5 px-5 rounded-xl mx-3 active:scale-[0.98]"
              >
                {t("navStory")}
              </button>
              <button
                onClick={() => scrollToSection("method")}
                className="text-card-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-semibold text-center py-3.5 px-5 rounded-xl mx-3 active:scale-[0.98]"
              >
                {t("navMethod")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-card-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-semibold text-center py-3.5 px-5 rounded-xl mx-3 active:scale-[0.98]"
              >
                {t("navServices")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-card-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-semibold text-center py-3.5 px-5 rounded-xl mx-3 active:scale-[0.98]"
              >
                {t("navContact")}
              </button>
              <div className="flex items-center justify-center gap-3 mt-3 pt-5 border-t border-primary/20 mx-3">
                <Button
                  onClick={toggleLanguage}
                  variant="outline"
                  size="sm"
                  className="font-semibold border-primary/30"
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
