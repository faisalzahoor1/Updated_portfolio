"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export function Logo() {
  return (
    <a href="#home" className="nav__logo" aria-label="Faisal Zahoor — home">
      <img src="/assets/favicon.svg?v=3" alt="" width={40} height={40} className="nav__logo-mark" />
      <span className="nav__logo-text">faisal<span>.dev</span></span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const lastY = useRef(0);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const onScroll = () => {
      const y = scrollY;
      setScrolled(y > 30);
      setHidden(y > lastY.current && y > 500 && !openRef.current);
      lastY.current = y;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("keydown", onKey); spy.disconnect(); };
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}>
      <Logo />
      <nav aria-label="Primary">
        <ul className={`nav__links${open ? " is-open" : ""}`} id="navLinks">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : undefined} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li><a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>Let&apos;s talk</a></li>
        </ul>
      </nav>
      <button
        className="nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
