/**
 * About Component (Om mig-sektion)
 *
 * Detta är sektionen som berättar om personen bakom portfolion.
 * Den har en roterande bakgrundsform och en handskriven signatur.
 */

import React from 'react';
import './About.css';

const About: React.FC = () => (
    <section id="about" className="about-section">
        {/* Roterande dekorativ bakgrundsform */}
        {/* <div className="about-bg-shape" /> */}

        {/* Huvudinnehåll */}
        <div className="about-content">
            {/* Rubrik - använder work-title för konsekvent styling */}
            <h2 className="work-title" style={{ marginBottom: '2rem' }}>
                Lite mer om mig
            </h2>

            {/* Bio-text uppdelad i paragrafer */}
            <div className="about-bio">
                <p>
                    Jag växte upp i Hudiksvall och har efter äventyr i Umeå & Örebro hittat hem till den Hälsingska idyllen igen.
                </p>
                <p>
                    Under min uppväxt blev jag aldrig hindrad från att{' '}
                    <span className="about-highlight">
                        utforska min kreativitet,
                        <img
                            src="/svg/doodleDashed.svg"
                            alt=""
                            className="about-highlight-decoration"
                        />
                    </span>
                     vilket har format min smak för det ickelinjära och skeva.
                </p>
                <p>
                    När jag inte fördjupar mig i systemutveckling så hittar du mig framför en fotbollsmatch,
                    runt bordet med ett sällskapsspel eller funderandes i husets skönaste fotölj.
                </p>
            </div>

            {/* Handskriven signatur */}
            <div className="signature">
                <div className="signature-container">
                    <img
                        src="/svg/doodleUnderline.svg"
                        alt=""
                        className="signature-underline"
                    />
                    <span className="font-psych signature-name">
                        Viktor
                    </span>
                </div>
            </div>
        </div>
    </section>
);

export default About;

