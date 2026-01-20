# Viktor Johansson - Portfolio

Modern portfolio-hemsida byggd med React, TypeScript och Vite. Featuring handritad design-estetik inspirerad av 70/80-talets psych och björkskogar.

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Lucide React** - Icons
- **CSS Modules** - Komponent-baserade stilar

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Öppna [http://localhost:5173](http://localhost:5173) i din webbläsare.

## 🏗️ Build

```bash
npm run build
```

Bygger projektet till `dist/` mappen.

## 🌐 Deploy till Vercel

### Automatisk Deploy (Rekommenderat)

1. Pusha ditt repo till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Importera ditt GitHub-repo
4. Vercel detekterar automatiskt Vite och använder rätt inställningar från `vercel.json`

### Manuella inställningar (om behövs)

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Framework Preset:** Vite

### Första gången du pushar

```bash
git add .
git commit -m "Initial commit - Portfolio ready for deploy"
git push
```

## 📁 Projektstruktur

```
src/
├── components/          # React-komponenter med CSS
│   ├── Hero.tsx/.css
│   ├── Work.tsx/.css
│   ├── About.tsx/.css
│   ├── Footer.tsx/.css
│   ├── Modal.tsx/.css
│   ├── Polaroid.tsx/.css
│   └── DoodleNavLink.tsx/.css
├── data/               # Projektdata
├── styles/             # Globala stilar
├── types/              # TypeScript interfaces
└── assets/             # Fonts & bilder

public/                 # Statiska filer (bilder, SVG:er)
```

## ✨ Features

- 🎨 Handritad design-estetik
- 📱 Fullständigt responsiv
- 🖼️ Polaroid-galleri
- 🔍 Projekt-modal med detaljerad info
- 🎯 Scroll-baserad navigation
- ♿ Tillgänglighet (keyboard navigation, ARIA-labels)

## 📝 Licens

© 2026 Viktor Johansson
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
