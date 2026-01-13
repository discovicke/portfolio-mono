/**
 * ClickSpark Component
 *
 * Detta är en wrapper-komponent som lägger till en klickanimation med "gnistor"
 * när användaren klickar någonstans på sidan.
 *
 * Den använder Canvas API för att rita ut animerade linjer (gnistor) som sprider sig
 * från klickpunkten i alla riktningar.
 */

import React, { useRef, useEffect, useCallback } from 'react';
import type { ClickSparkProps, Spark } from '../types';

const ClickSpark: React.FC<ClickSparkProps> = ({
    sparkColor = '#181818',      // Default färg
    sparkSize = 10,              // Default storlek
    sparkRadius = 15,            // Default radie
    sparkCount = 8,              // Default antal gnistor
    duration = 400,              // Default duration (millisekunder)
    easing = 'ease-out',         // Default easing-funktion
    extraScale = 1.0,            // Default extra skalning
    children                      // Barn-komponenter som wrapas
}) => {
    // useRef används för att lagra referenser som inte ska trigga re-render
    const canvasRef = useRef<HTMLCanvasElement>(null);        // Referens till canvas-element
    const sparksRef = useRef<Spark[]>([]);                     // Array med aktiva gnistor
    const startTimeRef = useRef<number | null>(null);          // Starttid för animation

    /**
     * Effect-hook för att hantera canvas-storlek
     * Körs när komponenten mountas och när fönsterstorleken ändras
     */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        let resizeTimeout: ReturnType<typeof setTimeout>;

        // Funktion för att sätta canvas-storlek till samma som parent-elementet
        const resizeCanvas = () => {
            const { width, height } = parent.getBoundingClientRect();
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        // Debounce resize för att undvika för många uppdateringar
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 100);
        };

        // ResizeObserver för att upptäcka storleksändringar
        const ro = new ResizeObserver(handleResize);
        ro.observe(parent);

        resizeCanvas();

        // Cleanup-funktion som körs när komponenten unmountas
        return () => {
            ro.disconnect();
            clearTimeout(resizeTimeout);
        };
    }, []);

    /**
     * Easing-funktion som bestämmer hur gnistorna rör sig
     * useCallback används för att undvika att funktionen återskapas vid varje render
     */
    const easeFunc = useCallback(
        (t: number) => {
            switch (easing) {
                case 'linear':
                    return t;
                case 'ease-in':
                    return t * t;
                case 'ease-in-out':
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:  // ease-out
                    return t * (2 - t);
            }
        },
        [easing]
    );

    /**
     * Effect-hook för att rita animationen
     * Körs kontinuerligt via requestAnimationFrame
     */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;

        // Draw-funktionen körs för varje frame
        const draw = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            // Rensa canvas för varje frame
            ctx?.clearRect(0, 0, canvas.width, canvas.height);

            // Filtrera och rita varje gnista
            sparksRef.current = sparksRef.current.filter((spark: Spark) => {
                const elapsed = timestamp - spark.startTime;

                // Ta bort gnistan om animationen är klar
                if (elapsed >= duration) {
                    return false;
                }

                // Beräkna position baserat på tid och easing
                const progress = elapsed / duration;
                const eased = easeFunc(progress);

                const distance = eased * sparkRadius * extraScale;
                const lineLength = sparkSize * (1 - eased);

                // Beräkna start- och slutpunkt för linjen
                const x1 = spark.x + distance * Math.cos(spark.angle);
                const y1 = spark.y + distance * Math.sin(spark.angle);
                const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

                // Rita linjen
                ctx.strokeStyle = sparkColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                return true;
            });

            // Schemalägg nästa frame
            animationId = requestAnimationFrame(draw);
        };

        animationId = requestAnimationFrame(draw);

        // Cleanup - stoppa animation när komponenten unmountas
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easeFunc, extraScale]);

    /**
     * Handler för musklick
     * Skapar nya gnistor vid klickpunkten
     */
    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Beräkna klickposition relativt till canvas
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const now = performance.now();

        // Skapa nya gnistor som sprider sig i alla riktningar
        const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
            x,
            y,
            angle: (2 * Math.PI * i) / sparkCount,  // Fördela jämnt i en cirkel
            startTime: now
        }));

        sparksRef.current.push(...newSparks);
    };

    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                position: 'relative'
            }}
            onClick={handleClick}
        >
            {/* Canvas för att rita gnistorna */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',  // Gör så canvas inte blockerar klick
                    zIndex: 9999
                }}
            />
            {/* Barn-komponenter som wrapas */}
            {children}
        </div>
    );
};

export default ClickSpark;

