/**
 * SEO-konfiguration
 *
 * En enda källa för domän, titel, beskrivning och strukturerad data.
 * Används av vite.config.ts (meta-taggar i <head>) och scripts/prerender.mjs.
 *
 * Byt SITE_URL här när/om sajten flyttas till en egen domän.
 */

export type SiteLanguage = 'sv' | 'en';

export const SITE_URL = 'https://viktorjohansson.vercel.app';

export const SITE = {
    url: SITE_URL,
    urlEn: `${SITE_URL}/en/`,
    name: 'Viktor Johansson',
    title: 'Systemutvecklare .NET i Hudiksvall – Viktor Johansson',
    titleEn: 'Software Developer in Hudiksvall – Viktor Johansson',
    shortTitle: 'Viktor Johansson – Systemutvecklare .NET',
    shortTitleEn: 'Viktor Johansson – Software Developer',
    description:
        'Systemutvecklare .NET under utbildning i Hudiksvall. Söker junior roll, sommarjobb eller mindre projekt i Hälsingland, Gävleborg och på distans.',
    descriptionEn:
        'Viktor Johansson is a .NET developer studying in Hudiksvall. Open to junior roles, summer jobs and smaller projects in Hälsingland, Gävleborg or remotely.',
    email: 'johanssonviktor@pm.me',
    image: '/og-image.jpg',
    locale: 'sv_SE',
    localeEn: 'en_US',
    city: 'Hudiksvall',
    region: 'Gävleborg',
    country: 'SE',
    jobTitle: 'Systemutvecklare .NET under utbildning',
    jobTitleEn: '.NET developer (student)',
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
    knowsAboutEn: [
        'Software development',
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

/** URL till startsidan för respektive språk */
export function pageUrl(language: SiteLanguage): string {
    return language === 'en' ? SITE.urlEn : `${SITE.url}/`;
}

/**
 * JSON-LD: Person + WebSite + ProfilePage.
 * Ingen LocalBusiness/ProfessionalService eftersom Viktor inte driver företag.
 */
export function buildStructuredData(language: SiteLanguage = 'sv') {
    const isEnglish = language === 'en';

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${SITE.url}/#person`,
                name: SITE.name,
                url: SITE.url,
                image: `${SITE.url}${SITE.image}`,
                jobTitle: isEnglish ? SITE.jobTitleEn : SITE.jobTitle,
                description: isEnglish ? SITE.descriptionEn : SITE.description,
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
                knowsAbout: isEnglish ? SITE.knowsAboutEn : SITE.knowsAbout,
                knowsLanguage: [
                    { '@type': 'Language', name: 'Swedish' },
                    { '@type': 'Language', name: 'English' },
                ],
                // Schema.org: personen söker en junior roll i närområdet
                seeks: {
                    '@type': 'Demand',
                    name: isEnglish
                        ? 'Junior .NET developer role in Hudiksvall, Hälsingland, Gävleborg or remote'
                        : 'Junior systemutvecklare .NET i Hudiksvall, Hälsingland, Gävleborg eller på distans',
                },
                sameAs: SITE.sameAs,
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE.url}/#website`,
                url: SITE.url,
                name: isEnglish ? SITE.shortTitleEn : SITE.shortTitle,
                inLanguage: ['sv-SE', 'en'],
                publisher: { '@id': `${SITE.url}/#person` },
            },
            {
                '@type': 'ProfilePage',
                '@id': `${pageUrl(language)}#webpage`,
                url: pageUrl(language),
                name: isEnglish ? SITE.titleEn : SITE.title,
                description: isEnglish ? SITE.descriptionEn : SITE.description,
                isPartOf: { '@id': `${SITE.url}/#website` },
                about: { '@id': `${SITE.url}/#person` },
                inLanguage: isEnglish ? 'en' : 'sv-SE',
            },
        ],
    };
}
