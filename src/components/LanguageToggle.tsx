/**
 * LanguageToggle Component
 *
 * En diskret språkväxlare som följer portfolions handritade estetik.
 * Visar SV/EN och växlar mellan svenska och engelska.
 */

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'sv' ? 'en' : 'sv');
    };

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'sv' ? 'Switch to English' : 'Byt till svenska'}
            type="button"
        >
            <span className={`lang-option ${language === 'sv' ? 'active' : ''}`}>SV</span>
            <span className="lang-divider">/</span>
            <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
        </button>
    );
};

export default LanguageToggle;
