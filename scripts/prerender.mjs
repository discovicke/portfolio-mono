/**
 * Prerenderar appen till dist/index.html efter `vite build`.
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
const indexPath = resolve(root, 'dist/index.html');
const ROOT_PLACEHOLDER = '<div id="root"></div>';

const vite = await createServer({
    root,
    appType: 'custom',
    logLevel: 'error',
    server: { middlewareMode: true },
});

try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const html = await readFile(indexPath, 'utf8');

    if (!html.includes(ROOT_PLACEHOLDER)) {
        throw new Error(`Hittade inte ${ROOT_PLACEHOLDER} i ${indexPath}`);
    }

    const appHtml = render();

    if (appHtml.length < 500) {
        throw new Error(`Prerendern gav misstänkt lite HTML (${appHtml.length} tecken).`);
    }

    const output = html.replace(
        ROOT_PLACEHOLDER,
        `<div id="root">${appHtml}</div>`,
    );

    await writeFile(indexPath, output, 'utf8');
    console.log(`Prerenderade ${appHtml.length} tecken HTML till dist/index.html`);
} finally {
    await vite.close();
}
