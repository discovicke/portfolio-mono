/**
 * SSR-ingång som bara används av scripts/prerender.mjs.
 *
 * Renderar hela appen till HTML-sträng per språk så att crawlare som inte
 * kör JavaScript ser innehållet på både / och /en/.
 */

import { renderToString } from 'react-dom/server';
import App from './App';
import type { Language } from './i18n/translations';

export function render(language: Language = 'sv'): string {
    return renderToString(<App initialLanguage={language} />);
}
