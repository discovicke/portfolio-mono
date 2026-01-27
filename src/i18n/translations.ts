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
        lia: string;
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
            lia: 'LIA DEC 2026 - MAJ 2027',
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
                'Just nu söker jag en miljö där jag kan fortsätta växa tekniskt och bidra i ett team.',
            ],
            signature: 'Viktor',
            photoAlt: 'En bild på Viktor Johansson när han blickar bort från kameran',
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
            },
            2: {
                title: 'Elevresurs',
                company: 'Lekebergs kommun',
                description: 'Stöttade elever med särskilda behov i grundskolan.',
                longDescription: 'Resurs i F–9-verksamhet med ansvar för elever med diabetes. Arbetade även på fritids. Kombinerade praktiskt ansvar med omsorg och socialt stöd.',
            },
            3: {
                title: 'Kursledare i Musik & Ljudproduktion',
                company: 'Egen regi',
                description: 'Undervisade elever i musik och ljudproduktion på fritidsnivå.',
                longDescription: 'Ledde onlinekurser i musikproduktion för ungdomar (åldrarna 13–21) med fokus på ljudproduktion, musikteori och instrumentundervisning. Utvecklade individuella lektionsplaner, organiserade konserter och workshops samt inspirerade elever att utforska sin kreativitet genom musik.',
            },
            4: {
                title: 'Butiksbiträde',
                company: 'Systembolaget',
                description: 'Arbetade i kundservice och försäljning på Systembolaget.',
                longDescription: 'Säsongsbetonat arbete. Ansvarade för kundservice, produktkunskap och kassahantering i en butiksmiljö. Hjälpte kunder att hitta produkter, gav rekommendationer efter kundens behov samt utvecklade mina logistiska kunskaper.',
            },
            5: {
                title: 'Vikarierande museipedagog',
                company: 'Hudiksvalls museum',
                description: 'Ledde workshops och guidade besökare på museet.',
                longDescription: 'Arbetade som vikarie på Hudiksvalls museum under höstsäsongen. Ledde pedagogiska workshops för barn och vuxna, guidade grupper genom utställningar och hjälpte till med evenemangsplanering. Fick erfarenhet av att kommunicera historiskt innehåll på ett engagerande sätt.',
            },
            6: {
                title: 'Lärarvikarie & Elevresurs',
                company: 'Hudiksvalls kommun',
                description: 'Vikarierade som lärare & senare som elevresurs i grundskolan och gymnasium.',
                longDescription: 'Arbetade som lärarvikarie i grundskolan med ansvar för att undervisa. Senare anställdes jag som elevresurs för att stödja elever med särskilda behov. Samarbetade med lärare och föräldrar för att skapa en inkluderande lärmiljö.',
            },
            7: {
                title: 'Vårdbiträde & Personlig Assistent',
                company: 'Hudiksvalls kommun',
                description: 'Säsongsbetonat arbetade som vårdbiträde på hemtjänst, gruppboende och personlig assistent.',
                longDescription: 'Erbjöd omsorg och stöd till äldre och personer med funktionsnedsättningar. Arbetet inkluderade personlig hygien, medicinering, måltidsstöd och social interaktion. Utvecklade empati, tålamod och förmåga att arbeta i team inom vårdsektorn.',
            },
            8: {
                title: 'Ljudtekniker & Musikproducent',
                company: 'Egen regi, Gigant Kulturkollektiv',
                description: 'Arbetar med ljudproduktion och live-ljudteknik.',
                longDescription: 'Ansvarar för ljudproduktion, mixning och mastering av musikprojekt. Producerar musik och samarbetar med artister inom pop, hiphop och elektronisk musik. Ansvarar för hela produktionskedjan, från idé till färdig master.',
            },
            9: {
                title: 'Receptionspersonal',
                company: 'Perth Youth Hostel',
                description: 'Ansvarade för in- och utcheckning samt kundservice.',
                longDescription: 'Arbetade som receptionspersonal på ett vandrarhem i Perth, Skottland. Hanterade in- och utcheckningar, bokningar och gav information om lokala sevärdheter. Utvecklade starka kommunikationsfärdigheter och förmåga att arbeta i en snabb miljö med internationella gäster.',
            },
            10: {
                title: 'Konfirmationsledare',
                company: 'Forsa-Högs församling',
                description: 'Ledde konfirmandgrupper och organiserade aktiviteter för ungdomar.',
                longDescription: 'Ideellt arbete som konfirmationsledare i Forsa-Högs församling. Ansvarade för att planera, genomföra samt leda gruppaktiviteter och skapa en trygg miljö för ungdomar att utforska sin personliga utveckling. Med åren ökade mitt ansvar då jag blev drivande i att utveckla och stötta ledargruppen med fokus på gruppdynamik, planering och social utveckling.',
            },
            11: {
                title: 'Klassrepresentant i ledningsgrupp',
                company: 'Edugrade',
                description: 'Representerar studenternas åsikter och bidrar till utbildningens utveckling.',
                longDescription: 'Representerar eleverna i ledningsgruppen och deltar i beslut om utbildningens innehåll, kvalitet och utveckling. Bidrar med elevperspektiv och kommunikation mellan klass, skolledning och branschen.',
            },
            12: {
                title: 'Systemutvecklare .NET med AI-kompetens',
                company: 'Edugrade',
                description: 'Tvåårig YH-utbildning med fokus på systemutveckling i .NET, webbutveckling, databaser och AI.',
                longDescription: 'Tvåårig yrkeshögskoleutbildning med fokus på objektorienterad programmering i C# och .NET. Utbildningen omfattar frontendutveckling med HTML, CSS och JavaScript, backendutveckling i ASP.NET, databaser, designmönster, arkitektur samt projektledning med agila metoder. Innehåller även kurser i DevOps, molnbaserade AI-komponenter i Microsoft Azure samt en längre LIA-period och examensarbete med tydlig koppling till näringslivet.',
            },
            13: {
                title: 'Musikproduktion & Ljudteknik',
                company: 'Umeå Universitet',
                description: 'Skapande Musik - Musikproduktion & Ljudteknik',
                longDescription: 'Musikproduktion & Ljudteknik med inriktning mot skapande musik. Studier inkluderade ljudinspelning, mixning, mastering, musikteori, arrangering och produktionstekniker. Praktiska projekt inom olika musikgenrer samt samarbete med artister och producenter för att utveckla en professionell portfölj.',
            },
            14: {
                title: 'Gymnasieexamen, Samhällsvetenskapliga programmet - Medier, information & kommunikation',
                company: 'Bromangymnasiet',
                description: 'Samhällsvetenskapliga programmet med inriktning mot medier, information & kommunikation.',
                longDescription: 'Studier inom samhällsvetenskap med fokus på medier, information och kommunikation. Kurser inkluderade journalistik, medieproduktion, kommunikationsteori, samhällskunskap och projektarbete inom medieproduktion. Praktiska erfarenheter av att skapa innehåll för olika medier samt utveckling av kritiskt tänkande och analysförmåga.',
            },
        },
        projects: {
            1: {
                title: 'Ducklord Chatking',
                category: 'C# + ASP.NET',
                desc: 'En chatklient skapad i C# med hjälp av ramverket Raylib.',
                longDesc: 'Ducklord Chatking är en realtids-chatklient utvecklad i C# med Raylib-ramverket. Programmet visar hur man kan hantera användargränssnitt, trådar och grafisk rendering i ett chattprogram. Klienten har stöd för flera användare, möjlighet att välja inloggningsuppgifter, färgkodade meddelanden samt en charmig anka som maskot.',
                role: 'Fullstack-utvecklare i team - klient-server-kommunikation och bidrog till UI-implementation för att visualisera och hantera kommunikationsdata.',
            },
            2: {
                title: 'Advent of Code 2025',
                category: 'Algoritmiska pussel',
                desc: 'Mina lösningar för AoC 2025, skrivna i C#',
                longDesc: 'Advent of Code är en årlig programmeringsutmaning med dagliga pussel i form av en julkalender, som går av stapeln under december månad. Mina lösningar är skrivna i C# och fokuserar på läsbarhet och effektivitet. Varje dag presenterar unika algoritmiska utmaningar, från strängmanipulation till graftraversering och dynamisk programmering.',
                role: 'Löste samtliga pussel självständigt och dokumenterade lösningarna.',
            },
            3: {
                title: 'ELLA - Edugrade Location & Logistics Assistant',
                category: 'Fullstack WEB App',
                desc: 'Rumboknings- och hanteringssystem byggt med Node.js, Express, SQLite och vanilla JavaScript',
                longDesc: 'ELLA är ett komplett rumbokningssystem utvecklat för Edugrade. Systemet hanterar rumsreservationer, användarautentisering och administratörsverktyg. Frontend är byggd med vanilla JavaScript, medan backend använder Node.js med Express och SQLite för datalagring. Projektet inkluderar ett responsivt gränssnitt och realtidsuppdateringar.',
                role: 'Fullstack-utvecklare i team - extra fokus på backend-arkitektur och databasdesign.',
            },
            4: {
                title: 'Ink & Render',
                category: 'Parsing & AST',
                desc: 'En ramverksfri Markdown-editor med realtidsförhandsvisning, byggd som ett modulärt projekt i ren vanilla JavaScript.',
                longDesc: 'Ink & Render är en från-grunden-byggd Markdown-editor som demonstrerar parsning och AST-hantering (Abstract Syntax Tree). Editorn konverterar Markdown till HTML i realtid utan externa bibliotek. Projektet är uppbyggt modulärt med separation mellan lexer, parser och renderer, vilket gör koden lätt att förstå och utöka.',
                role: 'Ensam utvecklare - designade och implementerade hela parsningslogiken från grunden.',
            },
            5: {
                title: 'Portfolio',
                category: 'React + TypeScript',
                desc: 'Min personliga portfolio-webbplats byggd med React och TypeScript.',
                longDesc: 'Denna portfolio-webbplats är byggd med React och TypeScript för att visa upp mina projekt och färdigheter. Webbplatsen är responsiv, tillgänglig och använder moderna webbutvecklingstekniker. Den inkluderar sektioner för projekt, om mig, kontaktinformation samt en anpassad modal för projektvisning. Webbplatsen är också flerspråkig med stöd för i18n. Jag valde att utmana mig själv genom att hålla hemsidan monokrom och använda mig av negativa utrymmen och storlekar för att ge en naturlig hierarki i användarupplevelsen.',
                role: 'Ensam utvecklare - designade och implementerade hela webbplatsen från grunden.',
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
            lia: 'INTERNSHIP DEC 2026 - MAY 2027',
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
                "Right now, I'm looking for an environment where I can continue to grow technically and contribute to a team.",
            ],
            signature: 'Viktor',
            photoAlt: 'A photo of Viktor Johansson looking away from the camera',
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
            },
            2: {
                title: 'Student Support Worker',
                company: 'Lekeberg Municipality',
                description: 'Supported students with special needs in elementary school.',
                longDescription: 'Resource in K-9 education with responsibility for students with diabetes. Also worked in after-school care. Combined practical responsibility with care and social support.',
            },
            3: {
                title: 'Music & Audio Production Instructor',
                company: 'Self-employed',
                description: 'Taught students music and audio production at a recreational level.',
                longDescription: 'Led online courses in music production for youth (ages 13–21) focusing on audio production, music theory, and instrument instruction. Developed individual lesson plans, organized concerts and workshops, and inspired students to explore their creativity through music.',
            },
            4: {
                title: 'Sales Associate',
                company: 'Systembolaget',
                description: 'Worked in customer service and sales at Systembolaget.',
                longDescription: 'Seasonal work. Responsible for customer service, product knowledge, and cash handling in a retail environment. Helped customers find products, provided recommendations based on customer needs, and developed logistics skills.',
            },
            5: {
                title: 'Substitute Museum Educator',
                company: 'Hudiksvall Museum',
                description: 'Led workshops and guided visitors at the museum.',
                longDescription: 'Worked as a substitute at Hudiksvall Museum during the autumn season. Led educational workshops for children and adults, guided groups through exhibitions, and assisted with event planning. Gained experience communicating historical content in an engaging way.',
            },
            6: {
                title: 'Substitute Teacher & Student Support',
                company: 'Hudiksvall Municipality',
                description: 'Substitute teacher & later student support in elementary and high school.',
                longDescription: 'Worked as a substitute teacher in elementary school with responsibility for teaching. Later employed as student support to help students with special needs. Collaborated with teachers and parents to create an inclusive learning environment.',
            },
            7: {
                title: 'Care Assistant & Personal Assistant',
                company: 'Hudiksvall Municipality',
                description: 'Seasonal work as care assistant in home care, group housing, and personal assistant.',
                longDescription: 'Provided care and support to elderly and people with disabilities. Work included personal hygiene, medication, meal support, and social interaction. Developed empathy, patience, and ability to work in teams within the healthcare sector.',
            },
            8: {
                title: 'Audio Engineer & Music Producer',
                company: 'Self-employed, Gigant Kulturkollektiv',
                description: 'Works with audio production and live sound engineering.',
                longDescription: 'Responsible for audio production, mixing, and mastering of music projects. Produces music and collaborates with artists in pop, hip-hop, and electronic music. Manages the entire production chain, from idea to finished master.',
            },
            9: {
                title: 'Reception Staff',
                company: 'Perth Youth Hostel',
                description: 'Responsible for check-in/check-out and customer service.',
                longDescription: 'Worked as reception staff at a youth hostel in Perth, Scotland. Handled check-ins and check-outs, bookings, and provided information about local attractions. Developed strong communication skills and ability to work in a fast-paced environment with international guests.',
            },
            10: {
                title: 'Confirmation Leader',
                company: 'Forsa-Högs Parish',
                description: 'Led confirmation groups and organized activities for youth.',
                longDescription: 'Volunteer work as confirmation leader in Forsa-Högs parish. Responsible for planning, executing, and leading group activities and creating a safe environment for youth to explore their personal development. Over the years, my responsibility increased as I became a driving force in developing and supporting the leadership team with focus on group dynamics, planning, and social development.',
            },
            11: {
                title: 'Class Representative in Management Group',
                company: 'Edugrade',
                description: 'Represents student opinions and contributes to education development.',
                longDescription: 'Represents students in the management group and participates in decisions about education content, quality, and development. Contributes with student perspective and communication between class, school management, and industry.',
            },
            12: {
                title: '.NET Systems Developer with AI Competence',
                company: 'Edugrade',
                description: 'Two-year vocational education focusing on .NET systems development, web development, databases, and AI.',
                longDescription: 'Two-year vocational higher education focusing on object-oriented programming in C# and .NET. The education covers frontend development with HTML, CSS, and JavaScript, backend development in ASP.NET, databases, design patterns, architecture, and project management with agile methods. Also includes courses in DevOps, cloud-based AI components in Microsoft Azure, and an extended internship period and thesis with clear industry connection.',
            },
            13: {
                title: 'Music Production & Audio Engineering',
                company: 'Umeå University',
                description: 'Creative Music - Music Production & Audio Engineering',
                longDescription: 'Music Production & Audio Engineering with focus on creative music. Studies included audio recording, mixing, mastering, music theory, arranging, and production techniques. Practical projects in various music genres and collaboration with artists and producers to develop a professional portfolio.',
            },
            14: {
                title: 'High School Diploma, Social Sciences - Media, Information & Communication',
                company: 'Bromangymnasiet',
                description: 'Social Sciences program with focus on media, information & communication.',
                longDescription: 'Studies in social sciences with focus on media, information, and communication. Courses included journalism, media production, communication theory, social studies, and project work in media production. Practical experience creating content for various media and development of critical thinking and analytical skills.',
            },
        },
        projects: {
            1: {
                title: 'Ducklord Chatking',
                category: 'C# + ASP.NET',
                desc: 'A chat client built in C# using the Raylib framework.',
                longDesc: "Ducklord Chatking is a real-time chat client developed in C# with the Raylib framework. The program demonstrates how to handle user interfaces, threads, and graphical rendering in a chat application. The client supports multiple users, login credential selection, color-coded messages, and features a charming duck mascot.",
                role: 'Fullstack developer in team - client-server communication and contributed to UI implementation for visualizing and handling communication data.',
            },
            2: {
                title: 'Advent of Code 2025',
                category: 'Algorithmic Puzzles',
                desc: 'My solutions for AoC 2025, written in C#',
                longDesc: "Advent of Code is an annual programming challenge with daily puzzles in the form of an advent calendar, taking place during December. My solutions are written in C# and focus on readability and efficiency. Each day presents unique algorithmic challenges, from string manipulation to graph traversal and dynamic programming.",
                role: 'Solved all puzzles independently and documented the solutions.',
            },
            3: {
                title: 'ELLA - Edugrade Location & Logistics Assistant',
                category: 'Fullstack Web App',
                desc: 'Room booking and management system built with Node.js, Express, SQLite and vanilla JavaScript',
                longDesc: "ELLA is a complete room booking system developed for Edugrade. The system handles room reservations, user authentication, and admin tools. Frontend is built with vanilla JavaScript, while backend uses Node.js with Express and SQLite for data storage. The project includes a responsive interface and real-time updates.",
                role: 'Fullstack developer in team - extra focus on backend architecture and database design.',
            },
            4: {
                title: 'Ink & Render',
                category: 'Parsing & AST',
                desc: 'A framework-free Markdown editor with live preview, built as a modular project in pure vanilla JavaScript.',
                longDesc: "Ink & Render is a from-scratch Markdown editor that demonstrates parsing and AST (Abstract Syntax Tree) handling. The editor converts Markdown to HTML in real-time without external libraries. The project is built modularly with separation between lexer, parser, and renderer, making the code easy to understand and extend.",
                role: 'Solo developer - designed and implemented the entire parsing logic from scratch.',
            },
            5: {
                title: 'Personal Portfolio Website',
                category: 'React + TypeScript',
                desc: 'My personal portfolio website built with React and TypeScript.',
                longDesc: 'This portfolio website is built with React and TypeScript to showcase my projects and skills. The site is responsive, accessible, and uses modern web development techniques. It includes sections for projects, about me, contact information, and a custom modal for project viewing. The website is also multilingual with i18n support. I challenged myself by keeping the site monochrome and using negative space and scale to create a natural hierarchy in the user experience.',
                role: 'Solo developer - designed and implemented the entire website from scratch.',
            },
        },
    },
};
