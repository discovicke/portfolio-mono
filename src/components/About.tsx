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
                    Jag växte upp i Hudiksvall och har efter äventyr i Umeå & Örebro hittat hem till den Hälsingska idyllen igen.
                </p>
                <p>
                    Under min uppväxt blev jag aldrig hindrad från att{' '}
                    <span
                        style={{
                            position: 'relative',
                            display: 'inline-block'
                        }}
                    >
                        utforska min kreativitet,
                        <img
                            src="/svg/doodleDashed.svg"
                            alt=""
                            style={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'rotate(45deg)',
                                width: '7rem',
                                height: '1.5rem',
                                left: '-0.5rem',
                                zIndex: 10000,
                            }}
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
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="/svg/doodleUnderline.svg"
                        alt=""
                        style={{
                            width: '100px',
                            height: 'auto',
                            opacity: 0.8,
                            marginBottom: '-2.5rem',
                            marginTop: '-3rem',
                            marginLeft: '-8rem',
                            transform: 'rotate(-40deg)',
                        }}
                    />
                    <span
                        className="font-psych"
                        style={{ fontSize: '1.5rem', marginTop: '-0.5rem', marginLeft: '-2rem' }}
                    >
                        Viktor
                    </span>
                </div>
            </div>
        </div>
    </section>
);

export default About;

