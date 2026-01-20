/**
 * About Component (Om mig-sektion)
 *
 * Detta är sektionen som berättar om personen bakom portfolion.
 * Den har en roterande bakgrundsform och en handskriven signatur.
 */

import React from 'react';
import './About.css';
import { Polaroid } from './Polaroid';

const About: React.FC = () => (
    <section id="about" className="about-section">
        {/* Roterande dekorativ bakgrundsform */}
        {/* <div className="about-bg-shape" /> */}

        {/* Huvudinnehåll - två kolumner på desktop */}
        <div className="about-content">
            {/* Rubrik - centrerad ovanför */}
            <h2 className="work-title about-title">
                Lite mer om mig
            </h2>

            {/* Grid-container: tre kolumner på desktop */}
            <div className="about-layout">
                {/* Vänster kolumn: Tom för balans (samma bredd som polaroid-kolumnen) */}
                <div className="about-spacer-column" />

                {/* Mitten kolumn: Bio-text */}
                <div className="about-text-column">
                    <div className="about-bio">
                        <p>
                            Jag är en fullstack-utvecklare med fokus på .NET, med en bakgrund inom pedagogik, kreativt arbete
                            och
                            lång erfarenhet av att arbeta nära människor.
                            Jag har alltid trivts i sammanhang där kreativitet, struktur och samarbete möts.
                        </p>
                        <p>
                            Efter år inom musikproduktion, undervisning och elevstöd har jag samlat på mig erfarenheter som
                            kretsar kring samma sak:
                            att förstå människor och lösa problem på ett sätt som fungerar i vardagen.
                            I dag gör jag det genom systemutveckling.
                        </p>
                        <p>
                            När jag inte kodar hittar du mig med musikprojekt, framför en fotbollsmatch eller samtalandes runt
                            sällskapsspel eller ett bastuaggregat.
                        </p>
                        <p>
                            Jag studerar till Systemutvecklare .NET med AI-kompetens på Edugrade i Hudiksvall och drivs av att
                            bygga tydliga, användbara lösningar tillsammans med andra.
                        </p>
                        <p>
                            Just nu söker jag en miljö där jag kan fortsätta växa tekniskt och bidra i ett team.
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

                {/* Höger kolumn: Polaroid */}
                <div className="about-polaroid-column">
                    <Polaroid
                        src="/IMG_6448.PNG"
                        alt="En bild på Viktor Johansson när han blickar bort från kameran"
                        caption=" "
                        variant="polaroid"
                        showTape={false}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default About;

