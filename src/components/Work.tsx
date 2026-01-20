/**
 * Work Component (Projektsektionen)
 *
 * Detta är sektionen som visar alla projekt i ett rutnät.
 * Varje projektkort har en bild, titel, beskrivning och kategori.
 */

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {projects} from '../data/projects';

const Work: React.FC = () => (
    <section id="work" className="section container">
        {/* Sektion-header med titel och undertext */}
        <div className="work-header">
            <h2 className="work-title">
                Utvalda Projekt
            </h2>
            <span className="work-subtitle">
                (Det jag är stoltast över just nu)
            </span>
        </div>

        {/* Projekt-rutnät */}
        <div className="projects-grid">
            {/* Loopa igenom alla projekt från data/projects.ts */}
            {projects.map((p, i) => (
                <div
                    key={p.id}
                    className={`project-card ${i % 2 !== 0
                        ? 'offset'
                        : ''}`}  // Varje andra kort får offset-klass
                >
                    {/* Wobble Box - bildcontainer med handritad ram */}
                    <div className="wobble-box">
                        <img src={p.img} alt={p.title}/>

                        {/* Kategori-sticker i hörnet */}
                        <div className="sticker">
                            {p.category}
                        </div>
                    </div>

                    {/* Projekt-information under bilden */}
                    <div className="project-info">
                        <div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>

                        {/* Pil-ikon som indikerar att man kan klicka */}
                        <div className="project-arrow">
                            <ArrowRight size={32} strokeWidth={1.5}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Work;

