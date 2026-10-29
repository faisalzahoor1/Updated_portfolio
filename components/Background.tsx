"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number; r: number; c: string };

/** Ambient background: particle network that reacts to the mouse, plus floating colour blobs. */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["37,99,235", "30,64,175", "14,165,233", "96,165,250"];
    const mouse = { x: -9999, y: -9999 };
    let w = 0, h = 0, dpr = 1, pts: Pt[] = [], raf = 0, resizeTimer = 0;

    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      const n = Math.round(Math.min(90, (innerWidth * innerHeight) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr,
        r: (Math.random() * 1.6 + 0.6) * dpr, c: colors[(Math.random() * colors.length) | 0],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const L = 130 * dpr;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dxm = p.x - mouse.x, dym = p.y - mouse.y, dm = Math.hypot(dxm, dym);
        if (dm < 140 * dpr && dm > 0) { p.x += (dxm / dm) * 1.4; p.y += (dym / dm) * 1.4; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},.55)`; ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < L) {
            ctx.strokeStyle = `rgba(${p.c},${(1 - d / L) * 0.18})`;
            ctx.lineWidth = dpr * 0.8;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = window.setTimeout(resize, 200); };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; };
    const onVisibility = () => { cancelAnimationFrame(raf); if (!document.hidden) draw(); };

    resize(); draw();
    addEventListener("resize", onResize);
    addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", onResize);
      removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <canvas ref={canvasRef} id="particles" />
      <div className="blob blob--1" />
      <div className="blob blob--2" />
      <div className="blob blob--3" />
      <div className="grid-overlay" />
      <div className="noise" />
    </div>
  );
}
