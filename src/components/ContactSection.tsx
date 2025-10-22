import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-secondary-foreground">
              {t('contactTitle')}
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">{t('sendMessage')}</CardTitle>
                <CardDescription>{t('formDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('name')}</Label>
                    <Input id="name" placeholder={t('yourName')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input id="email" type="email" placeholder={t('yourEmail')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input id="phone" type="tel" placeholder={t('whatsapp')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('messageText')}
                      rows={4}
                    />
                  </div>
                  <Button variant="hero" className="w-full" size="lg">
                    {t('send')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t('email')}</h3>
                      <p className="text-muted-foreground">contact@soleworkouts.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t('whatsapp')}</h3>
                      <a 
                        href="https://wa.me/5551234567" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +46 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{t('trainingFacility')}</h3>
                      <p className="text-muted-foreground">123 Championship Drive<br />Basketball City, BC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary border-0">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-primary-foreground mb-2">{t('officeHours')}</h3>
                  <div className="space-y-1 text-primary-foreground/90">
                    <p>{t('monday')}</p>
                    <p>{t('saturday')}</p>
                    <p>{t('sunday')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
