# Faisal Zahoor — Portfolio

Personal portfolio of **Faisal Zahoor**, Full Stack Developer and CS student at COMSATS University Islamabad. Built with Next.js, React and TypeScript.

## Features

- Animated hero with typed roles, split-text headings and background effects
- Skills, experience, education and project sections
- Contact form (via FormSubmit) plus email, WhatsApp, LinkedIn, GitHub and Instagram links
- Downloadable resume
- SEO: metadata, sitemap, robots and web app manifest

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Plain CSS (`app/globals.css`)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/          Pages, layout, global styles, sitemap, robots, manifest
components/   UI components (Nav, Projects, ContactForm, effects, ...)
lib/data.ts   All site content: profile, skills, experience, projects
public/       Images, favicon and resume PDF
```

## Editing Content

All text, links, skills and projects live in [`lib/data.ts`](lib/data.ts). Update that file to change the site. After deploying, set `site.url` to your real domain so SEO and social cards use it.

## Deployment

Deploys out of the box on [Vercel](https://vercel.com/): import the repository and keep the default Next.js settings.

## Contact

- GitHub: [faisalzahoor1](https://github.com/faisalzahoor1)
- LinkedIn: [mfaisalzahoor](https://www.linkedin.com/in/mfaisalzahoor/)
- Email: scientistcomputer2002@gmail.com
