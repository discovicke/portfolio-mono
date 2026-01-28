/**
 * About Component (Om mig-sektion)
 *
 * Detta är sektionen som berättar om personen bakom portfolion.
 * Den har en roterande bakgrundsform och en handskriven signatur.
 */

import React from 'react';
import { Download } from 'lucide-react';
import './About.css';
import { Polaroid } from './Polaroid';
import { useLanguage } from '../i18n/LanguageContext';

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-section">
            {/* Roterande dekorativ bakgrundsform */}
            {/* <div className="about-bg-shape" /> */}

            {/* Huvudinnehåll - två kolumner på desktop */}
            <div className="about-content">
                {/* Rubrik - centrerad ovanför */}
                <h2 className="work-title about-title">
                    {t.about.title}
                </h2>

                {/* Grid-container: tre kolumner på desktop */}
                <div className="about-layout">
                    {/* Vänster kolumn: Tom för balans (samma bredd som polaroid-kolumnen) */}
                    <div className="about-spacer-column" />

                    {/* Mitten kolumn: Bio-text */}
                    <div className="about-text-column">
                        <div className="about-bio">
                            {t.about.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
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
                                    {t.about.signature}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Höger kolumn: Polaroid */}
                    <div className="about-polaroid-column">
                        <Polaroid
                            src="/IMG_6448.PNG"
                            alt={t.about.photoAlt}
                            caption=" "
                            variant="polaroid"
                            showTape={false}
                        />
                    </div>
                </div>
                <div className="cv-download">
                    <h3 className="cv-download-title font-doodle">{t.about.cvDownload.title}</h3>
                    <div className="cv-buttons">
                        <a href="/cv/CV-Viktor-Johansson-NETdev.pdf" download className="cv-button font-doodle">
                            {t.about.cvDownload.buttonSv}
                            <Download size={18} strokeWidth={2} />
                        </a>
                        <a href="/cv/CV-Viktor-Johansson-NETdev-EN.pdf" download className="cv-button font-doodle">
                            {t.about.cvDownload.buttonEn}
                            <Download size={18} strokeWidth={2} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

