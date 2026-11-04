/**
 * Optimerar bilder i public/ till WebP och genererar og-image.jpg.
 *
 * Kör med: npm run optimize:images
 *
 * Projektbilderna skalas ned till max 1400 px bredd och porträttfoton till
 * 900 px. Originalen ligger kvar i git-historiken, men de kan tas bort från
 * public/ när webp-versionerna används i koden.
 */

import { readdir, stat } from 'node:fs/promises';
import { basename, extname, resolve } from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = resolve(process.cwd(), 'public');

/** Bilder som är porträttfoton och inte behöver full projektbredd */
const PORTRAIT_FILES = new Set(['IMG_6448.PNG', 'IMG_6450.PNG']);

async function optimizePngs() {
    const files = (await readdir(PUBLIC_DIR)).filter((file) =>
        extname(file).toLowerCase() === '.png',
    );

    for (const file of files) {
        const input = resolve(PUBLIC_DIR, file);
        const output = resolve(PUBLIC_DIR, `${basename(file, extname(file))}.webp`);
        const maxWidth = PORTRAIT_FILES.has(file) ? 900 : 1400;

        const info = await sharp(input)
            .resize({ width: maxWidth, withoutEnlargement: true })
            .webp({ quality: 80, effort: 5 })
            .toFile(output);

        const before = (await stat(input)).size;
        const after = (await stat(output)).size;
        const saved = Math.round((1 - after / before) * 100);

        console.log(
            `${file} -> ${basename(output)} (${info.width}x${info.height}, ` +
                `${Math.round(before / 1024)} kB -> ${Math.round(after / 1024)} kB, -${saved}%)`,
        );
    }
}

async function createOgImage() {
    const output = resolve(PUBLIC_DIR, 'og-image.jpg');

    const svg = `
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="630" fill="#EFEFEA" />
            <rect x="36" y="36" width="1128" height="558" fill="none"
                stroke="#181818" stroke-width="3" stroke-dasharray="14 10" />
            <text x="84" y="168" font-family="Arial, Helvetica, sans-serif"
                font-size="30" letter-spacing="6" fill="#181818">SYSTEMUTVECKLARE</text>
            <text x="80" y="286" font-family="Georgia, 'Times New Roman', serif"
                font-size="84" font-weight="bold" fill="#181818">Viktor Johansson</text>
            <text x="84" y="356" font-family="Arial, Helvetica, sans-serif"
                font-size="32" fill="#181818">Hudiksvall · Hälsingland · Gävleborg</text>
            <text x="84" y="428" font-family="Arial, Helvetica, sans-serif"
                font-size="28" fill="#2F2F2F">.NET · React · TypeScript · AI</text>
            <text x="84" y="540" font-family="Arial, Helvetica, sans-serif"
                font-size="26" fill="#2F2F2F">viktorjohansson.vercel.app</text>
        </svg>`;

    await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(output);
    console.log('og-image.jpg (1200x630)');
}

await optimizePngs();
await createOgImage();
