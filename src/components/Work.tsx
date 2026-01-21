/**
 * Work Component (Projektsektionen)
 *
 * Detta är sektionen som visar alla projekt i ett rutnät.
 * Varje projektkort har en bild, titel, beskrivning och kategori.
 * När man klickar på ett projekt öppnas en modal med mer information.
 */

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import Modal from './Modal';
import { useLanguage } from '../i18n/LanguageContext';
import './Work.css';

const Work: React.FC = () => {
    // State för att hålla reda på vilket projekt som är valt och om modalen är öppen
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Hämta översättningar
    const { t } = useLanguage();

    /**
     * Öppna modal med valt projekt
     */
    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    /**
     * Stäng modal och rensa valt projekt
     */
    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Vänta lite innan vi rensar projektet så animationen hinner spela
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <section id="work" className="section container">
                {/* Sektion-header med titel och undertext */}
                <div className="work-header">
                    <h2 className="work-title">
                        {t.work.title}
                    </h2>
                    <span className="work-subtitle">
                        {t.work.subtitle}
                    </span>
                </div>

                {/* Projekt-rutnät */}
                <div className="projects-grid">
                    {/* Loopa igenom alla projekt från data/projects.ts */}
                    {projects.map((p, i) => {
                        // Hämta översatt projektdata om den finns
                        const translatedProject = t.projects[p.id];
                        const title = translatedProject?.title || p.title;
                        const category = translatedProject?.category || p.category;
                        const desc = translatedProject?.desc || p.desc;

                        return (
                            <div
                                key={p.id}
                                className={`project-card ${i % 2 !== 0 ? 'offset' : ''}`}
                                onClick={() => handleProjectClick(p)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleProjectClick(p);
                                    }
                                }}
                                aria-label={`${t.work.openProject} ${title}`}
                            >
                                {/* Wobble Box - bildcontainer med handritad ram */}
                                <div className="wobble-box">
                                    <img src={p.img} alt={title} />

                                    {/* Kategori-sticker i hörnet */}
                                    <div className="sticker">
                                        {category}
                                    </div>
                                </div>

                                {/* Projekt-information under bilden */}
                                <div className="project-info">
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>

                                    {/* Pil-ikon som indikerar att man kan klicka */}
                                    <div className="project-arrow">
                                        <ArrowRight size={32} strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Modal för projektdetaljer */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </>
    );
};

export default Work;

