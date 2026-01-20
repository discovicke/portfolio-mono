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
}

// Array med tillgängliga doodle-markeringar
const DOODLE_MARKS = [
    '/svg/doodleX2.svg',
    '/svg/doodleX1.svg',
    '/svg/doodleHash.svg'
];

const DoodleNavLink: React.FC<DoodleNavLinkProps> = ({ label, href, isActive }) => {
    /**
     * Välj en doodle-markering baserat på href
     * Använder en enkel hash-funktion för att få konsistent men "varierad" val
     */
    const doodleSrc = useMemo(() => {
        let hash = 0;
        for (let i = 0; i < href.length; i++) {
            hash = href.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % DOODLE_MARKS.length;
        return DOODLE_MARKS[index];
    }, [href]);

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
