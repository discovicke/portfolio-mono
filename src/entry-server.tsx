/**
 * SSR-ingång som bara används av scripts/prerender.mjs.
 *
 * Renderar hela appen till HTML-sträng så att crawlare som inte kör
 * JavaScript (Google delvis, men framför allt AI-botar) ser innehållet.
 */

import { renderToString } from 'react-dom/server';
import App from './App';

export function render(): string {
    return renderToString(<App />);
}
