/**
 * Översättningar / Translations
 *
 * Detta är en dictionary med alla texter på hemsidan på svenska och engelska.
 * Lägg till nya nycklar här för att översätta fler delar av sidan.
 */

export type Language = 'sv' | 'en';

export interface TranslationStrings {
    // Navbar
    nav: {
        skills: string;
        projects: string;
        about: string;
        contact: string;
        goToTop: string;
    };

    // Hero
    hero: {
        greeting: string;
        role: string;
        location: string;
        scrollToProjects: string;
        photoAlt: string;
    };

    // Work section
    work: {
        title: string;
        subtitle: string;
        openProject: string;
    };

    // About section
    about: {
        title: string;
        bio: string[];
        signature: string;
        photoAlt: string;
        cvDownload: {
            title: string;
            buttonSv: string;
            buttonEn: string;
        };
    };

    // Footer
    footer: {
        cta: string;
        copyright: string;
    };

    // Modal
    modal: {
        close: string;
        myRole: string;
        technologies: string;
        viewLive: string;
        viewCode: string;
        liveUnavailable: string;
    };

    // Skills section
    skills: {
        title: string;
        subtitle: string;
        frontend: string;
        backend: string;
        tools: string;
        aidata: string;
    };

    // Experience/CV section
    experience: {
        title: string;
        subtitle: string;
        viewAll: string;
        current: string;
        types: {
            work: string;
            education: string;
            certificate: string;
            volunteer: string;
        };
    };

    // Experience modal
    experienceModal: {
        title: string;
        close: string;
        period: string;
        location: string;
        skills: string;
        types: {
            work: string;
            education: string;
            certificate: string;
            volunteer: string;
        };
    };

    // Experience entries (translations per ID)
    experiences: {
        [key: number]: {
            title: string;
            company: string;
            description: string;
            longDescription?: string;
            location?: string;
            skills?: string[];
        };
    };

    // Projects (behåller struktur men med översättningar)
    projects: {
        [key: number]: {
            title: string;
            category: string;
            desc: string;
            longDesc: string;
            role: string;
        };
    };
}

export const translations: Record<Language, TranslationStrings> = {
    sv: {
        nav: {
            skills: 'Kunskaper',
            projects: 'Projekt',
            about: 'Om Mig',
            contact: 'Kontakt',
            goToTop: 'Gå till toppen av sidan',
        },
        hero: {
            greeting: 'Hej, jag heter Viktor!',
            role: 'Systemutvecklare .NET',
            location: 'Hudiksvall, Hälsingland',
            scrollToProjects: 'Scrolla till projekt',
            photoAlt: 'En bild på Viktor Johansson när han ler mot kameran',
        },
        work: {
            title: 'Utvalda Projekt',
            subtitle: '(Det jag är stoltast över just nu)',
            openProject: 'Öppna projekt:',
        },
        about: {
            title: 'Lite mer om mig',
            bio: [
                'Jag är en fullstack-utvecklare med fokus på .NET, med en bakgrund inom pedagogik, kreativt arbete och lång erfarenhet av att arbeta nära människor. Jag har alltid trivts i sammanhang där kreativitet, struktur och samarbete möts.',
                'Efter år inom musikproduktion, undervisning och elevstöd har jag samlat på mig erfarenheter som kretsar kring samma sak: att förstå människor och lösa problem på ett sätt som fungerar i vardagen. I dag gör jag det genom systemutveckling.',
                'När jag inte kodar hittar du mig med musikprojekt, framför en fotbollsmatch eller samtalandes runt sällskapsspel eller ett bastuaggregat.',
                'Jag studerar till Systemutvecklare .NET med AI-kompetens på Edugrade i Hudiksvall och drivs av att bygga tydliga, användbara lösningar tillsammans med andra.',
                'Jag drivs av att fortsätta växa tekniskt och bidra i ett team.',
            ],
            signature: 'Viktor',
            photoAlt: 'En bild på Viktor Johansson när han blickar bort från kameran',
            cvDownload: {
                title: 'Ta med mitt CV',
                buttonSv: 'CV (Svenska)',
                buttonEn: 'CV (English)',
            },
        },
        footer: {
            cta: 'Hör av dig!',
            copyright: '2026 Viktor Johansson. Created with React.',
        },
        modal: {
            close: 'Stäng modal',
            myRole: 'Min roll',
            technologies: 'Teknologier',
            viewLive: 'Se live',
            viewCode: 'Se kod',
            liveUnavailable: 'Ej tillgänglig på webben',
        },
        skills: {
            title: 'Kompetens',
            subtitle: '(Tekniker jag kan hantera)',
            frontend: 'Frontend',
            backend: 'Backend & Språk',
            tools: 'Databaser & Verktyg',
            aidata: 'AI & Data',
        },
        experience: {
            title: 'Erfarenhet',
            subtitle: '(Vad jag har gjort)',
            viewAll: 'Visa alla',
            current: 'Pågående',
            types: {
                work: 'Arbete',
                education: 'Utbildning',
                certificate: 'Certifikat',
                volunteer: 'Ideellt',
            },
        },
        experienceModal: {
            title: 'Min Erfarenhet',
            close: 'Stäng',
            period: 'Period',
            location: 'Plats',
            skills: 'Färdigheter',
            types: {
                work: 'Arbetslivserfarenhet',
                education: 'Utbildning',
                certificate: 'Certifikat',
                volunteer: 'Ideellt arbete',
            },
        },
        experiences: {
            1: {
                title: 'Elevhandledare',
                company: 'Nordanstigs kommun',
                description: 'Stöttade elever med särskilda behov i grundskolan.',
                longDescription: 'Arbetade som elevhandledare med fokus på att stödja elever med NPF-diagnoser och olika inlärningsbehov. Samarbetade nära elever, pedagoger och vårdnadshavare för att skapa trygghet, struktur, individuellt lärande och personlig utveckling.',
                location: 'Harmånger',
                skills: ['Pedagogik', 'Kommunikation', 'Anpassningsförmåga', 'Empati'],
            },
            2: {
                title: 'Elevresurs',
                company: 'Lekebergs kommun',
                description: 'Stöttade elever med särskilda behov i grundskolan.',
                longDescription: 'Resurs i F–9-verksamhet med ansvar för elever med diabetes. Arbetade även på fritids. Kombinerade praktiskt ansvar med omsorg och socialt stöd.',
                location: 'Fjugesta',
                skills: ['Pedagogik', 'Kommunikation', 'Problemlösning', 'Anpassningsförmåga'],
            },
            3: {
                title: 'Reservdelssäljare',
                company: 'John Deere Forestry Sweden',
                description: 'Sålde reservdelar till kunder inom skogsbruksindustrin.',
                longDescription: 'Säsongsbetonat arbete i kundservice och försäljning av reservdelar. Hjälpte kunder att hitta rätt produkter, gav teknisk rådgivning och hanterade lagerlogistik. Utvecklade mina kunskaper inom fordonsdelar och ERP-system, förbättrade min problemlösnings- samt logistiska förmåga.',
                location: 'Delsbo',
                skills: ['Kundservice', 'Försäljning', 'Produktkunskap', 'Lagerhantering'],
            },
            4: {
                title: 'Kursledare i Musik & Ljudproduktion',
                company: 'Egen regi',
                description: 'Undervisade elever i musik och ljudproduktion på fritidsnivå.',
                longDescription: 'Ledde onlinekurser i musikproduktion för ungdomar (åldrarna 13–21) med fokus på ljudproduktion, musikteori och instrumentundervisning. Utvecklade individuella lektionsplaner, organiserade konserter och workshops samt inspirerade elever att utforska sin kreativitet genom musik.',
                location: 'Hudiksvall',
                skills: ['Undervisning', 'Musikteori', 'Ljudproduktion', 'Kommunikation'],
            },
            5: {
                title: 'Butiksbiträde',
                company: 'Systembolaget',
                description: 'Arbetade i kundservice och försäljning på Systembolaget.',
                longDescription: 'Säsongsbetonat arbete. Ansvarade för kundservice, produktkunskap och kassahantering i en butiksmiljö. Hjälpte kunder att hitta produkter, gav rekommendationer efter kundens behov samt utvecklade mina logistiska kunskaper.',
                location: 'Hudiksvall',
                skills: ['Kundservice', 'Försäljning', 'Produktkunskap', 'Kassahantering'],
            },
            6: {
                title: 'Vikarierande museipedagog',
                company: 'Hudiksvalls museum',
                description: 'Ledde workshops och guidade besökare på museet.',
                longDescription: 'Arbetade som vikarie på Hudiksvalls museum under höstsäsongen. Ledde pedagogiska workshops för barn och vuxna, guidade grupper genom utställningar och hjälpte till med evenemangsplanering. Fick erfarenhet av att kommunicera historiskt innehåll på ett engagerande sätt.',
                location: 'Hudiksvall',
                skills: ['Pedagogik', 'Kommunikation', 'Eventplanering', 'Kundservice'],
            },
            7: {
                title: 'Lärarvikarie & Elevresurs',
                company: 'Hudiksvalls kommun',
                description: 'Vikarierade som lärare & senare som elevresurs i grundskolan och gymnasium.',
                longDescription: 'Arbetade som lärarvikarie i grundskolan med ansvar för att undervisa. Senare anställdes jag som elevresurs för att stödja elever med särskilda behov. Samarbetade med lärare och föräldrar för att skapa en inkluderande lärmiljö.',
                location: 'Hudiksvall',
                skills: ['Lyhördhet', 'Pedagogik', 'Anpassningsförmåga', 'Kommunikation'],
            },
            8: {
                title: 'Vårdbiträde & Personlig Assistent',
                company: 'Hudiksvalls kommun',
                description: 'Säsongsbetonat arbetade som vårdbiträde på hemtjänst, gruppboende och personlig assistent.',
                longDescription: 'Erbjöd omsorg och stöd till äldre och personer med funktionsnedsättningar. Arbetet inkluderade personlig hygien, medicinering, måltidsstöd och social interaktion. Utvecklade empati, tålamod och förmåga att arbeta i team inom vårdsektorn.',
                location: 'Hudiksvall',
                skills: ['Omsorg', 'Empati', 'Kommunikation', 'Tålamod'],
            },
            9: {
                title: 'Ljudtekniker & Musikproducent',
                company: 'Egen regi, Gigant Kulturkollektiv',
                description: 'Arbetar med ljudproduktion och live-ljudteknik.',
                longDescription: 'Ansvarar för ljudproduktion, mixning och mastering av musikprojekt. Producerar musik och samarbetar med artister inom pop, hiphop och elektronisk musik. Ansvarar för hela produktionskedjan, från idé till färdig master.',
                skills: ['Ljudproduktion', 'Mixning', 'Mastering', 'Live-ljudteknik', 'Kundkontakt'],
            },
            10: {
                title: 'Receptionspersonal',
                company: 'Perth Youth Hostel',
                description: 'Ansvarade för in- och utcheckning samt kundservice.',
                longDescription: 'Arbetade som receptionspersonal på ett vandrarhem i Perth, Skottland. Hanterade in- och utcheckningar, bokningar och gav information om lokala sevärdheter. Utvecklade starka kommunikationsfärdigheter och förmåga att arbeta i en snabb miljö med internationella gäster.',
                skills: ['Kundservice', 'Kommunikation', 'Organisation', 'Problemlösning'],
                location: 'Perth, Skottland',
            },
            11: {
                title: 'Konfirmationsledare',
                company: 'Forsa-Högs församling',
                description: 'Ledde konfirmandgrupper och organiserade aktiviteter för ungdomar.',
                longDescription: 'Ideellt arbete som konfirmationsledare i Forsa-Högs församling. Ansvarade för att planera, genomföra samt leda gruppaktiviteter och skapa en trygg miljö för ungdomar att utforska sin personliga utveckling. Med åren ökade mitt ansvar då jag blev drivande i att utveckla och stötta ledargruppen med fokus på gruppdynamik, planering och social utveckling.',
                skills: ['Ledarskap', 'Pedagogik', 'Kommunikation', 'Organisationsförmåga'],
            },
            12: {
                title: 'Klassrepresentant i ledningsgrupp',
                company: 'Edugrade',
                description: 'Representerar studenternas åsikter och bidrar till utbildningens utveckling.',
                longDescription: 'Representerar eleverna i ledningsgruppen och deltar i beslut om utbildningens innehåll, kvalitet och utveckling. Bidrar med elevperspektiv och kommunikation mellan klass, skolledning och branschen.',
                skills: ['Kommunikation', 'Intressenthantering', 'Påverkansarbete', 'Samarbete'],
            },
            13: {
                title: 'Systemutvecklare .NET med AI-kompetens',
                company: 'Edugrade',
                description: 'Tvåårig YH-utbildning med fokus på systemutveckling i .NET, webbutveckling, databaser och AI.',
                longDescription: 'Tvåårig yrkeshögskoleutbildning med fokus på objektorienterad programmering i C# och .NET. Utbildningen omfattar frontendutveckling med HTML, CSS och JavaScript, backendutveckling i ASP.NET, databaser, designmönster, arkitektur samt projektledning med agila metoder. Innehåller även kurser i DevOps, molnbaserade AI-komponenter i Microsoft Azure samt en längre LIA-period och examensarbete med tydlig koppling till näringslivet.',
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
            14: {
                title: 'Musikproduktion & Ljudteknik',
                company: 'Umeå Universitet',
                description: 'Skapande Musik - Musikproduktion & Ljudteknik',
                longDescription: 'Musikproduktion & Ljudteknik med inriktning mot skapande musik. Studier inkluderade ljudinspelning, mixning, mastering, musikteori, arrangering och produktionstekniker. Praktiska projekt inom olika musikgenrer samt samarbete med artister och producenter för att utveckla en professionell portfölj.',
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
            15: {
                title: 'Gymnasieexamen, Samhällsvetenskapliga programmet - Medier, information & kommunikation',
                company: 'Bromangymnasiet',
                description: 'Samhällsvetenskapliga programmet med inriktning mot medier, information & kommunikation.',
                longDescription: 'Studier inom samhällsvetenskap med fokus på medier, information och kommunikation. Kurser inkluderade journalistik, medieproduktion, kommunikationsteori, samhällskunskap och projektarbete inom medieproduktion. Praktiska erfarenheter av att skapa innehåll för olika medier samt utveckling av kritiskt tänkande och analysförmåga.',
                location: 'Hudiksvall',
                skills: [
                    'Medieproduktion',
                    'Kommunikation',
                    'Journalistik',
                    'Samhällskunskap',
                ],
            },
        },
        projects: {
            1: {
                title: 'Ducklord Chatking',
                category: 'C# + Raylib',
                desc: 'En chatklient skapad i C# med hjälp av ramverket Raylib.',
                longDesc: 'Ducklord Chatking är en realtids-chatklient utvecklad i C# med Raylib-ramverket. Programmet visar hur man kan hantera användargränssnitt, trådar och grafisk rendering i ett chattprogram. Klienten har stöd för flera användare, möjlighet att välja inloggningsuppgifter, färgkodade meddelanden samt en charmig anka som maskot.',
                role: 'Fullstack-utvecklare i team - klient-server-kommunikation och bidrog till UI-implementation för att visualisera och hantera kommunikationsdata.',
            },
            2: {
                title: 'Ink & Render',
                category: 'Parsing & AST',
                desc: 'En ramverksfri Markdown-editor med realtidsförhandsvisning, byggd som ett modulärt projekt i ren vanilla JavaScript.',
                longDesc: 'Ink & Render är en från-grunden-byggd Markdown-editor som demonstrerar parsning och AST-hantering (Abstract Syntax Tree). Editorn konverterar Markdown till HTML i realtid utan externa bibliotek. Projektet är uppbyggt modulärt med separation mellan lexer, parser och renderer, vilket gör koden lätt att förstå och utöka.',
                role: 'Ensam utvecklare - designade och implementerade hela parsningslogiken från grunden.',
            },
            3: {
                title: '[ ASCII_FORGE ]',
                category: 'Fullstack WEB App',
                desc: 'En fullstack webbaserad ASCII-generator som konverterar bilder till textbaserad grafik i realtid, byggd med Angular och ASP.NET.',
                longDesc: 'Detta projekt är en fullstack webbaserad ASCII-generator som konverterar bilder till textbaserad grafik i realtid. Frontend är byggd i Angular och erbjuder ett terminalinspirerat gränssnitt med direkta visuella uppdateringar baserat på användarens inställningar. Backend är implementerad i ASP.NET och ansvarar för bildbehandling, luminansberäkning och mappning av pixlar till olika ASCII-teckenuppsättningar. Applikationen stödjer flera ASCII-bibliotek samt justering av bredd, ljusstyrka, gamma och färginvertering.',
                role: 'Ensam utvecklare',
            },
            4: {
                title: 'ELLA 2.0 - Booking & Admin System',
                category: 'Fullstack + ABAC',
                desc: 'Boknings och administrationssystem för skolor med flera studieorter, byggt med Angular och ASP.NET Core.',
                longDesc: 'ELLA 2.0 är en ombyggnad av ELLA 1.0 och ett komplett boknings och administrationssystem för skolor med flera studieorter. Där ettan var byggd med Node.js, Express och vanilla JavaScript är tvåan byggd med Angular och ASP.NET Core. Elever och lärare bokar salar och resurser, bjuder in klasser och administrerar allt i en rollstyrd adminpanel. Systemet har dynamiska rollmallar med individuella overrides, CSV import av antagningslistor, återkommande bokningsserier och publika bokningslänkar för externa gäster.',
                role: 'Fullstack-utvecklare i team - backend, behörighetssystem och bokningsflöden.',
            },
            5: {
                title: 'Buggernaut',
                category: 'CLI + LLM',
                desc: 'CLI verktyg i .NET som genererar C# övningar med buggar via valfri LLM leverantör.',
                longDesc: 'Buggernaut är ett CLI verktyg som genererar C# övningar med inbyggda buggar via en LLM leverantör du själv väljer. Du kör ett kommando, verktyget frågar en AI om en övning och skriver ut en .cs fil med en medveten bugg plus en tillhörande testfil. Din uppgift är att hitta och fixa buggen tills testerna blir gröna. Verktyget har också hint och explain kommandon och stödjer Gemini, OpenAI, Anthropic, Mistral, Ollama och OpenRouter.',
                role: 'Ensam utvecklare - designade och implementerade hela verktyget från grunden.',
            },
            6: {
                title: 'Bedömningsverktyg',
                category: 'Angular + ASP.NET',
                desc: 'Mobilanpassat webbverktyg som förenklar dokumentation och bedömning vid beredskapsutbildningar.',
                longDesc: 'Bedömningsverktyget är framtaget för Johan Delin och ersätter manuell hantering av foton, anteckningar och bedömningar med ett mobilanpassat webbgränssnitt. Användaren skapar utbildningstillfällen med grupper och deltagare i en egen mappstruktur, tar anteckningar, foton och ljudinspelningar kopplat till utbildning, grupp eller deltagare och får en sammanställd vy per deltagare som förenklar rapportering. Backend är ASP.NET Core Minimal API med SQLite och EF Core, frontend är Angular och drift sker med Docker.',
                role: 'Utvecklare i team - testade även rollen som scrum master.',
            },
            7: {
                title: '30-0 - Allsvenskt Draftspel',
                category: 'React + C# + Spel',
                desc: 'Webbaserat draftspel där du bygger ett Allsvenskt drömlag från 25 säsonger och spelar en 30 matchers säsong.',
                longDesc: '30-0 är den allsvenska versionen av 82-0 och 38-0. Du bygger en all-star XI från fler än 6 700 spelarsäsonger från 2001 till idag, snurrar hjulet för att landa på en klubb och säsong, draftar spelare till din formation och simulerar sedan en hel 30 matchers säsong mot 15 AI styrda motståndare. Spelet har sex formationer, squad first och position first draft, reroll mekanik, OVR betyg per position, season och peak lägen, minut för minut matchmotor och ett Text TV inspirerat gränssnitt. Datan kommer från FBref och bearbetas med C# till statiska datafiler.',
                role: 'Ensam utvecklare - speldesign, data, simulering och frontend från grunden.',
            },
            8: {
                title: 'Learnpoint Extension (EPA)',
                category: 'Arkitektur + AI',
                desc: 'Händelsedriven studiebevakare som hämtar kurser från Learnpoint, sammanfattar nya veckor med AI och skickar SMS notiser.',
                longDesc: 'Learnpoint Extension bevakar kurser i Learnpoint och hjälper till med studierna genom att sammanfatta nytt innehåll per vecka, skicka SMS teasers och skapa övningsuppgifter. Systemet är händelsedrivet med en egen eventbuss i minnet: nytt innehåll ger event för synk, nya veckor ger event med ett Gemini anrop per vecka och sparade sammanfattningar ger event som parallellt skriver markdown filer, skickar SMS via 46elks och skapar övningar via Buggernaut. Utanför coreservice finns en fristående scraper service i Node.js med Puppeteer plus en console client för läsning, triggers och prenumeranter.',
                role: 'Ensam utvecklare - designade arkitektur, eventkedja och alla integrationer från grunden.',
            },
            9: {
                title: 'preNostros - AI Book Circle Chat',
                category: '.NET + React + AI',
                desc: 'Bokcirkelchatt med generativ AI där du diskuterar böcker med en AI samtalspartner och sparar anteckningar och betyg.',
                longDesc: 'preNostros är en chatt där du diskuterar böcker med en AI samtalspartner och sparar citat, tankar, analyser och betyg som anteckningar. Tanken är en MVP som visar att det går att integrera LLM mot Nostos produkten. Backend är ett Minimal API med EF Core och SQLite, frontend i React är en terminalren yta där alla vägar in går via kommandon som /bok och /samtal. ChatService bygger systemprompt av roll plus bok plus anteckningar plus historik och strömmar svar som SSE från Azure OpenAI.',
                role: 'Ensam utvecklare - designade och implementerade backend, frontend och AI flöde från grunden.',
            },
        },
    },
    en: {
        nav: {
            skills: 'Skills',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            goToTop: 'Go to top of page',
        },
        hero: {
            greeting: "Hi, I'm Viktor!",
            role: '.NET Systems Developer',
            location: 'Hudiksvall, Sweden',
            scrollToProjects: 'Scroll to projects',
            photoAlt: 'A photo of Viktor Johansson smiling at the camera',
        },
        work: {
            title: 'Selected Projects',
            subtitle: '(What I\'m most proud of right now)',
            openProject: 'Open project:',
        },
        about: {
            title: 'A bit more about me',
            bio: [
                "I'm a fullstack developer focusing on .NET, with a background in education, creative work, and extensive experience working closely with people. I've always thrived in environments where creativity, structure, and collaboration meet.",
                "After years in music production, teaching, and student support, I've gathered experiences that revolve around the same thing: understanding people and solving problems in ways that work in everyday life. Today, I do that through systems development.",
                "When I'm not coding, you'll find me working on music projects, watching a football match, or chatting around board games or a sauna.",
                "I'm studying to become a .NET Systems Developer with AI competence at Edugrade in Hudiksvall, driven by building clear, useful solutions together with others.",
                "I'm driven by continuing to grow technically and contributing to a team.",
            ],
            signature: 'Viktor',
            photoAlt: 'A photo of Viktor Johansson looking away from the camera',
            cvDownload: {
                title: 'Get my CV',
                buttonSv: 'CV (Swedish)',
                buttonEn: 'CV (English)',
            },
        },
        footer: {
            cta: 'Get in touch!',
            copyright: '2026 Viktor Johansson. Created with React.',
        },
        modal: {
            close: 'Close modal',
            myRole: 'My Role',
            technologies: 'Technologies',
            viewLive: 'View Live',
            viewCode: 'View Code',
            liveUnavailable: 'Not available online',
        },
        skills: {
            title: 'My Skills',
            subtitle: '(Technologies I can handle)',
            frontend: 'Frontend',
            backend: 'Backend & Languages',
            tools: 'Databases & Tools',
            aidata: 'AI & Data',
        },
        experience: {
            title: 'Experience',
            subtitle: '(What I\'ve done)',
            viewAll: 'View all',
            current: 'Current',
            types: {
                work: 'Work',
                education: 'Education',
                certificate: 'Certificate',
                volunteer: 'Volunteer',
            },
        },
        experienceModal: {
            title: 'My Experience',
            close: 'Close',
            period: 'Period',
            location: 'Location',
            skills: 'Skills',
            types: {
                work: 'Work Experience',
                education: 'Education',
                certificate: 'Certificates',
                volunteer: 'Volunteer Work',
            },
        },
        experiences: {
            1: {
                title: 'Student Supervisor',
                company: 'Nordanstig Municipality',
                description: 'Supported students with special needs in elementary school.',
                longDescription: 'Worked as a student supervisor focusing on supporting students with neuropsychiatric diagnoses and various learning needs. Collaborated closely with students, educators, and guardians to create safety, structure, individualized learning, and personal development.',
                location: 'Harmånger',
                skills: ['Pedagogy', 'Communication', 'Adaptability', 'Empathy'],
            },
            2: {
                title: 'Student Support Worker',
                company: 'Lekeberg Municipality',
                description: 'Supported students with special needs in elementary school.',
                longDescription: 'Resource in K-9 education with responsibility for students with diabetes. Also worked in after-school care. Combined practical responsibility with care and social support.',
                location: 'Fjugesta',
                skills: ['Pedagogy', 'Communication', 'Problem Solving', 'Adaptability'],
            },
            3: {
                title: 'Spare parts salesperson',
                company: 'John Deere Forestry Sweden',
                description: 'Sold spare parts to customers in the forestry industry.',
                longDescription: 'Worked as a spare parts salesperson at John Deere Forestry Sweden. Responsible for assisting customers in finding the right spare parts for their forestry equipment, providing product information, and processing orders. Developed strong communication skills and in-depth knowledge of forestry machinery and parts.',
                location: 'Delsbo',
                skills: ['Customer Service', 'Sales', 'Product Knowledge', 'Inventory Management'],
            },
            4: {
                title: 'Music & Audio Production Instructor',
                company: 'Self-employed',
                description: 'Taught students music and audio production at a recreational level.',
                longDescription: 'Led online courses in music production for youth (ages 13–21) focusing on audio production, music theory, and instrument instruction. Developed individual lesson plans, organized concerts and workshops, and inspired students to explore their creativity through music.',
                location: 'Hudiksvall',
                skills: ['Teaching', 'Music Theory', 'Audio Production', 'Communication'],
            },
            5: {
                title: 'Sales Associate',
                company: 'Systembolaget',
                description: 'Worked in customer service and sales at Systembolaget.',
                longDescription: 'Seasonal work. Responsible for customer service, product knowledge, and cash handling in a retail environment. Helped customers find products, provided recommendations based on customer needs, and developed logistics skills.',
                location: 'Hudiksvall',
                skills: ['Customer Service', 'Sales', 'Product Knowledge', 'Cash Handling'],
            },
            6: {
                title: 'Substitute Museum Educator',
                company: 'Hudiksvall Museum',
                description: 'Led workshops and guided visitors at the museum.',
                longDescription: 'Worked as a substitute at Hudiksvall Museum during the autumn season. Led educational workshops for children and adults, guided groups through exhibitions, and assisted with event planning. Gained experience communicating historical content in an engaging way.',
                location: 'Hudiksvall',
                skills: ['Pedagogy', 'Communication', 'Event Planning', 'Customer Service'],
            },
            7: {
                title: 'Substitute Teacher & Student Support',
                company: 'Hudiksvall Municipality',
                description: 'Substitute teacher & later student support in elementary and high school.',
                longDescription: 'Worked as a substitute teacher in elementary school with responsibility for teaching. Later employed as student support to help students with special needs. Collaborated with teachers and parents to create an inclusive learning environment.',
                location: 'Hudiksvall',
                skills: ['Attentiveness', 'Pedagogy', 'Adaptability', 'Communication'],
            },
            8: {
                title: 'Care Assistant & Personal Assistant',
                company: 'Hudiksvall Municipality',
                description: 'Seasonal work as care assistant in home care, group housing, and personal assistant.',
                longDescription: 'Provided care and support to elderly and people with disabilities. Work included personal hygiene, medication, meal support, and social interaction. Developed empathy, patience, and ability to work in teams within the healthcare sector.',
                location: 'Hudiksvall',
                skills: ['Care', 'Empathy', 'Communication', 'Patience'],
            },
            9: {
                title: 'Audio Engineer & Music Producer',
                company: 'Self-employed, Gigant Kulturkollektiv',
                description: 'Works with audio production and live sound engineering.',
                longDescription: 'Responsible for audio production, mixing, and mastering of music projects. Produces music and collaborates with artists in pop, hip-hop, and electronic music. Manages the entire production chain, from idea to finished master.',
                location: 'Hudiksvall',
                skills: ['Audio Production', 'Mixing', 'Mastering', 'Live Sound Engineering', 'Client Relations'],
            },
            10: {
                title: 'Reception Staff',
                company: 'Perth Youth Hostel',
                description: 'Responsible for check-in/check-out and customer service.',
                longDescription: 'Worked as reception staff at a youth hostel in Perth, Scotland. Handled check-ins and check-outs, bookings, and provided information about local attractions. Developed strong communication skills and ability to work in a fast-paced environment with international guests.',
                location: 'Perth, Scotland',
                skills: ['Customer Service', 'Communication', 'Organization', 'Problem Solving'],
            },
            11: {
                title: 'Confirmation Leader',
                company: 'Forsa-Högs Parish',
                description: 'Led confirmation groups and organized activities for youth.',
                longDescription: 'Volunteer work as confirmation leader in Forsa-Högs parish. Responsible for planning, executing, and leading group activities and creating a safe environment for youth to explore their personal development. Over the years, my responsibility increased as I became a driving force in developing and supporting the leadership team with focus on group dynamics, planning, and social development.',
                location: 'Forsa, Hudiksvall',
                skills: ['Leadership', 'Pedagogy', 'Communication', 'Organizational Skills'],
            },
            12: {
                title: 'Class Representative in Management Group',
                company: 'Edugrade',
                description: 'Represents student opinions and contributes to education development.',
                longDescription: 'Represents students in the management group and participates in decisions about education content, quality, and development. Contributes with student perspective and communication between class, school management, and industry.',
                location: 'Hudiksvall',
                skills: ['Communication', 'Stakeholder Management', 'Advocacy', 'Collaboration'],
            },
            13: {
                title: '.NET Systems Developer with AI Competence',
                company: 'Edugrade',
                description: 'Two-year vocational education focusing on .NET systems development, web development, databases, and AI.',
                longDescription: 'Two-year vocational higher education focusing on object-oriented programming in C# and .NET. The education covers frontend development with HTML, CSS, and JavaScript, backend development in ASP.NET, databases, design patterns, architecture, and project management with agile methods. Also includes courses in DevOps, cloud-based AI components in Microsoft Azure, and an extended internship period and thesis with clear industry connection.',
                location: 'Hudiksvall',
                skills: [
                    'C#',
                    '.NET',
                    'ASP.NET',
                    'Object-Oriented Programming',
                    'SQL',
                    'Databases',
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Agile Methods',
                    'Design Patterns',
                    'Microsoft Azure',
                    'DevOps'
                ],
            },
            14: {
                title: 'Music Production & Audio Engineering',
                company: 'Umeå University',
                description: 'Creative Music - Music Production & Audio Engineering',
                longDescription: 'Music Production & Audio Engineering with focus on creative music. Studies included audio recording, mixing, mastering, music theory, arranging, and production techniques. Practical projects in various music genres and collaboration with artists and producers to develop a professional portfolio.',
                location: 'Umeå',
                skills: [
                    'Music Production',
                    'Audio Engineering',
                    'Mixing',
                    'Mastering',
                    'Music Theory',
                    'Digital Audio Workstations (DAW)',
                    'Live Sound Engineering'
                ],
            },
            15: {
                title: 'High School Diploma, Social Sciences - Media, Information & Communication',
                company: 'Bromangymnasiet',
                description: 'Social Sciences program with focus on media, information & communication.',
                longDescription: 'Studies in social sciences with focus on media, information, and communication. Courses included journalism, media production, communication theory, social studies, and project work in media production. Practical experience creating content for various media and development of critical thinking and analytical skills.',
                location: 'Hudiksvall',
                skills: [
                    'Media Production',
                    'Communication',
                    'Journalism',
                    'Social Studies',
                ],
            },
        },
        projects: {
            1: {
                title: 'Ducklord Chatking',
                category: 'C# + Raylib',
                desc: 'A chat client built in C# using the Raylib framework.',
                longDesc: 'Ducklord Chatking is a real-time chat client developed in C# with the Raylib framework. The program shows how to handle user interfaces, threads and graphical rendering in a chat application. The client supports multiple users, login selection, color coded messages and a charming duck mascot.',
                role: 'Fullstack developer in team - client server communication and UI implementation for visualizing and handling communication data.',
            },
            2: {
                title: 'Ink & Render',
                category: 'Parsing & AST',
                desc: 'A framework-free Markdown editor with live preview, built as a modular project in pure vanilla JavaScript.',
                longDesc: 'Ink & Render is a from-scratch Markdown editor that demonstrates parsing and AST (Abstract Syntax Tree) handling. The editor converts Markdown to HTML in real-time without external libraries. The project is built modularly with separation between lexer, parser and renderer, making the code easy to understand and extend.',
                role: 'Solo developer - designed and implemented the entire parsing logic from scratch.',
            },
            3: {
                title: '[ ASCII_FORGE ]',
                category: 'Fullstack Web App',
                desc: 'A fullstack web-based ASCII generator that converts images to text-based graphics in real-time, built with Angular and ASP.NET.',
                longDesc: 'This project is a fullstack web-based ASCII generator that converts images to text-based graphics in real-time. The frontend is built in Angular with a terminal inspired interface and direct visual updates. The backend is implemented in ASP.NET and handles image processing, luminance calculation and mapping of pixels to ASCII character sets. The app supports multiple ASCII libraries plus adjustment of width, brightness, gamma and color inversion.',
                role: 'Solo developer',
            },
            4: {
                title: 'ELLA 2.0 - Booking & Admin System',
                category: 'Fullstack + ABAC',
                desc: 'Booking and admin system for schools with multiple campuses, built with Angular and ASP.NET Core.',
                longDesc: 'ELLA 2.0 is a rebuild of ELLA 1.0 and a complete booking and admin system for schools with multiple campuses. Where the first version used Node.js, Express and vanilla JavaScript, the second uses Angular and ASP.NET Core. Students and teachers book rooms and resources, invite classes and manage everything in a role based admin panel. The system has dynamic role templates with individual overrides, CSV import of admission lists, recurring booking series and public booking links for external guests.',
                role: 'Fullstack developer in team - backend, permission system and booking flows.',
            },
            5: {
                title: 'Buggernaut',
                category: 'CLI + LLM',
                desc: 'CLI tool in .NET that generates C# exercises with bugs through a chosen LLM provider.',
                longDesc: 'Buggernaut is a CLI tool that generates C# exercises with built in bugs through an LLM provider of your choice. You run a command, the tool asks an AI for an exercise and writes a .cs file with an intentional bug plus a matching test file. Your task is to find and fix the bug until the tests turn green. The tool also has hint and explain commands and supports Gemini, OpenAI, Anthropic, Mistral, Ollama and OpenRouter.',
                role: 'Solo developer - designed and implemented the whole tool from scratch.',
            },
            6: {
                title: 'Assessment Tool',
                category: 'Angular + ASP.NET',
                desc: 'Mobile friendly web tool that simplifies documentation and assessment in preparedness training.',
                longDesc: 'The assessment tool was built for Johan Delin and replaces manual handling of photos, notes and assessments with a mobile friendly web interface. The user creates training sessions with groups and participants in a custom folder structure, takes notes, photos and audio recordings linked to session, group or participant and gets a compiled view per participant that simplifies reporting. Backend is ASP.NET Core Minimal API with SQLite and EF Core, frontend is Angular and hosting uses Docker.',
                role: 'Developer in team - also tried the role of scrum master.',
            },
            7: {
                title: '30-0 - Allsvenskan Draft Game',
                category: 'React + C# + Game',
                desc: 'Web based draft game where you build an Allsvenskan dream team from 25 seasons and play a 30 match season.',
                longDesc: '30-0 is the Allsvenskan version of 82-0 and 38-0. You build an all-star XI from more than 6,700 player seasons from 2001 until today, spin the wheel to land on a club and season, draft players into your formation and then simulate a full 30 match season against 15 AI controlled opponents. The game has six formations, squad first and position first draft, reroll mechanics, OVR ratings per position, season and peak modes, minute by minute match engine and a Text TV inspired interface. Data comes from FBref and is processed with C# into static data files.',
                role: 'Solo developer - game design, data, simulation and frontend from scratch.',
            },
            8: {
                title: 'Learnpoint Extension (EPA)',
                category: 'Architecture + AI',
                desc: 'Event driven study tracker that fetches courses from Learnpoint, summarizes new weeks with AI and sends SMS notifications.',
                longDesc: 'Learnpoint Extension monitors courses in Learnpoint and supports studies by summarizing new content per week, sending SMS teasers and creating practice tasks. The system is event driven with an in memory event bus: new content triggers sync, new weeks trigger one Gemini call per week and saved summaries trigger parallel writing of markdown files, SMS through 46elks and exercises through Buggernaut. Outside the core service there is a standalone scraper service in Node.js with Puppeteer plus a console client for reading, triggers and subscribers.',
                role: 'Solo developer - designed architecture, event chain and all integrations from scratch.',
            },
            9: {
                title: 'preNostros - AI Book Circle Chat',
                category: '.NET + React + AI',
                desc: 'Book circle chat with generative AI where you discuss books with an AI partner and save notes and ratings.',
                longDesc: 'preNostros is a chat where you discuss books with an AI partner and save quotes, thoughts, analysis and ratings as notes. The idea is an MVP that proves LLM integration against the Nostos product is possible. Backend is a Minimal API with EF Core and SQLite, frontend in React is a terminal style surface where every path goes through commands like /bok and /samtal. ChatService builds a system prompt from role plus book plus notes plus history and streams answers as SSE from Azure OpenAI.',
                role: 'Solo developer - designed and implemented backend, frontend and AI flow from scratch.',
            },
        },
    },
};
