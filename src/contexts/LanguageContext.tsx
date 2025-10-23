import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    navStory: "My Story",
    navMethod: "My Method",
    navServices: "Services",
    navContact: "Contact",
    
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
    
    // Services
    servicesTitle: "Training Services",
    servicesSubtitle: "Comprehensive basketball and performance training tailored to your goals",
    individual: "Individual Training",
    individualDesc: "Focusing on the finest details in the game",
    groupTraining: "Group Training",
    groupDesc: "Focusing on skills, game understanding, and teamwork",
    performance: "Performance Training",
    performanceDesc: "Gym training focusing on agility, strength, and conditioning",
    onlineMeetings: "Online Meetings",
    onlineDesc: "Remote guidance and mentorship for players anywhere",
    learnMore: "Learn More",
    
    // Individual Training Page
    individualIntro: "One-on-one personalized training sessions where we focus on the finest details of your game. Each practice is designed specifically for your age and skill level, ensuring you get the most effective training possible.",
    individualBenefit1: "Technical Precision",
    individualBenefit1Desc: "Master every detail of your shooting form, ball handling, and footwork with focused attention.",
    individualBenefit2: "Game Situation Analysis",
    individualBenefit2Desc: "Break down specific game situations and develop decision-making skills under pressure.",
    individualBenefit3: "Personalized Feedback",
    individualBenefit3Desc: "Get immediate corrections and adjustments tailored to your unique playing style.",
    individualBenefit4: "Skill Progression",
    individualBenefit4Desc: "Track your development with structured progressions that match your improvement rate.",
    
    // Group Training Page
    groupIntro: "Dynamic group sessions that build both individual skills and team understanding. Training is adapted to the group's age and experience level, focusing on basketball IQ and collaborative play.",
    groupBenefit1: "Team Dynamics",
    groupBenefit1Desc: "Learn to read your teammates and develop chemistry through competitive drills.",
    groupBenefit2: "Basketball IQ",
    groupBenefit2Desc: "Understand offensive and defensive concepts, spacing, and game flow.",
    groupBenefit3: "Competitive Environment",
    groupBenefit3Desc: "Push each other to improve through controlled competition and game situations.",
    groupBenefit4: "Communication Skills",
    groupBenefit4Desc: "Develop on-court communication and leadership abilities.",
    
    // Performance Training Page
    performanceIntro: "Gym-based training focused on building the physical foundation you need to excel on the court. Programs are designed based on your age, physical development, and basketball-specific needs.",
    performanceBenefit1: "Strength Development",
    performanceBenefit1Desc: "Build functional strength that translates directly to basketball movements.",
    performanceBenefit2: "Agility Training",
    performanceBenefit2Desc: "Improve footwork, lateral quickness, and change of direction speed.",
    performanceBenefit3: "Explosive Power",
    performanceBenefit3Desc: "Develop vertical jump, first-step quickness, and overall explosiveness.",
    performanceBenefit4: "Injury Prevention",
    performanceBenefit4Desc: "Strengthen key muscle groups and learn proper movement patterns to stay healthy.",
    
    // Online Meetings Page
    onlineIntro: "Remote training and mentorship for players who want guidance regardless of location. Get expert advice on your development, game analysis, and career planning from anywhere.",
    onlineBenefit1: "Video Analysis Sessions",
    onlineBenefit1Desc: "Review your game footage together and identify areas for improvement.",
    onlineBenefit2: "Personalized Guidance",
    onlineBenefit2Desc: "Get answers to your questions and create a customized development plan.",
    onlineBenefit3: "Flexible Scheduling",
    onlineBenefit3Desc: "Book sessions that fit your schedule, anywhere in the world.",
    onlineBenefit4: "Career Mentorship",
    onlineBenefit4Desc: "Learn from professional experience about the path to higher levels of basketball.",
    
    customizedApproach: "Tailored to Your Level",
    customizedApproachDesc: "Every training session is designed specifically for your age and skill level. Whether you're just starting out or aiming for professional play, the approach is customized to help you reach your goals.",
    backHome: "Back to Home",
    
    // Method Section
    methodTitle: "My Basketball & Performance Method",
    methodSubtitle: "Professional training approach focused on basketball excellence and athletic performance",
    methodIntro: "My training methodology is built on years of professional basketball experience combined with cutting-edge performance science. I specialize in developing complete basketball players through a systematic approach that addresses technical skills, physical conditioning, and mental preparation. Every session is designed to elevate your game through focused basketball training and performance enhancement.",
    methodPillar1: "Basketball Technical Mastery",
    methodPillar1Desc: "Master the fundamentals and advanced skills of basketball - shooting mechanics, ball handling, footwork, defensive positioning, and offensive moves. We break down every detail to build consistent, high-level basketball technique.",
    methodPillar2: "Basketball IQ & Game Understanding",
    methodPillar2Desc: "Develop deep basketball knowledge - reading defenses, offensive spacing, defensive rotations, and game situations. Learn to think like a professional player and make the right decisions on the court.",
    methodPillar3: "Performance & Athletic Development",
    methodPillar3Desc: "Build the physical foundation for basketball excellence - strength training, explosive power, agility work, speed development, and conditioning. Programs designed specifically for basketball performance demands.",
    methodPillar4: "Competitive Mindset & Mental Toughness",
    methodPillar4Desc: "Cultivate the mental strength needed to compete at high levels. Learn focus techniques, pressure management, and the professional approach to training and competition that drives success in basketball.",
    
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
    mental: "Mental performance coaching",
    contract: "Contract negotiation prep",
  },
  sv: {
    // Navbar
    navStory: "Min Historia",
    navMethod: "Min Metod",
    navServices: "Tjänster",
    navContact: "Kontakt",
    
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
    
    // Services
    servicesTitle: "Träningstjänster",
    servicesSubtitle: "Omfattande basket- och prestationsträning anpassad till dina mål",
    individual: "Individuell Träning",
    individualDesc: "Fokus på de finaste detaljerna i spelet",
    groupTraining: "Gruppträning",
    groupDesc: "Fokus på färdigheter, spelförståelse och lagarbete",
    performance: "Prestationsträning",
    performanceDesc: "Gymträning med fokus på smidighet, styrka och kondition",
    onlineMeetings: "Onlinemöten",
    onlineDesc: "Fjärrvägledning och mentorskap för spelare var som helst",
    learnMore: "Läs Mer",
    
    // Individual Training Page
    individualIntro: "Personliga träningssessioner en-mot-en där vi fokuserar på de finaste detaljerna i ditt spel. Varje träningspass är utformat specifikt för din ålder och färdighetsnivå, vilket säkerställer att du får den mest effektiva träningen möjligt.",
    individualBenefit1: "Teknisk Precision",
    individualBenefit1Desc: "Bemästra varje detalj i din skottform, bollhantering och fotarbete med fokuserad uppmärksamhet.",
    individualBenefit2: "Spellägesanalys",
    individualBenefit2Desc: "Bryt ner specifika spellägen och utveckla beslutsfattande under press.",
    individualBenefit3: "Personlig Feedback",
    individualBenefit3Desc: "Få omedelbara korrigeringar och justeringar anpassade till din unika spelstil.",
    individualBenefit4: "Färdighetsprogression",
    individualBenefit4Desc: "Följ din utveckling med strukturerade progressioner som matchar din förbättringstakt.",
    
    // Group Training Page
    groupIntro: "Dynamiska gruppsessioner som bygger både individuella färdigheter och lagförståelse. Träningen anpassas till gruppens ålder och erfarenhetsnivå, med fokus på basket-IQ och samarbetsspel.",
    groupBenefit1: "Lagdynamik",
    groupBenefit1Desc: "Lär dig läsa dina lagkamrater och utveckla kemi genom tävlingsinriktade övningar.",
    groupBenefit2: "Basket-IQ",
    groupBenefit2Desc: "Förstå offensiva och defensiva koncept, positionering och spelflöde.",
    groupBenefit3: "Tävlingsmiljö",
    groupBenefit3Desc: "Pusha varandra att förbättras genom kontrollerad tävling och spellägen.",
    groupBenefit4: "Kommunikationsfärdigheter",
    groupBenefit4Desc: "Utveckla kommunikation på planen och ledarskapsförmåga.",
    
    // Performance Training Page
    performanceIntro: "Gymbaserad träning fokuserad på att bygga den fysiska grunden du behöver för att utmärka dig på planen. Program är utformade baserat på din ålder, fysiska utveckling och basketspecifika behov.",
    performanceBenefit1: "Styrkeutveckling",
    performanceBenefit1Desc: "Bygg funktionell styrka som översätts direkt till basketrörelser.",
    performanceBenefit2: "Smidighetsträning",
    performanceBenefit2Desc: "Förbättra fotarbete, lateral snabbhet och riktningsförändringshastighet.",
    performanceBenefit3: "Explosiv Kraft",
    performanceBenefit3Desc: "Utveckla vertikalhopp, första stegsnabbhet och övergripande explosivitet.",
    performanceBenefit4: "Skadeförebyggande",
    performanceBenefit4Desc: "Stärk viktiga muskelgrupper och lär dig korrekta rörelsemönster för att hålla dig frisk.",
    
    // Online Meetings Page
    onlineIntro: "Fjärrträning och mentorskap för spelare som vill ha vägledning oavsett var de befinner sig. Få expertråd om din utveckling, spelanalys och karriärplanering från var som helst.",
    onlineBenefit1: "Videoanalysmöten",
    onlineBenefit1Desc: "Granska ditt spelmaterial tillsammans och identifiera förbättringsområden.",
    onlineBenefit2: "Personlig Vägledning",
    onlineBenefit2Desc: "Få svar på dina frågor och skapa en anpassad utvecklingsplan.",
    onlineBenefit3: "Flexibel Schemaläggning",
    onlineBenefit3Desc: "Boka sessioner som passar ditt schema, var som helst i världen.",
    onlineBenefit4: "Karriärmentorskap",
    onlineBenefit4Desc: "Lär av professionell erfarenhet om vägen till högre nivåer av basket.",
    
    customizedApproach: "Anpassad Till Din Nivå",
    customizedApproachDesc: "Varje träningspass är utformat specifikt för din ålder och färdighetsnivå. Oavsett om du precis börjar eller siktar på professionellt spel, anpassas metoden för att hjälpa dig nå dina mål.",
    backHome: "Tillbaka Till Hem",
    
    // Method Section
    methodTitle: "Min Basket- & Prestationsmetod",
    methodSubtitle: "Professionell träningsmetod fokuserad på basketexcellens och atletisk prestation",
    methodIntro: "Min träningsmetodik bygger på år av professionell basketerfarenhet kombinerat med banbrytande prestationsvetenskap. Jag specialiserar mig på att utveckla kompletta basketspelare genom ett systematiskt tillvägagångssätt som adresserar tekniska färdigheter, fysisk kondition och mental förberedelse. Varje träningspass är utformat för att höja ditt spel genom fokuserad basketträning och prestationsförbättring.",
    methodPillar1: "Baskettekniskt Mästerskap",
    methodPillar1Desc: "Bemästra grunderna och avancerade färdigheter i basket - skottmekanik, bollhantering, fotarbete, defensiv positionering och offensiva drag. Vi bryter ner varje detalj för att bygga konsekvent basketteknik på hög nivå.",
    methodPillar2: "Basket-IQ & Spelförståelse",
    methodPillar2Desc: "Utveckla djup basketkunskap - läsa försvar, offensiv positionering, defensiva rotationer och spellägen. Lär dig tänka som en professionell spelare och fatta rätt beslut på planen.",
    methodPillar3: "Prestation & Atletisk Utveckling",
    methodPillar3Desc: "Bygg den fysiska grunden för basketexcellens - styrketräning, explosiv kraft, smidighetsarbete, hastighetsutveckling och kondition. Program utformade specifikt för basketprestationskrav.",
    methodPillar4: "Tävlingsinställning & Mental Styrka",
    methodPillar4Desc: "Kultivera den mentala styrka som krävs för att tävla på höga nivåer. Lär dig fokustekniker, presshantering och det professionella förhållningssättet till träning och tävling som driver framgång i basket.",
    
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
