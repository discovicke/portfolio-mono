/**
 * TypeScript-interfaces för hela applikationen
 *
 * Dessa definierar strukturen för data som används i komponenter.
 * Detta gör att TypeScript kan varna oss om vi använder fel datatyper.
 */

// Interface för ett enskilt projekt
export interface Project {
    id: number;                    // Unikt ID för projektet
    title: string;                 // Projektets titel
    category: string;              // Kategori (t.ex. "Branding", "Web Design")
    desc: string;                  // Kort beskrivning av projektet (visas i kortet)
    img: string;                   // URL till projektbild
    // Utökade fält för modal
    longDesc?: string;             // Längre beskrivning (visas i modal)
    technologies?: string[];       // Lista med teknologier som använts
    liveUrl?: string;              // URL till live-version av projektet
    repoUrl?: string;              // URL till GitHub-repo
    screenshots?: string[];        // Extra skärmbilder
    year?: string;                 // År projektet gjordes
    role?: string;                 // Din roll i projektet
}

// Interface för ClickSpark-komponentens props (inställningar)
export interface ClickSparkProps {
    sparkColor?: string;     // Färg på gnistorna (valfri)
    sparkSize?: number;      // Storlek på gnistorna (valfri)
    sparkRadius?: number;    // Hur långt gnistorna färdas (valfri)
    sparkCount?: number;     // Antal gnistor per klick (valfri)
    duration?: number;       // Hur länge animationen varar i millisekunder (valfri)
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';  // Animationskurva (valfri)
    extraScale?: number;     // Extra skalning (valfri)
    children?: React.ReactNode;  // Barn-element som ska wrapas (valfri)
}

// Interface för en enskild gnista i ClickSpark-animationen
export interface Spark {
    x: number;           // X-position
    y: number;           // Y-position
    angle: number;       // Vinkel för färdriktning
    startTime: number;   // När gnistan skapades
}

