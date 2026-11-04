import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE, buildStructuredData } from './src/seo/config'

/**
 * Lägger in titel, meta-taggar, canonical, Open Graph och JSON-LD i <head>.
 * Allt styrs från src/seo/config.ts så att domän och copy bara finns på ett ställe.
 */
function seoPlugin(): Plugin {
  return {
    name: 'portfolio-seo',
    transformIndexHtml() {
      const url = `${SITE.url}/`
      const image = `${SITE.url}${SITE.image}`

      return [
        { tag: 'title', children: SITE.title, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { name: 'description', content: SITE.description },
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

        // Open Graph
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'profile' },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:site_name', content: SITE.shortTitle },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:title', content: SITE.title },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { property: 'og:description', content: SITE.description },
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
          attrs: {
            property: 'og:image:alt',
            content: `${SITE.name}, systemutvecklare .NET i ${SITE.city}`,
          },
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
          attrs: { property: 'og:locale', content: SITE.locale },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale:alternate',
            content: SITE.localeAlternate,
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
          attrs: { name: 'twitter:title', content: SITE.title },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:description', content: SITE.description },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: image },
          injectTo: 'head',
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content: `${SITE.name}, systemutvecklare .NET i ${SITE.city}`,
          },
          injectTo: 'head',
        },

        // Strukturerad data
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(buildStructuredData(), null, 2),
          injectTo: 'head',
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
})
