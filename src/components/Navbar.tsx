/**
 * Navbar Component
 *
 * Detta är navigationsbaren som ligger fixerad längst upp på sidan.
 * Den innehåller en logo och navigeringslänkar.
 */

import React from 'react';
import NotebookNavLink from './NotebookNavLink';

const Navbar: React.FC = () => (
    <nav className="navbar">
        {/* Logo - visas till vänster */}
        <div className="logo">
            logga
        </div>

        {/* Navigation länkar - döljs på mobil, visas på desktop */}
        <div className="nav-links">
            <NotebookNavLink label="Projekt" href="#work" />
            <NotebookNavLink label="Om Mig" href="#about" />
            <NotebookNavLink label="Kontakt" href="#contact" />
        </div>

        {/* Mobilmeny-ikon - visas endast på mobil */}
        <div className="mobile-menu-icon">
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            >
                {/* Tre linjer som ger en handritad känsla */}
                <path d="M5,10 L25,8" />
                <path d="M5,15 L25,16" />
                <path d="M5,20 L25,24" />
            </svg>
        </div>
    </nav>
);

export default Navbar;

