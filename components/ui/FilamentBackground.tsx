'use client';

import { useEffect, useRef } from 'react';

export default function FilamentBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const filamentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const filaments: {
      element: HTMLDivElement;
      x: number;
      y: number;
      rotation: number;
      fallSpeed: number;
      attractionStrength: number;
      attractionDistance: number;
      attracted: boolean;
    }[] = [];

    const filamentCount = 200;
    for (let i = 0; i < filamentCount; i++) {
      const el = document.createElement('div');
      el.className = 'filament';
      el.style.position = 'absolute';
      el.style.width = '3px';
      el.style.height = '50px';
      el.style.backgroundColor = 'rgba(17, 122, 101, 0.2)';
      el.style.transition = 'transform 0.1s linear';
      el.style.willChange = 'transform';
      containerRef.current.appendChild(el);

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;

      filaments.push({
        element: el,
        x,
        y,
        rotation,
        fallSpeed: 0.5 + Math.random() * 2,
        attractionStrength: 0.1 + Math.random() * 0.2,
        attractionDistance: 150 + Math.random() * 100,
        attracted: false,
      });

      el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseMoving = false;
    let lastMove = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      lastMove = Date.now();

      setTimeout(() => {
        if (Date.now() - lastMove >= 100) isMouseMoving = false;
      }, 100);
    };

    const animate = () => {
      filaments.forEach(f => {
        const dx = mouseX - f.x;
        const dy = mouseY - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        f.attracted = dist < f.attractionDistance;

        if (f.attracted) {
          f.x += dx * f.attractionStrength;
          f.y += dy * f.attractionStrength;
          f.rotation = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        } else {
          f.y += f.fallSpeed;
          if (f.y > window.innerHeight + 100) {
            f.x = Math.random() * window.innerWidth;
            f.y = -50 - Math.random() * 100;
            f.rotation = Math.random() * 360;
          }
        }

        f.element.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${f.rotation}deg)`;

        if (isMouseMoving && f.attracted && Math.random() < 0.05) {
          f.attracted = false;
          f.x += (Math.random() - 0.5) * 10;
          f.y += (Math.random() - 0.5) * 10;
        }
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', () => {
      filaments.forEach((f, i) => {
        if (i % 3 === 0) {
          f.x = Math.random() * window.innerWidth;
          f.y = Math.random() * window.innerHeight;
          f.element.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${f.rotation}deg)`;
        }
      });
    });

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      containerRef.current?.replaceChildren(); // cleanup
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
}
