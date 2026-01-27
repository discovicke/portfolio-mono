/**
 * CV-data för portfolion
 *
 * Detta är en array med alla erfarenheter som visas på hemsidan och i CV-modalen.
 * Varje entry följer Experience-interfacet från types/index.ts
 *
 * Använd `featuredIds` för att bestämma vilka som visas på hemsidan.
 * Alla entries visas i modalen.
 */

import {type Experience, type ExperienceConfig} from '../types';

// Alla erfarenheter - lägg till nya här
const allExperiences: Experience[] = [
    // === ARBETE ===
    {
        id: 1,
        type: 'work',
        title: 'Elevhandledare',
        company: 'Nordanstigs kommun',
        startDate: '2023-08',
        endDate: '2025-08',
        description: 'Stöttade elever med särskilda behov i grundskolan.',
        longDescription: 'Arbetade som elevhandledare med fokus på att stödja elever med NPF-diagnoser och olika inlärningsbehov. Samarbetade nära elever, pedagoger och vårdnadshavare för att skapa trygghet, struktur, individuellt lärande och personlig utveckling.',
        location: 'Harmånger',
        skills: ['Pedagogik', 'Kommunikation', 'Anpassningsförmåga', 'Empati'],
    },
    {
        id: 2,
        type: 'work',
        title: 'Elevresurs',
        company: 'Lekebergs kommun',
        startDate: '2022-10',
        endDate: '2023-08',
        description: 'Stöttade elever med särskilda behov i grundskolan.',
        longDescription: 'Resurs i F–9-verksamhet med ansvar för elever med diabetes. Arbetade även på fritids. Kombinerade praktiskt ansvar med omsorg och socialt stöd.',
        location: 'Fjugesta',
        skills: ['Pedagogik', 'Kommunikation', 'Problemlösning', 'Anpassningsförmåga'],
    },
    {
      id: 3,
        type: 'work',
        title: 'Reservdelsförsäljare',
        company: 'John Deere Forestry Sverige',
        startDate: '2022-05',
        endDate: '2022-08',
        description: 'Arbetade med kundservice och försäljning av reservdelar inom skogsbruksindustrin.',
        longDescription: 'Säsongsbetonat arbete i kundservice och försäljning av reservdelar. Hjälpte kunder att hitta rätt produkter, gav teknisk rådgivning och hanterade lagerlogistik. Utvecklade mina kunskaper inom fordonsdelar och ERP-system, förbättrade min problemlösnings- samt logistiska förmåga.',
        location: 'Delsbo',
        skills: ['Kundservice', 'Försäljning', 'Produktkunskap', 'Lagerhantering'],
    },
    {
        id: 4,
        type: 'work',
        title: 'Kursledare i Musik & Ljudproduktion',
        company: 'Egen regi',
        startDate: '2021-08',
        endDate: '2024-07',
        description: 'Undervisade elever i musik och ljudproduktion på fritidsnivå.',
        longDescription: 'Ledde onlinekurser i musikproduktion för ungdomar (åldrarna 13–21) med fokus på ljudproduktion, musikteori och instrumentundervisning. Utvecklade individuella lektionsplaner, organiserade konserter och workshops samt inspirerade elever att utforska sin kreativitet genom musik.',
        location: 'Hudiksvall',
        skills: ['Undervisning', 'Musikteori', 'Ljudproduktion', 'Kommunikation'],
    },
    {
        id: 5,
        type: 'work',
        title: 'Butiksbiträde',
        company: 'Systembolaget',
        startDate: '2018-06',
        endDate: '2019-08',
        description: 'Arbetade i kundservice och försäljning på Systembolaget.',
        longDescription: 'Säsongsbetonat arbete. Ansvarade för kundservice, produktkunskap och kassahantering i en butiksmiljö. Hjälpte kunder att hitta produkter, gav rekommendationer efter kundens behov samt utvecklade mina logistiska kunskaper.',
        location: 'Hudiksvall',
        skills: ['Kundservice', 'Försäljning', 'Produktkunskap', 'Kassahantering'],
    },
    {
        id: 6,
        type: 'work',
        title: 'Vikarierande museipedagog',
        company: 'Hudiksvalls museum',
        startDate: '2015-08',
        endDate: '2016-01',
        description: 'Ledde workshops och guidade besökare på museet.',
        longDescription: 'Arbetade som vikarie på Hudiksvalls museum under höstsäsongen. Ledde pedagogiska workshops för barn och vuxna, guidade grupper genom utställningar och hjälpte till med evenemangsplanering. Fick erfarenhet av att kommunicera historiskt innehåll på ett engagerande sätt.',
        location: 'Hudiksvall',
        skills: ['Pedagogik', 'Kommunikation', 'Eventplanering', 'Kundservice'],
    },
    {
        id: 7,
        type: 'work',
        title: 'Lärarvikarie & Elevresurs',
        company: 'Hudiksvalls kommun',
        startDate: '2015-08',
        endDate: '2017-01',
        description: 'Vikarierade som lärare & senare som elevresurs i grundskolan och gymnasium.',
        longDescription: 'Arbetade som lärarvikarie i grundskolan med ansvar för att undervisa. Senare anställdes jag som elevresurs för att stödja elever med särskilda behov. Samarbetade med lärare och föräldrar för att skapa en inkluderande lärmiljö.',
        location: 'Hudiksvall',
        skills: ['Lyhördhet', 'Pedagogik', 'Anpassningsförmåga', 'Kommunikation'],
    },
    {
        id: 8,
        type: 'work',
        title: 'Vårdbiträde & Personlig Assistent',
        company: 'Hudiksvalls kommun',
        startDate: '2015-05',
        endDate: '2018-08',
        description: 'Säsongsbetonat arbetade som vårdbiträde på hemtjänst, gruppboende och personlig assistent.',
        longDescription: 'Erbjöd omsorg och stöd till äldre och personer med funktionsnedsättningar. Arbetet inkluderade personlig hygien, medicinering, måltidsstöd och social interaktion. Utvecklade empati, tålamod och förmåga att arbeta i team inom vårdsektorn.',
        location: 'Hudiksvall',
        skills: ['Omsorg', 'Empati', 'Kommunikation', 'Tålamod'],
    },
    {
        id: 9,
        type: 'work',
        title: 'Ljudtekniker & Musikproducent',
        company: 'Egen regi, Gigant Kulturkollektiv',
        startDate: '2015-01',
        isCurrent: true,
        description: 'Arbetar med ljudproduktion och live-ljudteknik.',
        longDescription: 'Ansvarar för ljudproduktion, mixning och mastering av musikprojekt. Producerar musik och samarbetar med artister inom pop, hiphop och elektronisk musik. Ansvarar för hela produktionskedjan, från idé till färdig master.',
        location: 'Hudiksvall',
        skills: ['Ljudproduktion', 'Mixning', 'Mastering', 'Live-ljudteknik', 'Kundkontakt'],
    },
    {
        id: 10,
        type: 'work',
        title: 'Receptionspersonal',
        company: 'Perth Youth Hostel',
        startDate: '2014-06',
        endDate: '2014-08',
        description: 'Ansvarade för in- och utcheckning samt kundservice.',
        longDescription: 'Arbetade som receptionspersonal på ett vandrarhem i Perth, Skottland. Hanterade in- och utcheckningar, bokningar och gav information om lokala sevärdheter. Utvecklade starka kommunikationsfärdigheter och förmåga att arbeta i en snabb miljö med internationella gäster.',
        location: 'Perth, Skottland',
        skills: ['Kundservice', 'Kommunikation', 'Organisation', 'Problemlösning'],
    },
    // === IDEELLT ARBETE ===
    {
        id: 11,
        type: 'volunteer',
        title: 'Konfirmationsledare',
        company: 'Forsa-Högs församling',
        startDate: '2012-07',
        endDate: '2023-08',
        description: 'Ledde konfirmandgrupper och organiserade aktiviteter för ungdomar.',
        longDescription: 'Ideellt arbete som konfirmationsledare i Forsa-Högs församling. Ansvarade för att planera, genomföra samt leda gruppaktiviteter och skapa en trygg miljö för ungdomar att utforska sin personliga utveckling. Med åren ökade mitt ansvar då jag blev drivande i att utveckla och stötta ledargruppen med fokus på gruppdynamik, planering och social utveckling.',
        location: 'Forsa, Hudiksvall',
        skills: ['Ledarskap', 'Pedagogik', 'Kommunikation', 'Organisationsförmåga'],
    },
    {
        id: 12,
        type: 'volunteer',
        title: 'Klassrepresentant i ledningsgrupp',
        company: 'Edugrade',
        startDate: '2025-09',
        isCurrent: true,
        description: 'Representerar studenternas åsikter och bidrar till utbildningens utveckling.',
        longDescription: 'Representerar eleverna i ledningsgruppen och deltar i beslut om utbildningens innehåll, kvalitet och utveckling. Bidrar med elevperspektiv och kommunikation mellan klass, skolledning och branschen.',
        location: 'Hudiksvall',
        skills: ['Kommunikation', 'Intressenthantering', 'Påverkansarbete', 'Samarbete'],
    },
    // === UTBILDNING ===
    {
        id: 13,
        type: 'education',
        title: 'Systemutvecklare .NET med AI-kompetens',
        company: 'Edugrade',
        startDate: '2025-09',
        isCurrent: true,
        description: 'Tvåårig YH-utbildning med fokus på systemutveckling i .NET, webbutveckling, databaser och AI.',
        longDescription: 'Tvåårig yrkeshögskoleutbildning med fokus på objektorienterad programmering i C# och .NET. Utbildningen omfattar frontendutveckling med HTML, CSS och JavaScript, backendutveckling i ASP.NET, databaser, designmönster, arkitektur samt projektledning med agila metoder. Innehåller även kurser i DevOps, molnbaserade AI-komponenter i Microsoft Azure samt en längre LIA-period och examensarbete med tydlig koppling till näringslivet.',
        location: 'Hudiksvall',
        skills: [
            'C#',
            '.NET',
            'ASP.NET',
            'Objektorienterad programmering',
            'SQL',
            'Databaser',
            'HTML',
            'CSS',
            'JavaScript',
            'Agila metoder',
            'Designmönster',
            'Microsoft Azure',
            'DevOps'
        ],
    },
    {
        id: 14,
        type: 'education',
        title: 'Musikproduktion & Ljudteknik',
        company: 'Umeå Universitet',
        startDate: '2017-08',
        endDate: '2020-06',
        description: 'Skapande Musik - Musikproduktion & Ljudteknik',
        longDescription: 'Musikproduktion & Ljudteknik med inriktning mot skapande musik. Studier inkluderade ljudinspelning, mixning, mastering, musikteori, arrangering och produktionstekniker. Praktiska projekt inom olika musikgenrer samt samarbete med artister och producenter för att utveckla en professionell portfölj.',
        location: 'Umeå',
        skills: [
            'Musikproduktion',
            'Ljudteknik',
            'Mixning',
            'Mastering',
            'Musikteori',
            'Digital Audio Workstations (DAW)',
            'Live-ljudteknik'
        ],
    },
    {
        id: 15,
        type: 'education',
        title: 'Gymnasieexamen, Samhällsvetenskapliga programmet - Medier, information & kommunikation',
        company: 'Bromangymnasiet',
        startDate: '2012-08',
        endDate: '2015-06',
        description: 'Samhällsvetenskapliga programmet med inriktning mot medier, information & kommunikation.',
        longDescription: 'Studier inom samhällsvetenskap med fokus på medier, information och kommunikation. Kurser inkluderade journalistik, medieproduktion, kommunikationsteori, samhällskunskap och projektarbete inom medieproduktion. Praktiska erfarenheter av att skapa innehåll för olika medier samt utveckling av kritiskt tänkande och analysförmåga.',
        location: 'Hudiksvall',
        skills: [
            'Medieproduktion',
            'Kommunikation',
            'Journalistik',
            'Samhällskunskap',
        ],
    }
    // === CERTIFIKAT ===
   /* {
        id: 5,
        type: 'certificate',
        title: 'Azure Fundamentals',
        company: 'Microsoft',
        startDate: '2025',
        description: 'Grundläggande kunskaper om molntjänster och Azure.',
        longDescription: 'Microsoft Azure Fundamentals (AZ-900) certifiering som validerar grundläggande kunskaper om molnkoncept, Azure-tjänster, säkerhet, efterlevnad, prissättning och support.',
        skills: ['Azure', 'Molntjänster', 'Cloud Computing'],
    }, */
];

// Bestäm vilka ID:n som visas på hemsidan (max 3 rekommenderas)
// Ändra denna array för att visa andra entries på hemsidan
const featuredIds: number[] = [13, 12, 1];

// Exportera konfiguration
export const experienceConfig: ExperienceConfig = {
    featured: featuredIds,
    all: allExperiences,
};

// Hjälpfunktion för att hämta featured experiences
export const getFeaturedExperiences = (): Experience[] => {
    return featuredIds
        .map(id => allExperiences.find(exp => exp.id === id))
        .filter((exp): exp is Experience => exp !== undefined);
};

// Hjälpfunktion för att hämta alla experiences
export const getAllExperiences = (): Experience[] => {
    return allExperiences;
};

// Hjälpfunktion för att sortera experiences efter typ
export const getExperiencesByType = (type: Experience['type']): Experience[] => {
    return allExperiences.filter(exp => exp.type === type);
};

// Exportera alla experiences som default
export default allExperiences;
