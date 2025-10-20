import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">Elite Basketball Coaching</h3>
            <p className="text-secondary-foreground/80">Elevate Your Game. Transform Your Future.</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Elite Basketball Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
