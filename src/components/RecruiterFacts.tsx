/**
 * RecruiterFacts Component
 *
 * Kort faktapanel för rekryterare och andra som vill ha det viktigaste
 * på en rad: roll, ort, utbildning, vad Viktor söker och vilka tekniker
 * han jobbar med. Panelen är också lätt för sökmotorer och AI att citera.
 */

import React from 'react';
import { Mail, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './RecruiterFacts.css';

const RecruiterFacts: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section
            id="rekryterare"
            className="section recruiter-section"
            aria-labelledby="recruiter-title"
        >
            <div className="container recruiter-inner">
                <header className="recruiter-header">
                    <h2 id="recruiter-title" className="section-title recruiter-title">
                        {t.recruiter.title}
                    </h2>
                    <p className="recruiter-subtitle font-doodle">
                        {t.recruiter.subtitle}
                    </p>
                </header>

                <dl className="recruiter-facts">
                    {t.recruiter.facts.map((fact) => (
                        <div key={fact.label} className="recruiter-fact">
                            <dt>{fact.label}</dt>
                            <dd>{fact.value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="recruiter-actions">
                    <a
                        className="recruiter-button"
                        href="mailto:johanssonviktor@pm.me?subject=Kontakt%20via%20portfolio&body=Hej%20Viktor%2C"
                    >
                        <Mail size={18} strokeWidth={2} aria-hidden="true" />
                        {t.recruiter.emailCta}
                    </a>
                    <a
                        className="recruiter-button"
                        href="/cv/CV-Viktor-Johansson-NETdev.pdf"
                        download
                    >
                        <Download size={18} strokeWidth={2} aria-hidden="true" />
                        {t.recruiter.cvCta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RecruiterFacts;
