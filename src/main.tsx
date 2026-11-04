import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

// Sidans språk kommer från <html lang> och matchar den prerenderade HTML:en
const initialLanguage = document.documentElement.lang === 'en' ? 'en' : 'sv'

const app = (
  <StrictMode>
    <App initialLanguage={initialLanguage} />
  </StrictMode>
)

// I produktion är sidan prerenderad – hydrera då den befintliga HTML:en
// istället för att riva den och rendera om allt från scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
