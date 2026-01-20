# Portfolio React App - Översikt

## 📁 Projektstruktur

En modulär React-applikation med komponentbaserad CSS-arkitektur:

```
src/
├── App.tsx                  # Huvudkomponent som kombinerar allt
├── main.tsx                 # React entry point
├── index.css                # Global CSS reset
│
├── components/              # React-komponenter med tillhörande CSS
│   ├── About.tsx           # Om mig-sektion
│   ├── About.css           # Stilar för About
│   ├── ClickSpark.tsx      # Klick-animation med gnistor (inline styles)
│   ├── Footer.tsx          # Sidfot med sociala medier
│   ├── Footer.css          # Stilar för Footer
│   ├── Hero.tsx            # Startsida/Hero-sektion
│   ├── Hero.css            # Stilar för Hero
│   ├── Modal.tsx           # Modal för projektdetaljer
│   ├── Modal.css           # Stilar för Modal
│   ├── Navbar.tsx          # Navigation längst upp
│   ├── Navbar.css          # Stilar för Navbar
│   ├── NotebookNavLink.tsx # Checkbox-stil navigationslänkar
│   ├── NotebookNavLink.css # Stilar för NotebookNavLink
│   ├── SquigglyLine.tsx    # Vågig avdelare (inline styles)
│   ├── SVGFilters.tsx      # SVG filter-definitioner
│   └── Work.tsx            # Projektsektion med modal-integration
│   └── Work.css            # Stilar för Work
│
├── data/                    # Data-filer
│   └── projects.ts         # Projektdata (med utökad info för modaler)
│
├── styles/                  # Globala CSS-filer
│   ├── globals.css         # Variabler, reset, utilities
│   └── portfolio.css       # @deprecated - behålls för referens
│
└── types/                   # TypeScript typer
    └── index.ts            # Interface-definitioner (Project, ClickSparkProps, etc.)
```

## 🎨 Hur det fungerar

### 1. **App.tsx** - Huvudfilen
Detta är "main-filen" som importerar och kombinerar alla komponenter:

```typescript
App.tsx
  └─ Importerar globals.css (variabler, reset)
  └─ Komponenter importerar sina egna CSS-filer
  └─ Sätter ihop hela sidan i rätt ordning
```

### 2. **Dataflöde**
```
data/projects.ts → Work.tsx → Modal.tsx → Renderas på sidan
     ↓
types/index.ts (definierar struktur med utökade fält)
```

### 3. **CSS-arkitektur (Komponentbaserad)**

**Princip:** Varje komponent importerar sin egen CSS-fil.

```
Komponent.tsx
  └─ import './Komponent.css'
  └─ Självständig och återanvändbar
```

- `styles/globals.css` - CSS-variabler, reset, delade utilities (.container, .section, etc.)
- `components/[Komponent].css` - Komponent-specifik styling

**Undantag (inline styles behålls i TypeScript):**
- **ClickSpark.tsx** - Dynamiska styles baserade på props (sparkColor, sparkSize, etc.)
- **SquigglyLine.tsx** - Enkel komponent med minimal inline styling
- **Hero.tsx** - Vissa dynamiska filter-styles (filter: url(#liquid-text))

### 4. **Komponenter förklaring**

#### **Modal.tsx** (NY!)
- Återanvändbar modal-komponent för projektdetaljer
- Stängs med X-knapp, overlay-klick eller Escape-tangent
- Visar utökad projektinfo: longDesc, technologies, role, year, liveUrl, repoUrl

#### **Work.tsx** (Uppdaterad!)
- Loopar genom projektdata från `data/projects.ts`
- **Klickbara projektkort** som öppnar Modal med mer info
- Accessibility: role="button", tabIndex, onKeyDown

#### **SVGFilters.tsx**
- Osynlig komponent som innehåller SVG-filter
- Används för specialeffekter (våg-text, handritad känsla)

#### **ClickSpark.tsx**
- Wrapper-komponent som lägger till klick-animation
- Använder Canvas API för att rita gnistor
- Behåller inline styles (dynamiska baserat på props)

#### **Navbar.tsx**
- Fast navigation längst upp
- Använder NotebookNavLink för interaktiva länkar

#### **Hero.tsx**
- Startsida med stor rubrik och liquid text-effekt
- Studsande pil för att indikera scroll

#### **About.tsx**
- Om mig-sektion med roterande bakgrundsform
- Handskriven signatur

#### **Footer.tsx**
- Sidfot med kontaktinfo och sociala medier-ikoner

## 🗂️ Project Interface (types/index.ts)

```typescript
interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;              // Kort beskrivning (visas i kort)
  img: string;
  // Utökade fält för modal:
  longDesc?: string;         // Längre beskrivning
  technologies?: string[];   // Teknologier
  liveUrl?: string;          // Live-länk
  repoUrl?: string;          // GitHub-länk
  year?: string;             // År
  role?: string;             // Din roll
}
```

## 🚀 Kör projektet

```bash
# Installera dependencies
npm install

# Starta utvecklingsservern
npm run dev

# Bygg för produktion
npm run build

# Förhandsgranska produktion-bygget
npm run preview
```

## 📝 Lägg till nya projekt

Öppna `src/data/projects.ts` och lägg till i arrayen:

```typescript
{
    id: 5,
    title: "Ditt nya projekt",
    category: "Din kategori",
    desc: "Beskrivning av projektet",
    img: "URL till bild"
}
```

## 🎨 Anpassa styling

All styling finns i `src/styles/portfolio.css`:
- CSS-variabler längst upp (`:root`)
- Typsnitt: Shrikhand, Patrick Hand, Inter
- Färger: Kan ändras i CSS-variablerna

## 🔧 TypeScript Typer

Alla typer definieras i `src/types/index.ts`:
- `Project` - Struktur för projektdata
- `ClickSparkProps` - Props för klick-animation
- `Spark` - Individuell gnista i animationen

## 💡 Tips för nybörjare i React

1. **Komponenter** är som byggblock - varje komponent är en återanvändbar del
2. **Props** är data som skickas till komponenter (som parametrar till funktioner)
3. **State** (useState) håller reda på data som kan ändras
4. **useEffect** körs när komponenten laddas eller när något ändras
5. **Imports** - komponenter importerar andra komponenter för att bygga sidan

## 🎯 Nästa steg

Du kan nu:
- ✅ Lägga till fler projekt i `data/projects.ts`
- ✅ Ändra text i komponenterna
- ✅ Anpassa färger i `styles/portfolio.css`
- ✅ Lägga till sociala medier-länkar i `Footer.tsx`
- ✅ Ändra portfolio-innehåll efter ditt behov

Lycka till med din portfolio! 🎨

