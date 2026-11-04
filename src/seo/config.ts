/**
 * SEO-konfiguration
 *
 * En enda källa för domän, titel, beskrivning och strukturerad data.
 * Används av vite.config.ts (meta-taggar i <head>) och scripts/prerender.mjs.
 *
 * Byt SITE_URL här när/om sajten flyttas till en egen domän.
 */

export const SITE_URL = 'https://viktorjohansson.vercel.app';

export const SITE = {
    url: SITE_URL,
    name: 'Viktor Johansson',
    title: 'Systemutvecklare .NET i Hudiksvall – Viktor Johansson',
    shortTitle: 'Viktor Johansson – Systemutvecklare .NET',
    description:
        'Viktor Johansson är systemutvecklare .NET under utbildning i Hudiksvall. Han söker junior tjänst, sommarjobb och mindre projekt i Hälsingland, Gävleborg och på distans. Se projekt, kompetenser och CV.',
    email: 'johanssonviktor@pm.me',
    image: '/ViktorJohanssonHero.png',
    locale: 'sv_SE',
    localeAlternate: 'en_US',
    city: 'Hudiksvall',
    region: 'Gävleborg',
    country: 'SE',
    jobTitle: 'Systemutvecklare .NET (student)',
    education: 'Edugrade, Hudiksvall',
    sameAs: [
        'https://www.github.com/discovicke',
        'https://www.linkedin.com/in/viktorjohansson96/',
        'https://www.instagram.com/discovicke',
    ],
    knowsAbout: [
        'Systemutveckling',
        '.NET',
        'C#',
        'ASP.NET',
        'Entity Framework',
        'Blazor',
        'React',
        'TypeScript',
        'JavaScript',
        'SQL',
        'Azure OpenAI',
    ],
} as const;

/**
 * JSON-LD för startsidan: Person + WebSite + ProfilePage.
 * Ingen LocalBusiness/ProfessionalService eftersom Viktor inte driver företag.
 */
export function buildStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${SITE.url}/#person`,
                name: SITE.name,
                url: SITE.url,
                image: `${SITE.url}${SITE.image}`,
                jobTitle: SITE.jobTitle,
                email: `mailto:${SITE.email}`,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: SITE.city,
                    addressRegion: SITE.region,
                    addressCountry: SITE.country,
                },
                alumniOf: {
                    '@type': 'EducationalOrganization',
                    name: SITE.education,
                },
                knowsAbout: SITE.knowsAbout,
                sameAs: SITE.sameAs,
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE.url}/#website`,
                url: SITE.url,
                name: SITE.shortTitle,
                inLanguage: 'sv-SE',
                publisher: { '@id': `${SITE.url}/#person` },
            },
            {
                '@type': 'ProfilePage',
                '@id': `${SITE.url}/#webpage`,
                url: `${SITE.url}/`,
                name: SITE.title,
                description: SITE.description,
                isPartOf: { '@id': `${SITE.url}/#website` },
                about: { '@id': `${SITE.url}/#person` },
                inLanguage: 'sv-SE',
            },
        ],
    };
}
