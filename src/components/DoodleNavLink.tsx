/**
 * DoodleNavLink Component
 *
 * En navigations-länk med handritad doodle-markering.
 * Visar ett överkryss (doodle X) när sektionen är aktiv.
 * Använder Intersection Observer för att detektera vilken sektion som är synlig.
 */

import React from 'react';
import './DoodleNavLink.css';

interface DoodleNavLinkProps {
    label: string;
    href: string;
    isActive: boolean;
}

const DoodleNavLink: React.FC<DoodleNavLinkProps> = ({ label, href, isActive }) => {
    /**
     * Smooth scroll till sektionen
     */
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href={href}
            className={`doodle-nav-link ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            <span className="doodle-nav-text">{label}</span>

            {/* Doodle X-markering som visas när aktiv */}
            <div className="doodle-nav-mark">
                <img
                    src="/svg/doodleX2.svg"
                    alt=""
                    className="doodle-x"
                />
            </div>
        </a>
    );
};

export default DoodleNavLink;
