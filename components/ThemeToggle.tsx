'use client';

import { useEffect, useState, useRef } from 'react';

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    setIsLight(root.classList.contains('light'));
  }, []);

  useEffect(() => {
    if (!isGlitching) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZMODULE_OVERRIDE_INIT_SYSTEM_ALTER_SYS_';
    const charArr = chars.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    let animationFrameId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isGlitching]);

  const triggerHackerSequence = () => {
    setIsGlitching(true);

    setTimeout(() => {
      const root = window.document.documentElement;
      
      if (root.classList.contains('light')) {
        root.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        setIsLight(false);
      } else {
        root.classList.add('light');
        localStorage.setItem('theme', 'light');
        setIsLight(true);
      }
      
      setIsGlitching(false);
    }, 1200);
  };

  return (
    <>
      {isGlitching && (
        <div className="fixed inset-0 z-9999 bg-black pointer-events-none flex items-center justify-center font-mono">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <div className="absolute bg-black/80 px-6 py-4 border border-emerald-500 text-emerald-500 rounded text-sm uppercase tracking-widest animate-pulse">
            &gt;&gt; OVERRIDING_SYS_THEME...
          </div>
        </div>
      )}

      <button
        onClick={triggerHackerSequence}
        disabled={isGlitching}
        className="text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded border border-neutral-800 hover:border-emerald-500 light:border-neutral-300 light:hover:border-emerald-600 text-neutral-400 light:text-neutral-700 transition-colors cursor-pointer disabled:opacity-50"
      >
        {isLight ? '⚡ OVERRIDE: LIGHT' : '🌙 OVERRIDE: DARK'}
      </button>
    </>
  );
}