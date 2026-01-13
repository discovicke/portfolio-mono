/**
 * SVGFilters Component
 *
 * Detta är en komponent som innehåller SVG-filter som används för specialeffekter.
 * Den renderar en osynlig SVG som innehåller filter-definitioner som andra element
 * kan referera till via CSS (filter: url(#wavy))
 */

import React from 'react';

const SVGFilters: React.FC = () => (
    // SVG:n är osynlig (width/height 0) men dess filter är tillgängliga globalt
    <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
            {/* Liquid Text Filter - Ger text en "flytande" våg-effekt */}
            <filter id="wavy">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.01"
                    numOctaves="1"
                    result="noise"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="2"
                />
            </filter>

            {/* Notebook Checkbox Noise Filter - Ger checkbox en handritad känsla */}
            <filter id="handDrawnNoise">
                <feTurbulence
                    result="noise"
                    numOctaves="8"
                    baseFrequency="0.1"
                    type="fractalNoise"
                />
                <feDisplacementMap
                    yChannelSelector="G"
                    xChannelSelector="R"
                    scale="3"
                    in2="noise"
                    in="SourceGraphic"
                />
            </filter>
        </defs>
    </svg>
);

export default SVGFilters;

