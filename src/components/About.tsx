/**
 * About Component (Om mig-sektion)
 *
 * Detta är sektionen som berättar om personen bakom portfolion.
 * Den har en roterande bakgrundsform och en handskriven signatur.
 */

import React from 'react';

const About: React.FC = () => (
    <section id="about" className="about-section">
        {/* Roterande dekorativ bakgrundsform */}
        <div className="about-bg-shape" />

        {/* Huvudinnehåll */}
        <div className="about-content">
            {/* Rubrik */}
            <h2 className="work-title" style={{ marginBottom: '2rem' }}>
                Lite mer om mig
            </h2>

            {/* Bio-text uppdelad i paragrafer */}
            <div
                style={{
                    fontFamily: 'var(--fonts-doodle)',
                    fontSize: '1.5rem',
                    lineHeight: '1.6',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}
            >
                <p>
                    Jag växte upp bland björkarna i Hälsingland och utbildade mig i Umeå.
                    Därav kärleken till det monokroma och det organiska.
                </p>
                <p>
                    Min designfilosofi är att{' '}
                    <span
                        style={{
                            textDecoration: 'underline',
                            textDecorationStyle: 'wavy',
                            textUnderlineOffset: '0.4em'
                        }}
                    >
                        inget behöver vara perfekt
                    </span>.
                    Faktum är att det oftast blir bättre om det är lite skevt.
                    Det mänskliga ögat gillar inte det exakta rutnätet lika mycket som vi tror.
                </p>
                <p>
                    När jag inte ritar pixlar eller vektorer försöker jag lära mig spela banjo
                    eller dricker alldeles för mycket kaffe.
                </p>
            </div>

            {/* Handskriven signatur */}
            <div className="signature">
                <svg width="200" height="80" viewBox="0 0 200 80">
                    {/* SVG-path för signatur-stroke */}
                    <path
                        d="M10,40 Q50,10 80,40 T150,40 T190,30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* Text under signaturen */}
                    <text
                        x="100"
                        y="70"
                        textAnchor="middle"
                        className="font-psych"
                        style={{ fontSize: '1.5rem' }}
                    >
                        Viktor
                    </text>
                </svg>
            </div>
        </div>
    </section>
);

export default About;

