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
    icon: string; // shields.io badge URL
}

interface SkillCategory {
    titleKey: 'frontend' | 'backend' | 'tools';
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        titleKey: 'frontend',
        skills: [
            { name: 'HTML5', icon: 'https://img.shields.io/badge/HTML5-181818?style=for-the-badge&logo=html5&logoColor=EFEFEA' },
            { name: 'CSS3', icon: 'https://img.shields.io/badge/CSS3-181818?style=for-the-badge&logo=css3&logoColor=EFEFEA' },
            { name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-181818?style=for-the-badge&logo=javascript&logoColor=EFEFEA' },
            { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-181818?style=for-the-badge&logo=typescript&logoColor=EFEFEA' },
            { name: 'Angular', icon: 'https://img.shields.io/badge/Angular-181818?style=for-the-badge&logo=angular&logoColor=EFEFEA' },
            { name: 'React', icon: 'https://img.shields.io/badge/React-181818?style=for-the-badge&logo=react&logoColor=EFEFEA' },
        ],
    },
    {
        titleKey: 'backend',
        skills: [
            { name: 'C#', icon: 'https://img.shields.io/badge/C%23-181818?style=for-the-badge&logo=csharp&logoColor=EFEFEA' },
            { name: '.NET', icon: 'https://img.shields.io/badge/.NET-181818?style=for-the-badge&logo=dotnet&logoColor=EFEFEA' },
            { name: 'ASP.NET', icon: 'https://img.shields.io/badge/ASP.NET-181818?style=for-the-badge&logo=dotnet&logoColor=EFEFEA' },
            { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-181818?style=for-the-badge&logo=nodedotjs&logoColor=EFEFEA' },
            { name: 'Entity Framework', icon: 'https://img.shields.io/badge/Entity_Framework-181818?style=for-the-badge&logo=dotnet&logoColor=EFEFEA' },
        ],
    },
    {
        titleKey: 'tools',
        skills: [
            { name: 'SQL', icon: 'https://img.shields.io/badge/SQL-181818?style=for-the-badge&logo=postgresql&logoColor=EFEFEA' },
            { name: 'Git', icon: 'https://img.shields.io/badge/Git-181818?style=for-the-badge&logo=git&logoColor=EFEFEA' },
            { name: 'GitHub', icon: 'https://img.shields.io/badge/GitHub-181818?style=for-the-badge&logo=github&logoColor=EFEFEA' },
            { name: 'VS Code', icon: 'https://img.shields.io/badge/VS_Code-181818?style=for-the-badge&logo=visualstudiocode&logoColor=EFEFEA' },
            { name: 'JetBrains', icon: 'https://img.shields.io/badge/JetBrains-181818?style=for-the-badge&logo=jetbrains&logoColor=EFEFEA' },
            { name: 'Postman', icon: 'https://img.shields.io/badge/Postman-181818?style=for-the-badge&logo=postman&logoColor=EFEFEA' },
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
                                                    <div className="skill-card" tabIndex={0} role="listitem" aria-label={skill.name}>
                                                        <img
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            className="skill-icon"
                                                            loading="lazy"
                                                        />
                                                    </div>
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
