/**
 * Hero Component
 *
 * Detta är hero-sektionen (startsidan/landningssidan) som användaren ser först.
 * Den innehåller en stor rubrik, en introduktionstext och dekorativa element.
 */

import React from 'react';
import './Hero.css';
import { Polaroid } from './Polaroid';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    /**
     * Scrolla till projektsektionen
     */
    const scrollToProjects = () => {
        const element = document.getElementById('work');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <section className="hero">
        {/* Layout-container för innehåll + polaroid */}
        <div className="hero-layout">
            {/* Polaroid till vänster (på desktop) */}
            <div className="hero-polaroid hero-polaroid-left">
                <Polaroid
                    src="/IMG_6450.PNG"
                    alt={t.hero.photoAlt}
                    caption=" "
                    variant="polaroid"
                    showTape={false}
                />
            </div>

            {/* Huvudinnehåll - centrerat */}
            <div className="hero-content">
                {/* Introduktionstext */}
                <p className="hero-intro">{t.hero.greeting}</p>

                {/* Huvudrubrik med liquid text-effekt (från SVG filter) */}
                <h1 className="hero-title" style={{ filter: 'url(#liquid-text)' }}>
                    PORT<br />FOLIO
                </h1>

                {/* Beskrivning */}
                <p className="hero-desc">
                    {t.hero.role}<br />
                    {t.hero.location}<br />
                    {t.hero.lia}
                </p>

                {/* Polaroid för mobil (visas bara på små skärmar) */}
                <div className="hero-mobile-polaroid">
                    <Polaroid
                        src="/IMG_6450.PNG"
                        alt={t.hero.photoAlt}
                        caption=" "
                        variant="polaroid"
                        showTape={false}
                    />
                </div>

                {/* Studsande pil som indikerar att man kan scrolla */}
                <button
                    className="bounce-arrow"
                    onClick={scrollToProjects}
                    aria-label={t.hero.scrollToProjects}
                    type="button"
                >
                    <svg
                        width="40px"
                        height="40px"
                        viewBox="-32.5 0 150 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.6677 67.3228C42.8134 49.3267 42.9303 31.3306 43.1272 13.3345C43.1672 9.74757 43.4488 6.15537 43.7999 2.58292C43.8642 1.9919 44.1053 1.43407 44.4917 0.982297C44.8781 0.530521 45.3919 0.205883 45.9658 0.0508296C46.8847 -0.242553 48.1882 0.777404 48.3798 1.99557C48.5662 3.17698 48.8537 4.35241 48.9253 5.53973C49.3847 13.1224 50.0351 20.7045 50.1723 28.2943C50.4526 43.8876 50.5227 59.4855 50.5405 75.0821C50.5575 89.8792 50.3731 104.677 50.3383 119.474C50.3331 121.85 50.6317 124.227 50.8437 126.599C50.8826 126.757 50.9605 126.902 51.07 127.021C51.1795 127.141 51.3172 127.231 51.4706 127.283C51.8375 127.326 52.455 127.218 52.5863 126.974C55.0587 122.427 57.6591 117.936 59.8651 113.26C64.9963 102.382 71.2893 92.1783 77.6033 81.9815C78.6409 80.3058 79.695 78.5494 81.7539 77.8734C82.1287 77.7507 82.7706 77.5591 82.896 77.7153C83.4175 78.2747 83.7925 78.9546 83.9875 79.6941C84.0804 80.4818 83.9529 81.2797 83.6193 81.9992C82.4648 84.5471 81.2604 87.0766 79.9661 89.5556C70.7156 107.273 61.4101 124.962 52.1846 142.692C48.706 149.38 45.3325 152.558 37.6842 144.53C35.4802 142.217 33.2781 139.877 31.3177 137.362C22.2164 125.698 13.1708 113.99 4.18075 102.241C3.02181 100.625 1.99039 98.9214 1.09592 97.1455C0.467146 95.987 0.840624 94.8273 1.5941 93.827C2.42437 92.7263 4.83842 92.0431 5.89971 92.4224C8.25597 93.2658 9.98469 94.9461 11.5501 96.7503C17.5765 103.698 23.5595 110.682 29.499 117.704C33.3805 122.267 37.205 126.878 41.0945 131.433C41.2868 131.658 41.8821 131.67 42.2404 131.578C42.3955 131.518 42.5337 131.422 42.6433 131.297C42.7528 131.172 42.8303 131.022 42.8692 130.86C43.0261 128.48 43.2243 126.094 43.2119 123.711C43.1125 104.914 42.9887 86.1175 42.8404 67.3208L42.6677 67.3228Z" fill="#000000" />
                    </svg>
                </button>
            </div>

            {/* Tom högerkolumn för balans (eller kan användas för en till polaroid) */}
            <div className="hero-polaroid hero-polaroid-right">
                {/* Kan lägga till en andra polaroid här om du vill */}
            </div>
        </div>
    </section>
    );
};

export default Hero;

