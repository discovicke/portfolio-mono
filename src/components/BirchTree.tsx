/**
 * BirchTree Component
 *
 * Denna komponent renderar en dekorativ björk-illustration.
 * Den används som bakgrundsdekoration på olika ställen på sidan.
 */

import React from 'react';

interface BirchTreeProps {
    className?: string;
    style?: React.CSSProperties;
}

const BirchTree: React.FC<BirchTreeProps> = ({ style }) => (
    <div
        style={{
            position: 'absolute',
            pointerEvents: 'none',  // Gör så att trädet inte blockerar musklick
            userSelect: 'none',      // Gör så att trädet inte kan markeras
            opacity: 0.2,
            ...style                 // Applicerar custom styles från parent
        }}
    >
        <svg width="100" height="600" viewBox="0 0 100 600" fill="none">
            {/* Trädstam med organisk form */}
            <path
                d="M20,600 C25,500 15,400 20,300 C25,200 18,100 22,0 L70,0 C75,100 65,200 70,300 C75,400 68,500 72,600"
                fill="var(--birch-grey)"
            />
            {/* Björkens karakteristiska mörka fläckar (nedre delen) */}
            <path
                d="M22,550 L50,545 M68,520 L40,525 M25,480 L45,475 M70,440 L50,445 M20,380 L60,375"
                stroke="var(--text-ink)"
                strokeWidth="3"
                strokeLinecap="round"
            />
            {/* Björkens karakteristiska mörka fläckar (övre delen) */}
            <path
                d="M24,250 L45,245 M69,210 L50,215 M22,150 L35,148 M70,80 L55,85"
                stroke="var(--text-ink)"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    </div>
);

export default BirchTree;

