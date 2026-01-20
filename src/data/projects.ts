/**
 * Projektdata för portfolion
 *
 * Detta är en array med alla projekt som visas på hemsidan.
 * Varje projekt följer Project-interfacet från types/index.ts
 */

import {type Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Ducklord Chatking",
        category: "C# + ASP.NET",
        desc: "En chatklient skapad i C# med hjälp av Raylib-framework.",
        img: "/ducklord-preview.png"
    },
    {
        id: 2,
        title: "Advent of Code 2025",
        category: "Julkalender",
        desc: "Mina lösningar för AoC 2025, skrivna i C#",
        img: "/AoC25.png"
    },
    {
        id: 3,
        title: "ELLA - Edugrade Location & Logistics Assistant",
        category: "Fullstack WEB App",
        desc: "Rumboknings- och hanteringssystem byggt med Node.js, Express, SQLite och vanilla JavaScript",
        img: "/ella-preview.png"
    },
    {
        id: 4,
        title: "Ink & Render",
        category: "Parsing & AST",
        desc: "En liten, ramverksfri Markdown-editor med realtidsförhandsvisning, byggd som ett modulärt projekt i ren vanilla JavaScript.",
        img: "/ink&render-preview.png"
    },
];

