"use client";

import { useEffect } from "react";

/** Page-wide animation wiring: scroll reveals, counters, progress bar, timeline, cursor, magnetic + tilt. */
export default function Effects() {
  useEffect(() => {
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T & Element>(s)) as unknown as T[];
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(t: Window | Document | HTMLElement, type: K | string, fn: EventListener, opts?: AddEventListenerOptions) => {
      t.addEventListener(type, fn, opts);
      cleanups.push(() => t.removeEventListener(type, fn, opts));
    };

    /* Scroll reveal */
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.setAttribute("data-shown", ""); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    $$("[data-reveal], [data-split]").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* Counters */
    const counterIO = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement, end = Number(el.dataset.count), dur = 1600, t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      if (reduceMotion) el.textContent = String(end); else requestAnimationFrame(step);
      counterIO.unobserve(el);
    }), { threshold: 0.6 });
    $$("[data-count]").forEach((el) => counterIO.observe(el));
    cleanups.push(() => counterIO.disconnect());

    /* Scroll progress, timeline line, back-to-top */
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const toTop = document.querySelector<HTMLElement>(".to-top");
    const timeline = document.querySelector<HTMLElement>(".timeline");
    let ticking = false;
    const onScroll = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      toTop?.classList.toggle("is-visible", y > 700);
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
        timeline.style.setProperty("--line", `${p * 100}%`);
      }
      ticking = false;
    };
    on(window, "scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();

    /* Pointer effects (desktop only) */
    if (finePointer && !reduceMotion) {
      const cursor = document.querySelector<HTMLElement>(".cursor");
      const dot = document.querySelector<HTMLElement>(".cursor__dot");
      const ring = document.querySelector<HTMLElement>(".cursor__ring");
      let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf = 0;
      on(window, "mousemove", ((e: MouseEvent) => {
        mx = e.clientX; my = e.clientY;
        if (dot) dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }) as EventListener, { passive: true });
      const loop = () => {
        rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
        if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        raf = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => cancelAnimationFrame(raf));
      on(document, "mouseover", ((e: MouseEvent) => {
        cursor?.classList.toggle("is-hover", !!(e.target as Element).closest?.("a, button, .project, input, textarea"));
      }) as EventListener);

      $$<HTMLElement>(".magnetic").forEach((el) => {
        on(el, "mousemove", ((e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
        }) as EventListener);
        on(el, "mouseleave", () => { el.style.transform = ""; });
      });

      const tilt = (el: HTMLElement, strength: number) => {
        on(el, "mousemove", ((e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-6px)`;
        }) as EventListener);
        on(el, "mouseleave", () => { el.style.transform = ""; });
      };
      $$<HTMLElement>(".project").forEach((el) => tilt(el, 8));
      $$<HTMLElement>("[data-tilt]").forEach((el) => tilt(el, 14));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="cursor" aria-hidden="true"><div className="cursor__dot" /><div className="cursor__ring" /></div>
      <div className="scroll-progress" aria-hidden="true" />
      <a href="#home" className="to-top" aria-label="Back to top">↑</a>
    </>
  );
}
