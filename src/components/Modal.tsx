/**
 * Modal Component
 *
 * En återanvändbar modal-komponent för att visa detaljerad projektinformation.
 * Stängs genom att klicka på X-knappen, overlay eller trycker på Escape.
 */

import React, { useEffect, useCallback } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
    // Hämta översättningar
    const { t } = useLanguage();

    // Hämta översatt projektdata om den finns
    const translatedProject = project ? t.projects[project.id] : null;

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

    // Rendera inget om modalen inte ska visas
    if (!isOpen || !project) {
        return null;
    }

    /**
     * Hantera klick på overlay (stäng modalen)
     * Stoppa propagation så klick inuti modalen inte stänger den
     */
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                {/* Stäng-knapp */}
                <button className="modal-close" onClick={onClose} aria-label={t.modal.close}>
                    <X size={24} />
                </button>

                {/* Projektbild */}
                <img
                    src={project.img}
                    alt={translatedProject?.title || project.title}
                    className="modal-image"
                />

                {/* Modal-innehåll */}
                <div className="modal-content">
                    {/* Header med titel och metadata */}
                    <div className="modal-header">
                        <h2 id="modal-title" className="modal-title">{translatedProject?.title || project.title}</h2>
                        <div className="modal-meta">
                            <span className="modal-category">{translatedProject?.category || project.category}</span>
                            {project.year && (
                                <span className="modal-year">{project.year}</span>
                            )}
                        </div>
                    </div>

                    {/* Beskrivning */}
                    <p className="modal-description">
                        {translatedProject?.longDesc || project.longDesc || translatedProject?.desc || project.desc}
                    </p>

                    {/* Roll */}
                    {(translatedProject?.role || project.role) && (
                        <>
                            <h3 className="modal-section-title">{t.modal.myRole}</h3>
                            <p className="modal-role">{translatedProject?.role || project.role}</p>
                        </>
                    )}

                    {/* Teknologier */}
                    {project.technologies && project.technologies.length > 0 && (
                        <>
                            <h3 className="modal-section-title">{t.modal.technologies}</h3>
                            <div className="modal-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="modal-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Actionknappar */}
                    <div className="modal-actions">
                        {/* Live demo knapp - alltid synlig, disabled om ingen URL */}
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link modal-link-primary"
                                aria-label={`${t.modal.viewLive}: ${translatedProject?.title || project.title}`}
                            >
                                <ExternalLink size={18} />
                                {t.modal.viewLive}
                            </a>
                        ) : (
                            <button
                                className="modal-link modal-link-primary modal-link-disabled"
                                disabled
                                aria-label={`${t.modal.liveUnavailable}: ${translatedProject?.title || project.title}`}
                            >
                                <ExternalLink size={18} />
                                {t.modal.liveUnavailable}
                            </button>
                        )}

                        {/* GitHub repo knapp */}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                                aria-label={`${t.modal.viewCode}: ${translatedProject?.title || project.title}`}
                            >
                                <Github size={18} />
                                {t.modal.viewCode}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
