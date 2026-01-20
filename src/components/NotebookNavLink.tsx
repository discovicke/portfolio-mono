/**
 * NotebookNavLink Component
 *
 * Detta är en speciell navigations-länk som ser ut som en checkbox i ett anteckningsblock.
 * När användaren klickar på den animeras den som att den blir ". bockad av",
 * och sedan navigerar den till den angivna länken.
 */

import React, { useState } from 'react';
import './NotebookNavLink.css';

interface NotebookNavLinkProps {
    label: string;   // Texten som visas
    href: string;    // URL att navigera till
}

const NotebookNavLink: React.FC<NotebookNavLinkProps> = ({ label, href }) => {
    // State för att hålla reda på om checkboxen är ibockad
    const [checked, setChecked] = useState(false);

    /**
     * Handler för när checkboxen ändras
     * Animerar först, sedan navigerar till href
     */
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);

        if (e.target.checked) {
            // Vänta lite för att låta animeringen spela upp
            setTimeout(() => {
                window.location.href = href;
                // Avbocka efter navigation (för anchor-länkar)
                setTimeout(() => setChecked(false), 1000);
            }, 400);
        }
    };

    return (
        // label-element används för att göra hela komponenten klickbar
        <label className="notebook-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleClick}
            />
            {/* Checkmark - den synliga checkboxen */}
            <span className="checkmark"></span>
            {/* Text med genomstrykning-animation */}
            <span className="text">
                <span className="text-content">{label}</span>
                {/* SVG-linje som animeras när checkboxen bockas i */}
                <svg preserveAspectRatio="none" viewBox="0 0 400 20" className="cut-line">
                    <path d="M0,10 H400"></path>
                </svg>
            </span>
        </label>
    );
};

export default NotebookNavLink;

