"use client";

import { useEffect, useState } from "react";

/** Typewriter that cycles through the given phrases. Server-renders the first phrase. */
export default function Typed({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let r = 0, c = words[0].length, deleting = true, timer = 0;
    const tick = () => {
      const word = words[r];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));
      let delay = deleting ? 40 : 85;
      if (!deleting && c === word.length) { deleting = true; delay = 1800; }
      else if (deleting && c === 0) { deleting = false; r = (r + 1) % words.length; delay = 350; }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [words]);

  return <span className="typed">{text}</span>;
}
