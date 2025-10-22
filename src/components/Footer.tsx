import { Instagram, MessageCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">{t('heroTitle')}</h3>
            <p className="text-secondary-foreground/80">{t('footerTagline')}</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <SiTiktok className="w-4 h-4" />
            </a>
            <a 
              href="https://wa.me/5551234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {t('heroTitle')}. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
