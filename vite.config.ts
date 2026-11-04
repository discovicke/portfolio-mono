import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE, buildStructuredData, pageUrl, type SiteLanguage } from './src/seo/config'

/**
 * Lägger in titel, meta-taggar, canonical, hreflang, Open Graph och JSON-LD.
 * Allt styrs från src/seo/config.ts. Sidan /en/index.html får engelsk copy,
 * startsidan får svensk.
 */
function seoPlugin(): Plugin {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(_html, ctx) {
      const normalizedPath = ctx.filename.replace(/\\/g, '/')
      const language: SiteLanguage = normalizedPath.includes('/en/') ? 'en' : 'sv'
      const isEnglish = language === 'en'

      const url = pageUrl(language)
      const image = `${SITE.url}${SITE.image}`
      const title = isEnglish ? SITE.titleEn : SITE.title
      const description = isEnglish ? SITE.descriptionEn : SITE.description
      const imageAlt = isEnglish
        ? `${SITE.name}, .NET developer in ${SITE.city}`
        : `${SITE.name}, systemutvecklare .NET i ${SITE.city}`
      const locale = isEnglish ? SITE.localeEn : SITE.locale
      const localeAlternate = isEnglish ? SITE.locale : SITE.localeEn

      return [
        { tag: 'title', children: title, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { name: 'description', content: description },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1',
          },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'author', content: SITE.name },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#EFEFEA' },
          injectTo: 'head',
        },
        {
          tag: 'link',
          attrs: { rel: 'canonical', href: url },
          injectTo: 'head',
        },

        // Språkvarianter
        {
          tag: 'link',
          attrs: { rel: 'alternate', hreflang: 'sv', href: `${SITE.url}/` },
          injectTo: 'head',
        },
        {
          tag: 'link',
          attrs: { rel: 'alternate', hreflang: 'en', href: SITE.urlEn },
          injectTo: 'head',
        },
        {
          tag: 'link',
          attrs: { rel: 'alternate', hreflang: 'x-default', href: `${SITE.url}/` },
          injectTo: 'head',
        },

        // Open Graph
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'profile' },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: isEnglish ? SITE.shortTitleEn : SITE.shortTitle,
          },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:title', content: title },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:description', content: description },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:url', content: url },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: image },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: imageAlt },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:locale', content: locale },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale:alternate',
            content: localeAlternate,
          },
          injectTo: 'head',
        },

        // Twitter/X
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:title', content: title },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:description', content: description },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: image },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image:alt', content: imageAlt },
          injectTo: 'head',
        },

        // Strukturerad data
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(buildStructuredData(language), null, 2),
          injectTo: 'head',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        en: resolve(process.cwd(), 'en/index.html'),
      },
    },
  },
})
