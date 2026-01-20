/**
 * Hero Component
 *
 * Detta är hero-sektionen (startsidan/landningssidan) som användaren ser först.
 * Den innehåller en stor rubrik, en introduktionstext och dekorativa element.
 */

import React from 'react';
import BirchTree from './BirchTree';

const Hero: React.FC = () => (
    <section className="hero">
        {/* Dekorativa björkträd i bakgrunden */}
        <BirchTree style={{ left: '-20px', bottom: 0, width: '200px' }} />
        <BirchTree style={{ right: '-30px', bottom: '-50px', width: '150px', transform: 'scaleX(-1)' }} />

        {/* Huvudinnehåll - centrerat */}
        <div style={{ zIndex: 10, maxWidth: '1000px', padding: '0 1rem'}}>
            {/* Introduktionstext */}
            <p className="hero-intro">Hej, jag heter Viktor!</p>

            {/* Huvudrubrik med liquid text-effekt (från SVG filter) */}
            <h1 className="hero-title" style={{padding: '0 0.5rem', filter: 'url(#liquid-text)'}}>
                PORT<br/>FOLIO
            </h1>

            {/* Beskrivning */}
            <p className="hero-desc">
                <p>Systemutvecklingsstudent</p>
                <p>.NET</p>
                <p>Nudlar: Kokta</p>
            </p>

            {/* Studsande pil som indikerar att man kan scrolla */}
            <div className="bounce-arrow">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
            </div>
        </div>
    </section>
);

export default Hero;

