/**
 * Modal Component
 *
 * En återanvändbar modal-komponent för att visa detaljerad projektinformation.
 * Stängs genom att klicka på X-knappen, overlay eller trycker på Escape.
 */

import React, { useEffect, useCallback } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
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
                <button className="modal-close" onClick={onClose} aria-label="Stäng modal">
                    <X size={24} />
                </button>

                {/* Projektbild */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="modal-image"
                />

                {/* Modal-innehåll */}
                <div className="modal-content">
                    {/* Header med titel och metadata */}
                    <div className="modal-header">
                        <h2 id="modal-title" className="modal-title">{project.title}</h2>
                        <div className="modal-meta">
                            <span className="modal-category">{project.category}</span>
                            {project.year && (
                                <span className="modal-year">{project.year}</span>
                            )}
                        </div>
                    </div>

                    {/* Beskrivning */}
                    <p className="modal-description">
                        {project.longDesc || project.desc}
                    </p>

                    {/* Roll */}
                    {project.role && (
                        <>
                            <h3 className="modal-section-title">Min roll</h3>
                            <p className="modal-role">{project.role}</p>
                        </>
                    )}

                    {/* Teknologier */}
                    {project.technologies && project.technologies.length > 0 && (
                        <>
                            <h3 className="modal-section-title">Teknologier</h3>
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
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link modal-link-primary"
                            >
                                <ExternalLink size={18} />
                                Besök projektet
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                <Github size={18} />
                                Se koden
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
