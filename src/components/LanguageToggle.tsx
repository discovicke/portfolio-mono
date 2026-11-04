/**
 * LanguageToggle Component
 *
 * En diskret språkväxlare som följer portfolions handritade estetik.
 * Den är en riktig länk mellan / (svenska) och /en/ (engelska), så att
 * språkversionerna får egna indexerbara URL:er och hreflang fungerar.
 */

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
    const { language } = useLanguage();

    const nextLanguage = language === 'sv' ? 'en' : 'sv';
    const nextHref = nextLanguage === 'en' ? '/en/' : '/';

    return (
        <a
            className="language-toggle"
            href={nextHref}
            hrefLang={nextLanguage}
            aria-label={language === 'sv' ? 'Switch to English' : 'Byt till svenska'}
        >
            <span className={`lang-option ${language === 'sv' ? 'active' : ''}`}>SV</span>
            <span className="lang-divider">/</span>
            <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        </a>
    );
};

export default LanguageToggle;
