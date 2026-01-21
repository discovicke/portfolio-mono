/**
 * App Component - Huvudkomponenten för hela applikationen
 *
 * Detta är huvudfilen som kombinerar alla komponenter till en komplett hemsida.
 *
 * STRUKTUR:
 * 1. SVGFilters - Osynlig komponent som tillhandahåller CSS-filter
 * 2. ClickSpark - Wrapper som lägger till klick-animation
 *    └─ birch-bg div - Bakgrund med björkträds-mönster
 *       ├─ Navbar - Fast navigation längst upp
 *       ├─ Hero - Startsida med stor rubrik
 *       ├─ SquigglyLine - Avdelare
 *       ├─ Work - Projektsektion
 *       ├─ SquigglyLine - Avdelare
 *       ├─ About - Om mig-sektion
 *       └─ Footer - Sidfot med kontaktinfo
 *
 * DATAFLÖDE:
 * - Projektdata importeras från data/projects.ts
 * - Typer definieras i types/index.ts
 * - CSS importeras från styles/portfolio.css
 */

import './styles/globals.css';  // Importera globala stilar (variabler, reset, utilities)

// Importera alla komponenter
import SVGFilters from './components/SVGFilters';
import ClickSpark from './components/ClickSpark';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SquigglyLine from './components/SquigglyLine';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

// Språkhantering
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            {/* SVG Filters - Måste finnas för att CSS filter:url() ska fungera */}
            <SVGFilters/>



                {/* ClickSpark wrapper - lägger till klickanimation över hela sidan */}
                <ClickSpark
                    sparkColor="#181818"  // Färg på gnistor
                    sparkCount={8}         // Antal gnistor per klick
                    sparkRadius={25}       // Hur långt gnistorna flyger
                >
                    {/* Huvudcontainer med björk-bakgrund */}
                    <div className="birch-bg">
                        {/* Fast navbar längst upp */}
                        <Navbar/>

                        {/* Main landmark for primary content */}
                        <main id="main">
                            {/* Startsida/Hero */}
                            <Hero/>

                            {/* Dekorativ avdelare */}
                            <SquigglyLine/>

                            {/* Projekt-sektion */}
                            <Work/>

                            {/* Dekorativ avdelare */}
                            <SquigglyLine/>

                            {/* Om mig-sektion */}
                            <About/>

                            {/* Sidfot */}
                            <Footer/>
                        </main>
                    </div>
                </ClickSpark>
        </LanguageProvider>
    );
}

export default App;
