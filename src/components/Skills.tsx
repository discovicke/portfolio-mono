/**
 * Skills Component
 *
 * Visar en tvåkolumns-layout:
 * - Vänster: Tekniska färdigheter uppdelade i kategorier
 * - Höger: CV-erfarenheter med knapp för att visa alla i modal
 */

import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Heart, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getFeaturedExperiences } from '../data/experiences';
import type { Experience } from '../types';
import ExperienceModal from './ExperienceModal';
import './Skills.css';

interface Skill {
    name: string;
}

interface SkillCategory {
    titleKey: 'frontend' | 'backend' | 'tools' | 'aidata';
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        titleKey: 'frontend',
        skills: [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'Angular' },
            { name: 'React' },
            { name: 'Vite' },
            { name: 'SCSS' },
        ],
    },
    {
        titleKey: 'backend',
        skills: [
            { name: 'C#' },
            { name: '.NET' },
            { name: 'ASP.NET' },
            { name: 'Node.js' },
            { name: 'Entity Framework' },
            { name: 'Dapper' },
            { name: 'Blazor' },
            { name: 'xUnit' },
        ],
    },
    {
        titleKey: 'tools',
        skills: [
            { name: 'SQL' },
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'VS Code' },
            { name: 'JetBrains' },
            { name: 'Postman' },
            { name: 'SQLite' },
            { name: 'PostgreSQL' },
            { name: 'Docker' },
            { name: 'NuGet' },
        ],
    },
    {
        titleKey: 'aidata',
        skills: [
            { name: 'Azure OpenAI' },
            { name: 'Puppeteer' },
            { name: 'JWT' },
        ],
    },
];

// Ikon-mapping för olika erfarenhetstyper
const typeIcons = {
    work: Briefcase,
    education: GraduationCap,
    certificate: Award,
    volunteer: Heart,
};

const Skills: React.FC = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const featuredExperiences = getFeaturedExperiences();

    const formatDateRange = (exp: Experience): string => {
        const start = exp.startDate;
        const end = exp.isCurrent ? t.experience.current : exp.endDate || '';
        return `${start} – ${end}`;
    };

    return (
        <>
            <section id="skills" className="section skills-section" aria-labelledby="skills-title">
                <div className="container">
                    {/* Two-column layout */}
                    <div className="skills-experience-grid">
                        {/* Left Column: Skills */}
                        <div className="skills-column">
                            <header className="skills-header">
                                <h2 id="skills-title" className="section-title skills-title">
                                    {t.skills.title}
                                </h2>
                                <p className="skills-subtitle">{t.skills.subtitle}</p>
                            </header>

                            <div className="skills-grid">
                                {skillCategories.map((category) => (
                                    <div key={category.titleKey} className="skill-category">
                                        <h3 className="skill-category-title">{t.skills[category.titleKey]}</h3>
                                        <ul className="skill-list" role="list">
                                            {category.skills.map((skill) => (
                                                <li key={skill.name} className="skill-item">
                                                    <span className="skill-card">{skill.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Experience */}
                        <div className="experience-column">
                            <header className="experience-header">
                                <h2 className="section-title experience-title">
                                    {t.experience.title}
                                </h2>
                                <p className="experience-subtitle">{t.experience.subtitle}</p>
                            </header>

                            <div className="experience-list">
                                {featuredExperiences.map((exp) => {
                                    const translatedExp = t.experiences[exp.id];
                                    const Icon = typeIcons[exp.type];

                                    return (
                                        <article key={exp.id} className="experience-card">
                                            <div className="experience-card-header">
                                                <div className="experience-card-icon">
                                                    <Icon size={18} />
                                                </div>
                                                <span className="experience-card-type">
                                                    {t.experience.types[exp.type]}
                                                </span>
                                            </div>

                                            <h3 className="experience-card-title">
                                                {translatedExp?.title || exp.title}
                                            </h3>
                                            <p className="experience-card-company">
                                                {translatedExp?.company || exp.company}
                                            </p>

                                            <div className="experience-card-meta">
                                                <span className="experience-card-date">
                                                    <Calendar size={14} />
                                                    {formatDateRange(exp)}
                                                </span>
                                                {exp.location && (
                                                    <span className="experience-card-location">
                                                        <MapPin size={14} />
                                                        {exp.location}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="experience-card-desc">
                                                {translatedExp?.description || exp.description}
                                            </p>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* View All Button */}
                            <button
                                className="experience-view-all"
                                onClick={() => setIsModalOpen(true)}
                                aria-label={t.experience.viewAll}
                            >
                                {t.experience.viewAll}
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Modal */}
            <ExperienceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default Skills;
