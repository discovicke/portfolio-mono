/**
 * Polaroid Component
 *
 * En återanvändbar bildkomponent med analog, vintage-känsla.
 * Stöder tre stilar: polaroid, instant (Fuji-stil).
 *
 * Monokrom som standard, färg vid hover.
 * Matchar den handritade, 70/80-tals psych-estetiken.
 */

import React from 'react';
import './Polaroid.css';

export type PolaroidVariant = 'polaroid' | 'instant';

export interface PolaroidImage {
    src: string;
    alt: string;
    caption?: string;
}

interface PolaroidProps {
    /** Bild-URL */
    src: string;
    /** Alt-text för tillgänglighet */
    alt: string;
    /** Valfri bildtext/caption */
    caption?: string;
    /** Stilvariant: 'polaroid' | 'instant' */
    variant?: PolaroidVariant;
    showTape?: boolean;
    /** onClick-handler */
    onClick?: () => void;
}

interface PolaroidGalleryProps {
    /** Array med bilder */
    images: PolaroidImage[];
    /** Stilvariant för alla bilder */
    variant?: PolaroidVariant;
    /** Visa tejp på polaroids? */
    showTape?: boolean;
}

/**
 * Enskild Polaroid-komponent
 */
export const Polaroid: React.FC<PolaroidProps> = ({
    src,
    alt,
    caption,
    variant = 'polaroid',
    showTape = true,
    onClick
}) => {
    // Polaroid-stil
    if (variant === 'polaroid') {
        return (
            <div className="polaroid" onClick={onClick}>
                {showTape && <div className="polaroid-tape" />}
                <img src={src} alt={alt} className="polaroid-image" />
                {caption && <span className="polaroid-caption">{caption}</span>}
            </div>
        );
    }

    // Instant/Fuji-stil
    if (variant === 'instant') {
        return (
            <div className="instant" onClick={onClick}>
                <img src={src} alt={alt} className="instant-image" />
                {caption && <span className="instant-caption">{caption}</span>}
            </div>
        );
    }

    return null;
};

/**
 * Galleri-komponent för flera Polaroids
 */
export const PolaroidGallery: React.FC<PolaroidGalleryProps> = ({
    images,
    variant = 'polaroid',
    showTape = true
}) => {
    return (
        <div className="polaroid-gallery">
            {images.map((image, index) => (
                <Polaroid
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                    variant={variant}
                    showTape={showTape}
                />
            ))}
        </div>
    );
};

export default Polaroid;
