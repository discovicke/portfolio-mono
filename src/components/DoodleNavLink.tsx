/**
 * DoodleNavLink Component
 *
 * En navigations-länk med handritad doodle-markering.
 * Visar ett överkryss (doodle X) när sektionen är aktiv.
 * Använder Intersection Observer för att detektera vilken sektion som är synlig.
 */

import React, { useMemo } from 'react';
import './DoodleNavLink.css';

interface DoodleNavLinkProps {
    label: string;
    href: string;
    isActive: boolean;
    /**
     * Vilken doodle-variant som ska användas (0-baserad index)
     * Om ej satt används första i listan.
     */
    orderIndex?: number;
}

// Array med tillgängliga doodle-markeringar
const DOODLE_MARKS = [
    '/svg/doodleHash.svg',
    '/svg/doodleX2.svg',
    '/svg/doodleX1.svg',
];

const DoodleNavLink: React.FC<DoodleNavLinkProps> = ({ label, href, isActive, orderIndex = 0 }) => {
    /**
     * Välj doodle efter ordning i arrayen baserat på givet index
     */
    const doodleSrc = useMemo(() => {
        const idx = Math.abs(orderIndex) % DOODLE_MARKS.length;
        return DOODLE_MARKS[idx];
    }, [orderIndex]);

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
                    src={doodleSrc}
                    alt=""
                    className="doodle-x"
                />
            </div>
        </a>
    );
};

export default DoodleNavLink;
