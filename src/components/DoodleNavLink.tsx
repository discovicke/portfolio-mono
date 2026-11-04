/**
 * DoodleNavLink Component
 *
 * En navigationslänk med en handritad penndragning över sig när sektionen
 * är aktiv. Strecken är två lätta, ojämna passningar som ritas in med
 * stroke-dashoffset – det ska kännas som att någon stryker under med penna.
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

            {/* Handritat penndrag som visas när länken är aktiv */}
            <span className="doodle-nav-mark" aria-hidden="true">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" focusable="false">
                    <path
                        className="doodle-stroke doodle-stroke-1"
                        pathLength={1}
                        d="M2 13C20 9 42 15 61 10S86 6 98 11"
                    />
                    <path
                        className="doodle-stroke doodle-stroke-2"
                        pathLength={1}
                        d="M3 15C24 12 47 17 68 12S90 9 97 14"
                    />
                </svg>
            </span>
        </a>
    );
};

export default DoodleNavLink;
