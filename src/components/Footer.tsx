/**
 * Footer Component (Sidfot)
 *
 * Detta är sidfoten längst ner på sidan med kontaktinformation,
 * sociala medier-länkar och copyright-text.
 */

import React from 'react';
import {Mail, Instagram, Linkedin, Github} from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
    <footer id="contact" className="footer">
        <div className="container">
            {/* Call-to-action rubrik */}
            <div className="footer-cta">
                <h2>Hör av dig!</h2>
            </div>

            {/* Sociala medier länkar */}
            <div className="social-links">
                <a
                    href="mailto:lohappaprod@gmail.com?subject=Kontakt%20via%20portfolio&body=Hej%20Viktor%2C"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Mail size={32} strokeWidth={1.5} />
                </a>

                <a
                    href="https://www.github.com/discovicke"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={32} strokeWidth={1.5} />
                </a>

                <a
                    href="https://www.instagram.com/discovicke"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram size={32} strokeWidth={1.5} />
                </a>

                <a
                    href="https://www.linkedin.com/in/viktorjohansson96/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={32} strokeWidth={1.5} />
                </a>
            </div>


            {/* Copyright text */}
            <p className="font-doodle footer-copyright">
                2026 Viktor Johansson. Created with React.
            </p>

            {/* Dekorativa cirklar i hörnet */}
            <svg className="footer-decoration" viewBox="0 0 100 100">
                <circle cx="20" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="90" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    </footer>
);

export default Footer;

