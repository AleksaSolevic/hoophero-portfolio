import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/95 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`h-8 px-3 rounded-full ${
          language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('sv')}
        className={`h-8 px-3 rounded-full ${
          language === 'sv' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
        }`}
      >
        SV
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
