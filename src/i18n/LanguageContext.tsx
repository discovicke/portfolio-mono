/**
 * Language Context
 *
 * React Context för att hantera språkval globalt i applikationen.
 *
 * Språket styrs av URL:en ( / = svenska, /en/ = engelska ) och prerendras
 * per sida. Det gör att klientens första render alltid matchar HTML:en och
 * att hydreringen blir ren. Språkväxlaren navigerar mellan sidorna.
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

interface LanguageProviderProps {
    children: ReactNode;
    /** Språket som sidan är prerenderad på */
    initialLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
    initialLanguage = 'sv',
}) => {
    const [language, setLanguageState] = useState<Language>(initialLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        // Uppdatera html lang-attribut för tillgänglighet
        document.documentElement.lang = lang;
    };

    // Håll html lang-attributet i synk med valt språk
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
