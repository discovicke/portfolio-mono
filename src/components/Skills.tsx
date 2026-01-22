/**
 * Skills Component
 *
 * Visar en samling av tekniska färdigheter uppdelade i kategorier.
 * Varje skill visas med en ikon från shields.io och namn på hover.
 */

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
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

const Skills: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
            <div className="container">
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
        </section>
    );
};

export default Skills;
