import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: "Sole Workouts",
    heroSubtitle: "Professional basketball and performance training from an ex-pro player. Build skills, elevate performance, achieve your goals.",
    startJourney: "Start Your Journey",
    viewPrograms: "View Programs",
    
    // About
    aboutTitle: "About Me",
    aboutP1: "Originally from Serbia, I've dedicated my life to basketball. My professional career took me across Sweden and internationally, where I competed at various levels and learned what it truly takes to succeed in this demanding sport.",
    aboutP2: "Through years of high-level competition, I developed a deep understanding of the mental and physical requirements needed to excel. I've experienced the pressure of crucial games, the discipline of professional training, and the strategic thinking required to outperform opponents.",
    aboutP3: "Now, I channel all that experience into helping athletes reach their full potential. Whether you're just starting out or aiming for professional levels, I bring real-world insights and proven training methods to help you elevate your game. My approach combines technical skill development, conditioning, mental preparation, and the competitive mindset needed to succeed.",
    
    // Stats
    yearsExp: "Years Experience",
    athletesTrained: "Athletes Trained",
    successRate: "Success Rate",
    
    // Services
    servicesTitle: "Training Services",
    servicesSubtitle: "Comprehensive basketball and performance training tailored to your goals",
    individual: "Individual Training",
    individualDesc: "One-on-one personalized sessions focused on your specific needs and goals",
    groupTraining: "Group Training",
    groupDesc: "Small group sessions that build teamwork while developing individual skills",
    videoAnalysis: "Video Analysis",
    videoDesc: "Professional breakdown of your gameplay to identify strengths and areas for improvement",
    performance: "Performance Testing",
    performanceDesc: "Comprehensive assessment of your physical capabilities and progress tracking",
    
    // Programs
    programsTitle: "Training Programs",
    programsSubtitle: "Choose the program that fits your goals and commitment level",
    youth: "Youth Development",
    youthAge: "Ages 8-14",
    elite: "Elite Skills",
    eliteAge: "High School & College",
    professional: "Professional",
    proAge: "Pro & Semi-Pro",
    mostPopular: "Most Popular",
    emailPricing: "Email for pricing and schedule details",
    contactMe: "Contact Me",
    
    // Contact
    contactTitle: "Ready to Get Started?",
    contactSubtitle: "Take the first step toward reaching your basketball goals. Contact me today for a free consultation.",
    sendMessage: "Send a Message",
    formDesc: "Fill out the form and I'll get back to you within 24 hours",
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "your.email@example.com",
    phone: "Phone",
    whatsapp: "WhatsApp",
    message: "Message",
    messageText: "Tell me about your goals and experience level...",
    send: "Send Message",
    trainingFacility: "Training Facility",
    officeHours: "Office Hours",
    monday: "Monday - Friday: 6:00 AM - 8:00 PM",
    saturday: "Saturday: 8:00 AM - 6:00 PM",
    sunday: "Sunday: By Appointment",
    
    // Footer
    footerTagline: "Professional Basketball Training",
    copyright: "All rights reserved.",
    
    // Features
    fundamental: "Fundamental skills training",
    conditioning: "Age-appropriate conditioning",
    character: "Character development",
    reports: "Parent progress reports",
    advanced: "Advanced skill development",
    strength: "Strength & conditioning",
    video: "Video analysis included",
    collegePrep: "College prep support",
    tournament: "Tournament preparation",
    personalized: "Personalized training plan",
    nutrition: "Nutrition guidance",
    mental: "Mental performance coaching",
    contract: "Contract negotiation prep",
  },
  sv: {
    // Hero
    heroTitle: "Sole Workouts",
    heroSubtitle: "Professionell basket- och prestationsträning från en tidigare professionell spelare. Utveckla färdigheter, förbättra prestationer, uppnå dina mål.",
    startJourney: "Börja Din Resa",
    viewPrograms: "Visa Program",
    
    // About
    aboutTitle: "Om Mig",
    aboutP1: "Ursprungligen från Serbien har jag ägnat mitt liv åt basket. Min professionella karriär tog mig över Sverige och internationellt, där jag tävlade på olika nivåer och lärde mig vad som verkligen krävs för att lyckas i denna krävande sport.",
    aboutP2: "Genom år av tävling på hög nivå utvecklade jag en djup förståelse för de mentala och fysiska krav som krävs för att utmärka sig. Jag har upplevt pressen i avgörande matcher, disciplinen i professionell träning och det strategiska tänkande som krävs för att överträffa motståndare.",
    aboutP3: "Nu kanaliserar jag all den erfarenheten till att hjälpa idrottare nå sin fulla potential. Oavsett om du just börjar eller siktar på professionell nivå, tar jag med verkliga insikter och beprövade träningsmetoder för att hjälpa dig höja ditt spel. Min metod kombinerar teknisk färdighetsutveckling, konditionsträning, mental förberedelse och det konkurrensinriktade mindset som krävs för att lyckas.",
    
    // Stats
    yearsExp: "Års Erfarenhet",
    athletesTrained: "Tränade Atleter",
    successRate: "Framgångsgrad",
    
    // Services
    servicesTitle: "Träningstjänster",
    servicesSubtitle: "Omfattande basket- och prestationsträning anpassad till dina mål",
    individual: "Individuell Träning",
    individualDesc: "Personliga en-till-en-sessioner fokuserade på dina specifika behov och mål",
    groupTraining: "Gruppträning",
    groupDesc: "Små gruppsessioner som bygger lagarbete samtidigt som individuella färdigheter utvecklas",
    videoAnalysis: "Videoanalys",
    videoDesc: "Professionell genomgång av ditt spel för att identifiera styrkor och förbättringsområden",
    performance: "Prestandatester",
    performanceDesc: "Omfattande bedömning av dina fysiska kapaciteter och framstegsuppföljning",
    
    // Programs
    programsTitle: "Träningsprogram",
    programsSubtitle: "Välj det program som passar dina mål och engagemangsnivå",
    youth: "Ungdomsutveckling",
    youthAge: "8-14 år",
    elite: "Elite Färdigheter",
    eliteAge: "Gymnasium & Högskola",
    professional: "Professionell",
    proAge: "Proffs & Semi-Proffs",
    mostPopular: "Mest Populär",
    emailPricing: "Mejla för priser och schemauppgifter",
    contactMe: "Kontakta Mig",
    
    // Contact
    contactTitle: "Redo Att Börja?",
    contactSubtitle: "Ta första steget mot att nå dina basketmål. Kontakta mig idag för en gratis konsultation.",
    sendMessage: "Skicka Meddelande",
    formDesc: "Fyll i formuläret så återkommer jag inom 24 timmar",
    name: "Namn",
    yourName: "Ditt namn",
    email: "E-post",
    yourEmail: "din.epost@exempel.se",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    message: "Meddelande",
    messageText: "Berätta om dina mål och erfarenhetsnivå...",
    send: "Skicka Meddelande",
    trainingFacility: "Träningsanläggning",
    officeHours: "Öppettider",
    monday: "Måndag - Fredag: 06:00 - 20:00",
    saturday: "Lördag: 08:00 - 18:00",
    sunday: "Söndag: Efter Överenskommelse",
    
    // Footer
    footerTagline: "Professionell Basketträning",
    copyright: "Alla rättigheter förbehållna.",
    
    // Features
    fundamental: "Grundläggande färdighetsträning",
    conditioning: "Åldersanpassad konditionsträning",
    character: "Karaktärsutveckling",
    reports: "Föräldrarapporter",
    advanced: "Avancerad färdighetsutveckling",
    strength: "Styrke- & konditionsträning",
    video: "Videoanalys ingår",
    collegePrep: "Förberedelse för högskola",
    tournament: "Turneringsförberedelse",
    personalized: "Personlig träningsplan",
    nutrition: "Näringsvägledning",
    mental: "Mental prestationscoachning",
    contract: "Kontraktsförhandlings förberedelse",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
