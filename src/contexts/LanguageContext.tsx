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
    
    // About - Personal Story
    aboutTitle: "My Story",
    aboutP1: "My basketball journey began as a young kid in Serbia, where I fell in love with the game. From those early days shooting on outdoor courts to dreaming about playing professionally, basketball became my passion and purpose.",
    aboutP2: "That childhood dream became reality as I pursued a professional career that took me across Sweden and internationally. I competed at various levels, faced challenges, celebrated victories, and learned what it truly takes to succeed at the highest levels of this demanding sport.",
    aboutP3: "Through years of dedication and hard work, I experienced everything - from youth competitions to professional leagues, from small gyms to big arenas. Every step of that journey shaped who I am today and taught me invaluable lessons that I now share with my players.",
    
    // Services
    servicesTitle: "Training Services",
    servicesSubtitle: "Basketball Skills Training, Performance Development & Online Coaching",
    individualBasketball: "Individual Basketball Skills",
    individualBasketballDesc: "One-on-one basketball skill development - shooting, ball handling, footwork, and game technique",
    groupBasketball: "Group Basketball Training",
    groupBasketballDesc: "Team-based basketball training - skills, game understanding, teamwork, and competitive play",
    individualPerformance: "Individual Performance Training",
    individualPerformanceDesc: "Personal athletic training - strength, agility, speed, and conditioning for peak performance",
    groupPerformance: "Group Performance Training",
    groupPerformanceDesc: "Team performance sessions - strength development, conditioning, and athletic training together",
    onlineMeetings: "Online Coaching",
    onlineDesc: "Remote basketball coaching and mentorship - video analysis, game planning, anywhere in the world",
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
    
    // Method Section - Coaching Approach
    methodTitle: "My Coaching Method",
    methodSubtitle: "How I work with players to develop complete basketball athletes",
    methodIntro: "As a coach, I bring my professional playing experience directly into every training session. I work with players the same way I trained during my career - with intensity, attention to detail, and a clear focus on continuous improvement. My coaching philosophy is built on understanding each player's unique needs and creating a structured path to help them reach their potential.",
    methodPillar1: "Individual-Focused Development",
    methodPillar1Desc: "I assess each player's current level and create personalized training plans. Whether you're 10 or 30 years old, beginner or advanced, every session is tailored to challenge you appropriately and build on your strengths while addressing weaknesses.",
    methodPillar2: "Real Game Application",
    methodPillar2Desc: "I teach skills that directly translate to game situations. Every drill, every exercise connects to real basketball moments. We don't just practice - we prepare you for the actual demands you'll face in competition.",
    methodPillar3: "Progressive Training System",
    methodPillar3Desc: "My programs follow a structured progression. We master fundamentals first, then build complexity. Each skill leads to the next, creating a solid foundation that allows you to keep improving year after year.",
    methodPillar4: "Professional Mentality",
    methodPillar4Desc: "I teach players how to train like professionals - the work ethic, discipline, and mental approach that separates good players from great ones. This mindset applies whether you're aiming for your school team or professional leagues.",
    
    // Programs
    programsTitle: "Training Programs",
    programsSubtitle: "Structured coaching programs designed to develop your basketball skills and athletic performance",
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
    fundamental: "Fundamental basketball skills coaching",
    conditioning: "Age-appropriate physical training",
    character: "Character & discipline development",
    reports: "Regular progress reports",
    advanced: "Advanced technique coaching",
    strength: "Strength & conditioning training",
    video: "Game video analysis sessions",
    collegePrep: "College-level preparation",
    tournament: "Competition preparation training",
    personalized: "Fully customized training plan",
    mental: "Mental toughness coaching",
    contract: "Professional career guidance",
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
    
    // About - Personal Story
    aboutTitle: "Min Historia",
    aboutP1: "Min basketresa började som liten grabb i Serbien, där jag förälskade mig i spelet. Från de tidiga dagarna när jag sköt på utomhusplaner till att drömma om att spela professionellt, blev basket min passion och mitt syfte.",
    aboutP2: "Den barndomsdrömmen blev verklighet när jag satsade på en professionell karriär som tog mig över Sverige och internationellt. Jag tävlade på olika nivåer, mötte utmaningar, firade segrar och lärde mig vad som verkligen krävs för att lyckas på högsta nivå i denna krävande sport.",
    aboutP3: "Genom år av dedikation och hårt arbete upplevde jag allt - från ungdomstävlingar till professionella ligor, från små gymnastiksalar till stora arenor. Varje steg på den resan formade vem jag är idag och lärde mig ovärderliga läxor som jag nu delar med mina spelare.",
    
    // Services
    servicesTitle: "Träningstjänster",
    servicesSubtitle: "Basketfärdighetsträning, Prestationsutveckling & Onlinecoachning",
    individualBasketball: "Individuell Basketfärdighet",
    individualBasketballDesc: "En-mot-en basketfärdighetsutveckling - skottträning, bollhantering, fotarbete och spelteknik",
    groupBasketball: "Gruppbasketträning",
    groupBasketballDesc: "Lagbaserad basketträning - färdigheter, spelförståelse, lagarbete och tävlingsspel",
    individualPerformance: "Individuell Prestationsträning",
    individualPerformanceDesc: "Personlig atletisk träning - styrka, smidighet, snabbhet och kondition för topprestanda",
    groupPerformance: "Gruppprestationsträning",
    groupPerformanceDesc: "Lagprestandasessioner - styrkeutveckling, kondition och atletisk träning tillsammans",
    onlineMeetings: "Onlinecoachning",
    onlineDesc: "Fjärrbasketcoachning och mentorskap - videoanalys, spelplanering, var som helst i världen",
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
    
    // Method Section - Coaching Approach
    methodTitle: "Min Coachningsmetod",
    methodSubtitle: "Hur jag arbetar med spelare för att utveckla kompletta basketidrottare",
    methodIntro: "Som coach tar jag med mig min professionella spelarerfarenhet direkt in i varje träningspass. Jag arbetar med spelare på samma sätt som jag tränade under min karriär - med intensitet, uppmärksamhet på detaljer och ett tydligt fokus på kontinuerlig förbättring. Min coachningsfilosofi bygger på att förstå varje spelares unika behov och skapa en strukturerad väg för att hjälpa dem nå sin potential.",
    methodPillar1: "Individuell Utveckling",
    methodPillar1Desc: "Jag bedömer varje spelares nuvarande nivå och skapar personliga träningsplaner. Oavsett om du är 10 eller 30 år, nybörjare eller avancerad, är varje pass skräddarsytt för att utmana dig lämpligt och bygga på dina styrkor samtidigt som vi adresserar svagheter.",
    methodPillar2: "Verklig Speltillämpning",
    methodPillar2Desc: "Jag lär ut färdigheter som direkt översätts till spelsituationer. Varje övning, varje drill kopplas till verkliga basketögonblick. Vi tränar inte bara - vi förbereder dig för de faktiska krav du kommer möta i tävling.",
    methodPillar3: "Progressivt Träningssystem",
    methodPillar3Desc: "Mina program följer en strukturerad progression. Vi behärskar grunderna först, sedan bygger vi komplexitet. Varje färdighet leder till nästa, vilket skapar en solid grund som gör att du kan fortsätta förbättras år efter år.",
    methodPillar4: "Professionell Mentalitet",
    methodPillar4Desc: "Jag lär spelare att träna som proffs - arbetsmoral, disciplin och det mentala förhållningssätt som skiljer bra spelare från fantastiska. Denna mentalitet gäller oavsett om du siktar på ditt skollag eller professionella ligor.",
    
    // Programs
    programsTitle: "Träningsprogram",
    programsSubtitle: "Strukturerade coachningsprogram utformade för att utveckla dina basketfärdigheter och atletiska prestation",
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
    fundamental: "Grundläggande basketfärdighetscoachning",
    conditioning: "Åldersanpassad fysisk träning",
    character: "Karaktärs- & disciplinsutveckling",
    reports: "Regelbundna utvecklingsrapporter",
    advanced: "Avancerad teknikcoachning",
    strength: "Styrke- & konditionsträning",
    video: "Spelvideoanalsessioner",
    collegePrep: "Högskolenivåförberedelse",
    tournament: "Tävlingsförberedelseträning",
    personalized: "Helt anpassad träningsplan",
    mental: "Mental tuffhetscoachning",
    contract: "Professionell karriärvägledning",
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
