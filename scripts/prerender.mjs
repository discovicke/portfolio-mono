/**
 * Prerenderar båda språkversionerna till dist/ efter `vite build`.
 *
 * Körs automatiskt via "postbuild" i package.json, vilket innebär att
 * Vercels `npm run build` också får med sig steget.
 *
 * Vite används för att ladda TSX-filen, så CSS-importer och/assets
 * hanteras precis som i den vanliga builden.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();
const ROOT_PLACEHOLDER = '<div id="root"></div>';

const PAGES = [
    { file: 'dist/index.html', language: 'sv' },
    { file: 'dist/en/index.html', language: 'en' },
];

const vite = await createServer({
    root,
    appType: 'custom',
    logLevel: 'error',
    server: { middlewareMode: true },
});

try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    for (const page of PAGES) {
        const pagePath = resolve(root, page.file);
        const html = await readFile(pagePath, 'utf8');

        if (!html.includes(ROOT_PLACEHOLDER)) {
            throw new Error(`Hittade inte ${ROOT_PLACEHOLDER} i ${pagePath}`);
        }

        const appHtml = render(page.language);

        if (appHtml.length < 500) {
            throw new Error(
                `Prerendern av ${page.file} gav misstänkt lite HTML (${appHtml.length} tecken).`,
            );
        }

        const output = html.replace(
            ROOT_PLACEHOLDER,
            `<div id="root">${appHtml}</div>`,
        );

        await writeFile(pagePath, output, 'utf8');
        console.log(`Prerenderade ${appHtml.length} tecken HTML till ${page.file}`);
    }
} finally {
    await vite.close();
}
