# Portfolio React App - Översikt

## 📁 Projektstruktur

Jag har omstrukturerat din portfolio-template från `import.tsx` till en modulär React-applikation:

```
src/
├── App.tsx                  # Huvudkomponent som kombinerar allt
├── main.tsx                 # React entry point
├── index.css                # Global CSS reset
│
├── components/              # React-komponenter
│   ├── About.tsx           # Om mig-sektion
│   ├── BirchTree.tsx       # Dekorativ björk-illustration
│   ├── ClickSpark.tsx      # Klick-animation med gnistor
│   ├── Footer.tsx          # Sidfot med sociala medier
│   ├── Hero.tsx            # Startsida/Hero-sektion
│   ├── Navbar.tsx          # Navigation längst upp
│   ├── NotebookNavLink.tsx # Checkbox-stil navigationslänkar
│   ├── SquigglyLine.tsx    # Vågig avdelare
│   ├── SVGFilters.tsx      # SVG filter-definitioner
│   └── Work.tsx            # Projektsektion
│
├── data/                    # Data-filer
│   └── projects.ts         # Projektdata (kan lätt utökas)
│
├── styles/                  # CSS-filer
│   └── portfolio.css       # All styling (tidigare inline CSS)
│
└── types/                   # TypeScript typer
    └── index.ts            # Interface-definitioner
```

## 🎨 Hur det fungerar

### 1. **App.tsx** - Huvudfilen
Detta är "main-filen" du nämnde. Den importerar och kombinerar alla komponenter:

```typescript
App.tsx
  └─ Importerar alla komponenter
  └─ Importerar CSS
  └─ Sätter ihop hela sidan i rätt ordning
```

### 2. **Dataflöde**
```
data/projects.ts → Work.tsx → Renderas på sidan
     ↓
types/index.ts (definierar struktur)
```

### 3. **CSS-struktur**
- `index.css` - Minimal global reset
- `styles/portfolio.css` - All huvudstyling (björkmönster, typsnitt, animationer, etc.)

### 4. **Komponenter förklaring**

#### **SVGFilters.tsx**
- Osynlig komponent som innehåller SVG-filter
- Används för specialeffekter (våg-text, handritad känsla)

#### **ClickSpark.tsx**
- Wrapper-komponent som lägger till klick-animation
- Använder Canvas API för att rita gnistor
- Wrapa innehåll med denna för att aktivera effekten

#### **Navbar.tsx**
- Fast navigation längst upp
- Använder NotebookNavLink för interaktiva länkar

#### **Hero.tsx**
- Startsida med stor rubrik
- Innehåller björkträd-dekorationer
- Studsande pil för att indikera scroll

#### **Work.tsx**
- Loopar genom projektdata från `data/projects.ts`
- Visar varje projekt i ett "wobble box"-kort
- Responsivt grid-layout

#### **About.tsx**
- Om mig-sektion
- Roterande bakgrundsform
- Handskriven signatur

#### **Footer.tsx**
- Sidfot med kontaktinfo
- Sociala medier-ikoner (från lucide-react)

## 🚀 Kör projektet

```bash
# Installera dependencies (redan gjort)
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

