/**
 * Language Context
 *
 * React Context för att hantera språkval globalt i applikationen.
 * Sparar användarens val i localStorage så det bevaras mellan sessioner.
 */

/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language, type TranslationStrings } from './translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

/**
 * Hämta sparad språkinställning från localStorage
 */
const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'sv') {
            return saved;
        }
        // Kolla webbläsarens språkinställning
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('en')) {
            return 'en';
        }
    }
    return 'sv'; // Standard: svenska
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(getSavedLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        // Uppdatera html lang-attribut för tillgänglighet
        document.documentElement.lang = lang;
    };

    // Sätt initialt språk på html-elementet
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

/**
 * Custom hook för att använda språk och översättningar
 *
 * @example
 * const { language, setLanguage, t } = useLanguage();
 * return <h1>{t.hero.greeting}</h1>
 */
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
