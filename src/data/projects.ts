/**
 * Projektdata för portfolion
 *
 * Ordning i filen är kronologisk: äldst har lägst id, nyast har högst id.
 * Visningsordning (nyast först) sköts i Work.tsx via sortering på id.
 */

import {type Project} from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Ducklord Chatking",
        category: "C# + Raylib",
        desc: "En chatklient skapad i C# med hjälp av ramverket Raylib.",
        img: "/ducklord-preview.png",
        longDesc:
            "Ducklord Chatking är en realtids-chatklient utvecklad i C# med Raylib-ramverket. " +
            "Programmet visar hur man kan hantera användargränssnitt, trådar och grafisk rendering i ett chattprogram. " +
            "Klienten har stöd för flera användare, möjlighet att välja inloggningsuppgifter, färgkodade meddelanden samt en charmig anka som maskot.",
        technologies: ["C#", "Raylib", "Multithreading", ".NET"],
        repoUrl: "https://github.com/discovicke/DucklordChatking",
        year: "2025",
        role: "Fullstack-utvecklare i team - klient-server-kommunikation och bidrog till UI-implementation för att visualisera och hantera kommunikationsdata."
    },
    {
        id: 2,
        title: "Ink & Render",
        category: "Parsing & AST",
        desc: "En ramverksfri Markdown-editor med realtidsförhandsvisning, byggd som ett modulärt projekt i ren vanilla JavaScript.",
        img: "/ink&render-preview.png",
        longDesc:
            "Ink & Render är en från-grunden-byggd Markdown-editor som demonstrerar parsning och AST-hantering (Abstract Syntax Tree). " +
            "Editorn konverterar Markdown till HTML i realtid utan externa bibliotek. " +
            "Projektet är uppbyggt modulärt med separation mellan lexer, parser och renderer, vilket gör koden lätt att förstå och utöka.",
        technologies: ["JavaScript", "Parsing", "AST", "Lexer", "HTML5", "CSS3"],
        liveUrl: "https://inkandrender.vercel.app/",
        repoUrl: "https://github.com/discovicke/Ink-and-Render-The-Markdown-Live-Preview-Editor",
        year: "2025",
        role: "Ensam utvecklare - designade och implementerade hela parsningslogiken från grunden."
    },
    {
        id: 3,
        title: "[ ASCII_FORGE ]",
        category: "Fullstack WEB App",
        desc: "En fullstack webbaserad ASCII-generator som konverterar bilder till textbaserad grafik i realtid, byggd med Angular och ASP.NET.",
        img: "/asciiforge-preview.png",
        longDesc: "Detta projekt är en fullstack webbaserad ASCII-generator som konverterar bilder till textbaserad grafik i realtid. Frontend är byggd i Angular och erbjuder ett terminalinspirerat gränssnitt med direkta visuella uppdateringar baserat på användarens inställningar. Backend är implementerad i ASP.NET och ansvarar för bildbehandling, luminansberäkning och mappning av pixlar till olika ASCII-teckenuppsättningar. " +
            "Applikationen stödjer flera ASCII-bibliotek samt justering av bredd, ljusstyrka, gamma och färginvertering. Kommunikationen mellan klient och server sker via API-anrop med FormData, där bild och konfigurationsdata behandlas effektivt utan att lagras permanent.",
        technologies: ["Angular", "ASP.NET", "C#", "REST API", "SCSS", "Image Processing"],
        liveUrl: "https://asciiforge.vercel.app/",
        repoUrl: "https://github.com/discovicke/Image2Ascii",
        year: "2025",
        role: "Ensam utvecklare"
    },
    {
        id: 4,
        title: "ELLA - Edugrade Location & Logistics Assistant",
        category: "Fullstack WEB App",
        desc: "Rumboknings- och hanteringssystem byggt med Node.js, Express, SQLite och vanilla JavaScript",
        img: "/ella-preview.png",
        longDesc:
            "ELLA är ett komplett rumbokningssystem utvecklat för Edugrade. " +
            "Systemet hanterar rumsreservationer, användarautentisering och administratörsverktyg. " +
            "Frontend är byggd med vanilla JavaScript, medan backend använder Node.js med Express och SQLite för datalagring. " +
            "Projektet inkluderar ett responsivt gränssnitt och realtidsuppdateringar.",
        technologies: ["Node.js", "Express", "SQLite", "JavaScript", "HTML5", "CSS3", "REST API"],
        liveUrl: 'https://ella-fullstack-booking-system.onrender.com/',
        repoUrl: "https://github.com/discovicke/ELLA-room-booking-system",
        year: "2025",
        role: "Fullstack-utvecklare i team - extra fokus på backend-arkitektur och databasdesign."
    },
    {
        id: 5,
        title: "ELLA 2.0 - Booking & Admin System",
        category: "Fullstack + ABAC",
        desc: "Boknings och administrationssystem för skolor med flera studieorter, byggt med Angular och ASP.NET Core.",
        img: "/ella-2-preview.png",
        longDesc:
            "ELLA 2.0 är vidareutvecklingen av ELLA 1.0 och ett komplett boknings och administrationssystem för skolor med flera studieorter. " +
            "Elever och lärare bokar salar och resurser, bjuder in klasser och administrerar allt i en rollstyrd adminpanel. " +
            "Systemet har dynamiska rollmallar med individuella overrides, CSV import av antagningslistor, återkommande bokningsserier och publika bokningslänkar för externa gäster.",
        technologies: ["Angular", "ASP.NET Core", "Dapper", "SQLite", "PostgreSQL", "JWT", "ABAC", "DayPilot"],
        repoUrl: "https://github.com/discovicke/Ella-2.0",
        year: "2026",
        role: "Fullstack-utvecklare i team - backend, behörighetssystem och bokningsflöden."
    },
    {
        id: 6,
        title: "Buggernaut",
        category: "CLI + LLM",
        desc: "CLI verktyg i .NET som genererar C# övningar med buggar via valfri LLM leverantör.",
        img: "/buggernaut-preview.png",
        longDesc:
            "Buggernaut är ett CLI verktyg som genererar C# övningar med inbyggda buggar via en LLM leverantör du själv väljer. " +
            "Du kör ett kommando, verktyget frågar en AI om en övning och skriver ut en .cs fil med en medveten bugg plus en tillhörande testfil. " +
            "Din uppgift är att hitta och fixa buggen tills testerna blir gröna. Verktyget har också hint och explain kommandon och stödjer Gemini, OpenAI, Anthropic, Mistral, Ollama och OpenRouter.",
        technologies: [".NET 10", "C#", "CLI", "xUnit", "LLM", "Gemini", "OpenAI", "NuGet"],
        repoUrl: "https://github.com/discovicke/Buggernaut",
        year: "2026",
        role: "Ensam utvecklare - designade och implementerade hela verktyget från grunden."
    },
    {
        id: 7,
        title: "Bedömningsverktyg",
        category: "Angular + ASP.NET",
        desc: "Mobilanpassat webbverktyg som förenklar dokumentation och bedömning vid beredskapsutbildningar.",
        img: "/edugrade-grading-preview.png",
        longDesc:
            "Bedömningsverktyget är framtaget för Johan Delin och ersätter manuell hantering av foton, anteckningar och bedömningar med ett mobilanpassat webbgränssnitt. " +
            "Användaren skapar utbildningstillfällen med grupper och deltagare i en egen mappstruktur, tar anteckningar, foton och ljudinspelningar kopplat till utbildning, grupp eller deltagare och får en sammanställd vy per deltagare som förenklar rapportering. " +
            "Backend är ASP.NET Core Minimal API med SQLite och EF Core, frontend är Angular och drift sker med Docker.",
        technologies: ["Angular", "ASP.NET Core", "SQLite", "EF Core", "TypeScript", "Docker", "Scalar"],
        repoUrl: "https://github.com/discovicke/EdugradeGradingHelper",
        year: "2026",
        role: "Utvecklare i team - testade även rollen som scrum master."
    },
    {
        id: 8,
        title: "Learnpoint Extension (EPA)",
        category: "Arkitektur + AI",
        desc: "Händelsedriven studiebevakare som hämtar kurser från Learnpoint, sammanfattar nya veckor med AI och skickar SMS notiser.",
        img: "/learnpoint-extension-preview.png",
        longDesc:
            "Learnpoint Extension bevakar kurser i Learnpoint och hjälper till med studierna genom att sammanfatta nytt innehåll per vecka, skicka SMS teasers och skapa övningsuppgifter. " +
            "Systemet är händelsedrivet med en egen eventbuss i minnet: nytt innehåll ger NewContentUploadedEvent, nya veckor ger SectionRegisteredEvent med ett Gemini anrop per vecka och sparade sammanfattningar ger WeekSummarizedEvent som parallellt skriver markdown filer, skickar SMS via 46elks och skapar övningar via Buggernaut. " +
            "Utanför coreservice finns en fristående scraper service i Node.js med Puppeteer plus en console client för läsning, triggers och prenumeranter.",
        technologies: [".NET 10", "C#", "Node.js", "Puppeteer", "SQLite", "EF Core", "Gemini", "SMS", "Event Driven"],
        repoUrl: "https://github.com/discovicke/learnpoint-extension",
        year: "2026",
        role: "Ensam utvecklare - designade arkitektur, eventkedja och alla integrationer från grunden."
    },
    {
        id: 9,
        title: "preNostros - AI Book Circle Chat",
        category: ".NET + React + AI",
        desc: "Bokcirkelchatt med generativ AI där du diskuterar böcker med en AI samtalspartner och sparar anteckningar och betyg.",
        img: "/prenostros-preview.png",
        longDesc:
            "preNostros är en chatt där du diskuterar böcker med en AI samtalspartner och sparar citat, tankar, analyser och betyg som anteckningar. " +
            "Tanken är en MVP som visar att det går att integrera LLM mot Nostos produkten. Backend är ett Minimal API med EF Core och SQLite, frontend i React är en terminalren yta där alla vägar in går via kommandon som /bok och /samtal. " +
            "ChatService bygger systemprompt av roll plus bok plus anteckningar plus historik och strömmar svar som SSE från Azure OpenAI. Första meddelandet skapar samtalet automatiskt och pågående svar kan avbrytas och genereras om.",
        technologies: [".NET 10", "C#", "Minimal API", "EF Core", "SQLite", "React 19", "Vite", "Azure OpenAI", "SSE"],
        repoUrl: "https://github.com/discovicke/preNostros-aichatt",
        year: "2026",
        role: "Ensam utvecklare - designade och implementerade backend, frontend och AI flöde från grunden."
    },
    {
        id: 10,
        title: "30-0 - Allsvenskt Draftspel",
        category: "React + C# + Spel",
        desc: "Webbaserat draftspel där du bygger ett Allsvenskt drömlag från 25 säsonger och spelar en 30 matchers säsong.",
        img: "/30-0-preview-1.png",
        longDesc:
            "30-0 är den allsvenska versionen av 82-0 och 38-0. Du bygger en all-star XI från fler än 6 700 spelarsäsonger från 2001 till idag, snurrar hjulet för att landa på en klubb och säsong, draftar spelare till din formation och simulerar sedan en hel 30 matchers säsong mot 15 AI styrda motståndare. " +
            "Spelet har sex formationer, squad first och position first draft, reroll mekanik, OVR betyg per position, season och peak lägen, minut för minut matchmotor och ett Text TV inspirerat gränssnitt med sidor för trupp, odds, resultat, tabell och säsongsartikel. Datan kommer från FBref och bearbetas med C# till statiska datafiler.",
        technologies: ["React 19", "Vite", "TypeScript", "SCSS", "C#", ".NET", "Vercel", "RNG", "Speldesign"],
        liveUrl: "https://www.30-0.se/",
        repoUrl: "https://github.com/discovicke/30-0",
        year: "2026",
        role: "Ensam utvecklare - speldesign, data, simulering och frontend från grunden."
    },
];
