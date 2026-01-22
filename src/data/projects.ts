/**
 * Projektdata för portfolion
 *
 * Detta är en array med alla projekt som visas på hemsidan.
 * Varje projekt följer Project-interfacet från types/index.ts
 */

import {type Project} from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Ducklord Chatking",
        category: "C# + ASP.NET",
        desc: "En chatklient skapad i C# med hjälp av ramverket Raylib.",
        img: "/ducklord-preview.png",
        longDesc:
            "Ducklord Chatking är en realtids-chatklient utvecklad i C# med Raylib-ramverket. " +
            "Programmet visar hur man kan hantera användargränssnitt, trådar och grafisk rendering i ett chattprogram. " +
            "Klienten har stöd för flera användare, möjlighet att välja inloggningsuppgifter, färgkodade meddelanden samt en charmig anka som maskot.",
        technologies: ["C#", "Raylib", "Multithreading", ".NET", "ASP.NET"],
        repoUrl: "https://github.com/discovicke/DucklordChatking",
        year: "2025",
        role: "Fullstack-utvecklare i team - klient-server-kommunikation och bidrog till UI-implementation för att visualisera och hantera kommunikationsdata."
    },
    {
        id: 2,
        title: "Advent of Code 2025",
        category: "Algoritmiska pussel",
        desc: "Mina lösningar för AoC 2025, skrivna i C#",
        img: "/AoC25.png",
        longDesc:
            "Advent of Code är en årlig programmeringsutmaning med dagliga pussel i form av en julkalender, " +
            "som går av stapeln under december månad. Mina lösningar är skrivna i C# och fokuserar på läsbarhet och effektivitet. " +
            "Varje dag presenterar unika algoritmiska utmaningar, från strängmanipulation till graftraversering och dynamisk programmering.",
        technologies: ["C#", ".NET", "Algoritmer", "Datastrukturer", "LINQ"],
        repoUrl: "https://github.com/discovicke/AdventOfCode2025",
        year: "2025",
        role: "Löste samtliga pussel självständigt och dokumenterade lösningarna."
    },
    {
        id: 3,
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
        repoUrl: "https://github.com/discovicke/ELLA-room-booking-system",
        year: "2025",
        role: "Fullstack-utvecklare i team - extra fokus på backend-arkitektur och databasdesign."
    },
    {
        id: 4,
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
        id: 5,
        title: "Personliga hemsidan",
        category: "React + TypeScript",
        desc: "Min personliga portfolio-webbplats byggd med React och TypeScript.",
        img: "/ViktorJohanssonHero.png",
        longDesc:
            "Denna portfolio-webbplats är byggd med React och TypeScript för att visa upp mina projekt och färdigheter. " +
            "Webbplatsen är responsiv, tillgänglig och använder moderna webbutvecklingstekniker. " +
            "Den inkluderar sektioner för projekt, om mig, kontaktinformation samt en anpassad modal för projektvisning." +
            " Webbplatsen är också flerspråkig med stöd för i18n. Jag valde att utmana mig själv genom att hålla hemsidan monokrom och använda mig av negativa utrymmen och storlekar för att ge en naturlig hierarki i användarupplevelsen.",
        technologies: ["React", "TypeScript", "CSS3", "HTML5", "i18n"],
        repoUrl: "https://github.com/discovicke/portfolio-mono",
        year: "2026",
        role: "Ensam utvecklare - designade och implementerade hela webbplatsen från grunden."
    }
];

