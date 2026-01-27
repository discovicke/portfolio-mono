/**
 * ExperienceModal Component
 *
 * En modal som visar alla CV-entries grupperade efter typ.
 * Följer samma estetik som projekt-modalen.
 */

import React, { useEffect, useCallback } from 'react';
import { X, MapPin, Calendar, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';
import type { Experience } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getAllExperiences } from '../data/experiences';
import './ExperienceModal.css';

interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Ikon-mapping för olika typer
const typeIcons = {
    work: Briefcase,
    education: GraduationCap,
    certificate: Award,
    volunteer: Heart,
};

const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const allExperiences = getAllExperiences();

    // Gruppera efter typ
    const groupedExperiences = {
        education: allExperiences.filter(exp => exp.type === 'education'),
        work: allExperiences.filter(exp => exp.type === 'work'),
        certificate: allExperiences.filter(exp => exp.type === 'certificate'),
        volunteer: allExperiences.filter(exp => exp.type === 'volunteer'),
    };

    /**
     * Hantera Escape-tangent för att stänga modalen
     */
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    /**
     * Lägg till/ta bort event listener för tangentbord
     * Förhindra scroll på body när modal är öppen
     */
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const formatDateRange = (exp: Experience): string => {
        const start = exp.startDate;
        const end = exp.isCurrent ? t.experience.current : exp.endDate || '';
        return `${start} – ${end}`;
    };

    const renderExperienceCard = (exp: Experience) => {
        const translatedExp = t.experiences[exp.id];
        const Icon = typeIcons[exp.type];

        return (
            <article key={exp.id} className="exp-modal-card">
                <div className="exp-modal-card-header">
                    <div className="exp-modal-card-icon">
                        <Icon size={20} />
                    </div>
                    <div className="exp-modal-card-titles">
                        <h4 className="exp-modal-card-title">
                            {translatedExp?.title || exp.title}
                        </h4>
                        <p className="exp-modal-card-company">
                            {translatedExp?.company || exp.company}
                        </p>
                    </div>
                </div>

                <div className="exp-modal-card-meta">
                    <span className="exp-modal-card-date">
                        <Calendar size={14} />
                        {formatDateRange(exp)}
                    </span>
                    {exp.location && (
                        <span className="exp-modal-card-location">
                            <MapPin size={14} />
                            {exp.location}
                        </span>
                    )}
                </div>

                <p className="exp-modal-card-desc">
                    {translatedExp?.longDescription || exp.longDescription || translatedExp?.description || exp.description}
                </p>

                {exp.skills && exp.skills.length > 0 && (
                    <div className="exp-modal-card-skills">
                        {exp.skills.map((skill, index) => (
                            <span key={index} className="exp-modal-skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </article>
        );
    };

    const renderSection = (type: keyof typeof groupedExperiences, experiences: Experience[]) => {
        if (experiences.length === 0) return null;

        return (
            <section className="exp-modal-section">
                <h3 className="exp-modal-section-title">
                    {t.experienceModal.types[type]}
                </h3>
                <div className="exp-modal-cards">
                    {experiences.map(renderExperienceCard)}
                </div>
            </section>
        );
    };

    return (
        <div className="exp-modal-overlay" onClick={handleOverlayClick}>
            <div className="exp-modal-container" role="dialog" aria-modal="true" aria-labelledby="exp-modal-title">
                {/* Stäng-knapp */}
                <button className="exp-modal-close" onClick={onClose} aria-label={t.experienceModal.close}>
                    <X size={24} />
                </button>

                {/* Header */}
                <header className="exp-modal-header">
                    <h2 id="exp-modal-title" className="exp-modal-title">
                        {t.experienceModal.title}
                    </h2>
                </header>

                {/* Innehåll */}
                <div className="exp-modal-content">
                    {renderSection('education', groupedExperiences.education)}
                    {renderSection('work', groupedExperiences.work)}
                    {renderSection('volunteer', groupedExperiences.volunteer)}
                    {renderSection('certificate', groupedExperiences.certificate)}
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;
