/**
 * Footer Component (Sidfot)
 *
 * Detta är sidfoten längst ner på sidan med kontaktinformation,
 * sociala medier-länkar och copyright-text.
 */

import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
    <footer id="contact" className="footer">
        <div className="container">
            {/* Call-to-action rubrik */}
            <div className="footer-cta">
                <h2>Hör av dig!</h2>
            </div>

            {/* Sociala medier länkar */}
            <div className="social-links">
                <a href="#" aria-label="Email">
                    <Mail size={32} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="Instagram">
                    <Instagram size={32} strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="LinkedIn">
                    <Linkedin size={32} strokeWidth={1.5} />
                </a>
            </div>

            {/* Copyright text */}
            <p className="font-doodle" style={{ opacity: 0.5 }}>
                © 2026 Viktor Johansson. Handskriven med koffein.
            </p>

            {/* Dekorativa cirklar i hörnet */}
            <svg
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '8rem',
                    height: '8rem',
                    opacity: 0.2
                }}
                viewBox="0 0 100 100"
            >
                <circle cx="20" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="90" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    </footer>
);

export default Footer;

