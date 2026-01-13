/**
 * SquigglyLine Component
 *
 * Denna komponent renderar en handritad, vågig linje som används som avdelare
 * mellan olika sektioner på sidan.
 */

import React from 'react';

const SquigglyLine: React.FC = () => (
    <div
        style={{
            width: '100%',
            height: '32px',
            overflow: 'hidden',
            margin: '3rem 0',
            opacity: 0.8
        }}
    >
        <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%' }}
        >
            {/* SVG-path som skapar en vågig linje genom hela bredden */}
            <path
                d="M0,20 Q30,5 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20"
                fill="none"
                stroke="var(--text-ink)"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    </div>
);

export default SquigglyLine;

