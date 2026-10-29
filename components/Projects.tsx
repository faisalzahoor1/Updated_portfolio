"use client";

import Image from "next/image";
import { useState } from "react";
import { filters, projects, type Category } from "@/lib/data";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  // Alternating between two identical keyframes restarts the entrance animation on every filter change.
  const [round, setRound] = useState(0);

  const choose = (id: "all" | Category) => { setFilter(id); setRound((r) => r + 1); };

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects" data-reveal="">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`filter${filter === f.id ? " is-active" : ""}`}
            onClick={() => choose(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects">
        {projects.map((p, i) => {
          const show = filter === "all" || p.categories.includes(filter);
          return (
            <article
              key={p.title}
              className={`project glass${show ? "" : " is-hidden"}`}
              data-reveal=""
              style={{
                "--d": `${(i % 3) * 0.08}s`,
                animationName: round ? (round % 2 ? "cardInA" : "cardInB") : undefined,
              } as React.CSSProperties}
            >
              <a className="project__media" href={p.repo} target="_blank" rel="noopener" aria-label={`${p.title} on GitHub`}>
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={960}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 400px"
                  unoptimized={p.image.endsWith(".svg")}
                />
                {p.flag && <span className="project__flag">{p.flag}</span>}
              </a>
              <div className="project__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <a className="project__link" href={p.repo} target="_blank" rel="noopener">
                  <GitHubIcon />View on GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
