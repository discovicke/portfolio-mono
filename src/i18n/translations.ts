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
            title: 'Mina Kunskaper',
            subtitle: '(Tekniker jag kan hantera)',
            frontend: 'Frontend',
            backend: 'Backend & Språk',
            tools: 'Databaser & Verktyg',
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
