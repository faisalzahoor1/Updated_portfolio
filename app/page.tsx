import Image from "next/image";
import type { CSSProperties } from "react";
import Background from "@/components/Background";
import ContactForm from "@/components/ContactForm";
import Effects from "@/components/Effects";
import { ArrowIcon, DownloadIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import Nav, { Logo } from "@/components/Nav";
import Projects from "@/components/Projects";
import SectionHead from "@/components/SectionHead";
import SplitText from "@/components/SplitText";
import Typed from "@/components/Typed";
import { certifications, education, experience, marquee, practices, roles, site, skillGroups, stats } from "@/lib/data";

const delay = (i: number) => ({ "--d": `${(i % 6) * 0.08}s` }) as CSSProperties;

const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

const contactCards = [
  { href: `mailto:${site.email}`, label: "Email", value: site.email, color: "#2563eb", Icon: MailIcon },
  { href: site.whatsapp, label: "WhatsApp", value: site.phoneDisplay, color: "#2563eb", Icon: WhatsAppIcon },
  { href: site.linkedin, label: "LinkedIn", value: "in/mfaisalzahoor", color: "#2563eb", Icon: LinkedInIcon },
  { href: site.instagram, label: "Instagram", value: `@${site.instagramUser}`, color: "#2563eb", Icon: InstagramIcon },
  { href: site.github, label: "GitHub", value: site.githubUser, color: "#2563eb", Icon: GitHubIcon },
];

const heroChips = [
  { name: "React", icon: "react/react-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
  { name: "ASP.NET", icon: "dot-net/dot-net-original.svg" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="preloader" aria-hidden="true">
        <div className="preloader__logo"><span>F</span><span>Z</span></div>
        <div className="preloader__bar"><i /></div>
      </div>

      <Background />
      <Effects />
      <Nav />

      <main id="main">
        {/* HERO */}
        <section className="hero" id="home">
          <div className="container hero__inner">
            <div className="hero__text">
              <p className="hero__hello" data-reveal=""><span className="wave">👋</span> Hi, I&apos;m</p>
              <h1 className="hero__name">
                <SplitText as="span" className="split" text="Faisal" />
                <SplitText as="span" className="split gradient-text" text="Zahoor" />
              </h1>
              <p className="hero__role" data-reveal="">
                <span className="mono">&lt;</span><Typed words={roles} /><span className="caret" /><span className="mono">/&gt;</span>
              </p>
              <p className="hero__desc" data-reveal="">
                I build <strong>scalable web applications</strong>, <strong>RESTful APIs</strong> and <strong>real-time systems</strong> —
                from pixel-perfect React interfaces to production-ready Node.js, FastAPI and ASP.NET backends.
              </p>
              <div className="hero__actions" data-reveal="">
                <a href="#projects" className="btn btn--primary magnetic"><span>View my work</span><ArrowIcon /></a>
                <a href="#contact" className="btn btn--ghost magnetic"><span>Hire me</span></a>
              </div>
              <ul className="socials" aria-label="Social links" data-reveal="">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}><a href={href} target="_blank" rel="noopener" aria-label={label}><Icon /></a></li>
                ))}
                <li><a href={`mailto:${site.email}`} aria-label="Email"><MailIcon /></a></li>
              </ul>
            </div>

            <div className="hero__visual" data-reveal="">
              <div className="avatar" data-tilt="">
                <div className="avatar__ring" />
                <div className="avatar__img">
                  <Image src="/assets/profile.jpg" alt="Portrait of Faisal Zahoor" width={480} height={480} priority sizes="(max-width: 900px) 300px, 400px" />
                </div>
                {heroChips.map((c, i) => (
                  <div key={c.name} className={`chip chip--${i + 1}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${c.icon}`} alt="" width={22} height={22} loading="lazy" />
                    {c.name}
                  </div>
                ))}
                <div className="status"><i />Open to work</div>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll-hint" aria-label="Scroll to About"><span /></a>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="marquee__item"><span>{m}</span><b>✦</b></span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <SectionHead eyebrow="01 — About me" title="Turning ideas into *fast, scalable* products." />
            <div className="about">
              <div className="about__text" data-reveal="">
                <p>
                  I&apos;m <strong>{site.name}</strong>, a <strong>Full Stack Developer</strong> specialising in scalable web applications,
                  RESTful APIs and real-time systems. I work across the modern JavaScript ecosystem — <strong>React.js, Next.js, Node.js and
                  Express.js</strong> — with additional backend experience in <strong>FastAPI, ASP.NET and Socket.io</strong>.
                </p>
                <p>
                  I design software using <strong>MVC, Modular Monolith and Microservices</strong> architectures, with a strong focus on clean,
                  maintainable, performance-driven code. Lately I&apos;ve been building AI-powered apps with <strong>LangChain, LangGraph and Gemini</strong>.
                </p>
                <p>
                  I&apos;m currently pursuing my <strong>BS in Computer Science at COMSATS University Islamabad</strong>, paired with hands-on internship
                  experience building enterprise backend systems and full stack applications — and I&apos;m actively looking for opportunities where I can ship impactful software.
                </p>
                <div className="about__actions">
                  <a href="/New_MuhammadFaisalZahoor_Resume_updated.pdf" download className="btn btn--primary magnetic"><span>Download resume</span><DownloadIcon /></a>
                  <a href="#contact" className="link-arrow">Let&apos;s build something together <span>→</span></a>
                </div>
              </div>
              <div className="stats">
                {stats.map((s, i) => (
                  <div key={s.label} className="stat glass" data-reveal="" style={delay(i)}>
                    <strong data-count={s.value}>0</strong>{s.plus && <span>+</span>}
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="container">
            <SectionHead eyebrow="02 — Tech stack" title="Tools I use to *build* things." />
            <div className="skills">
              {skillGroups.map((g, i) => (
                <article key={g.title} className="skill-card glass" data-reveal="" style={{ ...delay(i), "--accent": g.accent } as CSSProperties}>
                  <h3><span className="skill-card__icon">{g.symbol}</span>{g.title}</h3>
                  <ul className="tech-list">
                    {g.items.map((t) => (
                      <li key={t.name}>
                        {t.icon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={t.icon} alt="" width={28} height={28} loading="lazy" className={t.invert ? "invert" : undefined} />
                        ) : (
                          <span className="tech-glyph">{t.glyph}</span>
                        )}
                        {t.name}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="skill-card glass skill-card--wide" data-reveal="" style={{ "--accent": "#1e40af" } as CSSProperties}>
                <h3><span className="skill-card__icon">⬡</span>Architecture &amp; Tools</h3>
                <ul className="pill-list">{practices.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="container">
            <SectionHead eyebrow="03 — Experience" title="Where I've *worked.*" />
            <ol className="timeline">
              {experience.map((job, i) => (
                <li key={job.company} className="timeline__item" data-reveal="" style={delay(i)}>
                  <div className="timeline__dot" />
                  <article className="job glass">
                    <div className="job__top">
                      <div className="job__logo" style={{ "--c1": job.colors[0], "--c2": job.colors[1] } as CSSProperties}>{job.logo}</div>
                      <div>
                        <h3>{job.role}</h3>
                        <p className="job__company">{job.company}</p>
                      </div>
                      <span className="badge">{job.duration}</span>
                    </div>
                    <p>{job.summary}</p>
                    <ul className="tags">{job.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="container">
            <SectionHead eyebrow="04 — Projects" title="Things I've *built.*" />
            <Projects />
            <div className="center" data-reveal="">
              <a href={`${site.github}?tab=repositories`} target="_blank" rel="noopener" className="btn btn--ghost magnetic">
                <GitHubIcon /><span>See all repositories</span>
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="section" id="education">
          <div className="container">
            <SectionHead eyebrow="05 — Education & Certifications" title="Always *learning.*" />
            <article className="edu-card glass" data-reveal="">
              <div className="edu-card__icon" aria-hidden="true">🎓</div>
              <div>
                <h3>{education.degree}</h3>
                <p className="edu-card__school">{education.school}</p>
                <p className="edu-card__date">{education.years}</p>
                <p>{education.details} Final Year Project: <strong>{education.fyp}</strong> — AI-powered news analysis.</p>
              </div>
            </article>

            {certifications.length > 0 && (
              <>
                <h3 className="sub-title" data-reveal="">Licenses &amp; Certifications</h3>
                <div className="certs">
                  {certifications.map((c, i) => (
                    <article key={c.name} className="cert glass" data-reveal="" style={delay(i)}>
                      <div className="cert__badge" aria-hidden="true">🏅</div>
                      <h4>{c.name}</h4>
                      <p className="cert__issuer">{c.issuer}</p>
                      <p className="cert__date">{c.date}</p>
                      {c.url && <a href={c.url} target="_blank" rel="noopener" className="cert__link">Show credential →</a>}
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="container">
            <SectionHead
              eyebrow="06 — Contact"
              title="Have a project or *question?*"
              lead="Whether it's a job opportunity, a freelance project, or a question about web development — my inbox is always open. I'll get back to you as soon as possible."
            />
            <div className="contact">
              <div className="contact__cards">
                {contactCards.map(({ href, label, value, color, Icon }, i) => (
                  <a
                    key={label}
                    className="contact-card glass"
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    data-reveal=""
                    style={{ ...delay(i), "--c": color } as CSSProperties}
                  >
                    <span className="contact-card__icon"><Icon /></span>
                    <span><small>{label}</small><strong>{value}</strong></span>
                  </a>
                ))}
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <p>© {new Date().getFullYear()} {site.name}. Designed &amp; built with ♥ and lots of ☕.</p>
          <ul className="socials socials--sm">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}><a href={href} target="_blank" rel="noopener" aria-label={label}><Icon /></a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
